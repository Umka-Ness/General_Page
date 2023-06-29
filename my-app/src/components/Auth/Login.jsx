import React, { useContext, useEffect, useRef, useState } from "react";
import css from "../../main.module.css";
import firebase from "firebase/compat/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Register } from "./Register";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { Context } from "../../App";
import firebaseConfig from "../../firebase";
import bgImg from "./img/podvodnie-peizazhi-1.jpg";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const sessionTime = () => {
  const auth = getAuth();

  setPersistence(auth, browserLocalPersistence)
    .then((data) => {
      // Тип сохранения состояния аутентификации успешно установлен
      // Здесь можно продолжить выполнение операций аутентификации
    })
    .catch((error) => {
      console.log(`sessionTime fun: ${error} `);
      // Обработка ошибок при установке типа сохранения состояния аутентификации
    });
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
sessionTime();
export const Login = (id) => {
  const [value, setValue] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isGood, setIsGood] = useState(false);
  const refError = useRef(null);

  const { auth } = useContext(Context);

  useEffect(() => {
    // Проверка авторизации пользователя при загрузке компонента
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsGood(true);
        console.log(user);
      } else {
        setIsGood(false);
      }
    });

    return () => {
      <NavigationBtn />;
      unsubscribe(); // Отписка от обновлений авторизации при размонтировании компонента
    };
  }, []);

  const registerGmail = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const { user } = await auth.signInWithRedirect(provider);
      console.log(user);

      setIsGood(true);
    } catch (e) {
      await auth.signInWithRedirect(provider);
      console.error("Error adding document or signInWithPopup is closed: ", e);
      alert("Nooo");
    } finally {
    }
  };

  useEffect(() => {
    // Проверка авторизации пользователя при загрузке компонента
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsGood(true);
        console.log(user);
      } else {
        setIsGood(false);
      }
    });

    // Обработка результата перенаправления после входа в Google аккаунт
    const handleRedirectResult = async () => {
      try {
        const { user } = await auth.getRedirectResult();
        if (user) {
          // Здесь можете выполнить необходимые действия после успешного входа через Google аккаунт

          const docRef = await addDoc(collection(db, "users"), {
            name: user.displayName,
            login: login ? login : user.displayName,
            password: password
              ? password
              : user.multiFactor.user.stsTokenManager.accessToken,

            email: user.email,
            phoneNumber: user.phoneNumber,
            accessToken: user.multiFactor.user.stsTokenManager.accessToken,
            photoURL: user.photoURL,
            // date: new Date(),
          });
          console.log(user);
        }
      } catch (error) {
        console.error("Error getting redirect result: ", error);
      }
    };

    handleRedirectResult(); // Вызов обработчика результатов перенаправления

    return () => {
      <NavigationBtn />;
      unsubscribe(); // Отписка от обновлений авторизации при размонтировании компонента
    };
  }, []);
  const fetchData = async (e) => {
    const errorRefCurrent = refError.current;
    e.preventDefault();
    if (login === "" || password === "") {
      errorRefCurrent.style.display = "inherit";
      setTimeout(() => {
        errorRefCurrent.style.display = "none";
      }, 5000);
    }
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userArray = querySnapshot.docs;
      for (let i = 0; i < userArray.length; i++) {
        const userData = userArray[i].data();
        const userLogin = userData.login;
        const userPassword = userData.password;
        if (login === userLogin && password === userPassword) {
          setIsGood(true);

          console.log("Success");
          break; // Прерываем цикл после нахождения первого совпадения
        } else {
          errorRefCurrent.style.display = "inherit";
          setTimeout(() => {
            errorRefCurrent.style.display = "none";
          }, 5000);
          console.log("nee");
        }
      }
    } catch (error) {
      console.error("Ошибка при чтении данных:", error);
    }
  };
  const renderContent = () => {
    if (value) {
      return <Register />;
    } else if (isGood) {
      return <NavigationBtn />;
    } else {
      return (
        <>
          <div
            className={css.bgContainer}
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className={css.authContainer}>
            <div className={css.auth}>
              <p className={css.namePage}>Login in</p>

              <p ref={refError} className={css.errorRegister}>
                incorrect username or password
              </p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Login"
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

              <button onClick={fetchData} className={css.loginInBtn}>
                Login in
              </button>
              <p style={{ color: "#000", textAlign: "center" }}>or</p>

              <button onClick={() => setValue(true)} className={css.createBtn}>
                Create account
              </button>
              <button onClick={registerGmail} className={css.gmailBtn}>
                Gmail
              </button>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{renderContent()}</>;
};
