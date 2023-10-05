import React, { useRef, useState } from "react";
import css from "../../main.module.css";
import { initializeApp } from "firebase/app";
import "firebase/compat/database"; // Импорт модуля базы данных
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import firebaseConfig from "../../firebase";
import { Login } from "./Login";
import bgImg from "./img/podvodnie-peizazhi-1.jpg";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import validator from "validator";

export const Register = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [value, setValue] = useState(false);
  const [id, setId] = useState("");
  const [errorAlert, setErrorAlert] = useState();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [sendVerify, setSendVerify] = useState("");
  const refError = useRef(null);
  // const [generateKeyStatus, setGenerateKeyStatus] = useState(true);
  //Generator hesh key
  function generateRandomKey(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
    // setGenerateKeyStatus(false);
    return key;
  }
  // Пример использования: генерация ключа из 12 символов
  const randomKey = generateRandomKey(42);
  const auth = getAuth();

  const isEmailAlreadyRegistered = async (email) => {
    // Проверяем валидность email
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      console.log(methods.length > 0);
      return methods.length > 0; // Если есть методы входа, то емейл уже зарегистрирован
    } catch (error) {
      console.error("Ошибка при проверке емейла:", error);
      return false;
    }
  };

  const postData = async (e) => {
    const errorRefCurrent = refError.current;
    e.preventDefault();

    const querySnapshot = await getDocs(collection(db, "users"));
    const userArray = querySnapshot.docs;

    for (let i = 0; i < userArray.length; i++) {
      const userData = userArray[i].data();
      const userLogin = userData.login;
      const userToken = userData?.accessToken;

      if (login === "" || password === "") {
        setErrorAlert("incorrect email or password");
        errorRefCurrent.style.display = "inherit";
        setTimeout(() => {
          errorRefCurrent.style.display = "none";
        }, 5000);
      } else if (password.length < 6) {
        setErrorAlert("Your password is too short");
        errorRefCurrent.style.display = "inherit";
        setTimeout(() => {
          errorRefCurrent.style.display = "none";
        }, 5000);
      } else if (!validator.isEmail(login)) {
        // Проверяем email с помощью регулярного выражения
        setErrorAlert("Введите корректный email адрес");
        errorRefCurrent.style.display = "inherit";
        setTimeout(() => {
          errorRefCurrent.style.display = "none";
        }, 5000);
      } else if (login === userLogin && userToken) {
        setErrorAlert("Емейл уже зарегистрирован");
      } else {
        console.log(login);
        console.log(password);
        const emailAlreadyRegistered = await isEmailAlreadyRegistered(login);
        if (emailAlreadyRegistered) {
          setErrorAlert("Email уже зарегистрирован");
          errorRefCurrent.style.display = "inherit";

          setTimeout(() => {
            errorRefCurrent.style.display = "none";
          }, 5000);
        } else {
          // Продолжите процесс регистрации, так как email не существует в базе данных
          // ...

          createUserWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
              // Пользователь успешно зарегистрирован
              const user = userCredential.user;

              // Ожидайте события изменения состояния аутентификации
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  // Пользователь успешно авторизован
                  const uid = user.uid;
                  user.getIdToken();
                  console.log("Пользователь авторизован");
                  sendEmailVerification(auth.currentUser)
                    .then(() => {
                      // Письмо успешно отправлено
                      setSendVerify("Письмо успешно отправлено на Email");
                      console.log(sendVerify);
                      console.log("Письмо успешно отправлено");
                      console.log(auth.currentUser.emailVerified);
                    })
                    .catch((error) => {
                      // Обработка ошибок
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      console.log(errorCode, errorMessage);
                      console.log(auth.currentUser, "auth.currentUser");
                    });

                  // Теперь вы можете вызвать getIdToken или выполнять другие действия с пользователем.

                  // Выполняйте операции, требующие аутентификации здесь.
                } else {
                  // Пользователь не авторизован
                  console.log("Пользователь не авторизован");
                }
              });

              console.log(user);
            })
            .catch((error) => {
              // Обработка ошибок регистрации
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });

          try {
            const docRef = await addDoc(collection(db, "users"), {
              login: login,
              password: password,
              date: new Date(),
              key: randomKey,
              hasClickedLink: false,
              loginMethod: "Email",
            });
            const userRef = doc(db, "users", docRef.id);

            await updateDoc(userRef, {
              key: docRef.id,
            });

            console.log("Document written with ID: ", docRef.id);
            localStorage.setItem("docRef.id", docRef.id);
            setId(docRef.id);
            setValue(true);
          } catch (e) {
            console.error("Error adding document: ", e);
          } finally {
          }
        }
        break;
      }
    }
  };
  const renderContent = () => {
    if (value) {
      return <Login id={id} textSendEmail={sendVerify} />;
    } else {
      return (
        <>
          <div
            className={css.bgContainer}
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className={css.authContainer}>
            <div className={css.auth}>
              <p className={css.namePage}>Register</p>
              <p ref={refError} className={css.errorRegister}>
                {errorAlert}
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email@gmail.com"
                className={css.login}
                value={login.trim()}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={css.password}
                value={password.trim()}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={postData}
                className={css.createBtn}
                type="submit"
              >
                Create account
              </button>
              <p style={{ color: "#000", textAlign: "center" }}>or</p>
              <button onClick={() => setValue(true)} className={css.loginBtn}>
                Login
              </button>
            </div>
          </div>
        </>
      );
    }
  };
  return <>{renderContent()}</>;
};
