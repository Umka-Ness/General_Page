import React, { useContext, useEffect, useRef, useState } from "react";
import css from "../../main.module.css";
import firebase from "firebase/compat/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
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
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { PageOne } from "../Game-page/pageOne";
import { StepByStep } from "../StepByStep/StepByStep";
import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { DragAndDropLevels } from "../DragAndDrop/DragAndDropLevels";
import { Dice } from "../Dice/Dise";
import { createContext } from "react";
export const avatarImageContext = createContext();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

sessionTime();

export const Login = ({ textSendEmail, emailAgain }) => {
  const [value, setValue] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isGood, setIsGood] = useState(false);
  const refError = useRef("");
  const sendAgainRef = useRef();
  const timerCountRef = useRef();
  const [imageAvatar, setImageAvatar] = useState();
  const { auth } = useContext(Context);
  const [errorAlert, setErrorAlert] = useState();
  const [timerSendEmailAgain, setTimerSendEmailAgain] = useState(60);
  const [intervalIdState, setIntervalIdState] = useState();
  const [workTimer, setWorkTimer] = useState(false);

  const registerGmail = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    const querySnapshot = await getDocs(collection(db, "users"));

    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const { user } = await auth.signInWithPopup(provider);
      const querySnapshot = await getDocs(collection(db, "users"));
      const userArray = querySnapshot.docs;

      for (let i = 0; i < userArray.length; i++) {
        const userData = userArray[i].data();
        const userLogin = userData.login;
        if (userLogin === user.email) {
          //...
          setErrorAlert("Email уже зарегистрирован");
        } else {
          const avatarUrl = user.photoURL;
          console.log(user);
          setImageAvatar(avatarUrl);

          const existingUser = querySnapshot.docs.find(
            (doc) => doc.data().login === user.email
          );
          if (!existingUser) {
            // Пользователя с таким email нет в базе данных, добавляем его
            await addDoc(collection(db, "users"), {
              name: user.displayName,
              login: login ? login : user.displayName,
              password: password
                ? password
                : user.multiFactor.user.stsTokenManager.accessToken,
              email: user.email,
              phoneNumber: user.phoneNumber,
              accessToken: user.multiFactor.user.stsTokenManager.accessToken,
              refreshToken: user.refreshToken,
              photoURL: user.photoURL,
              provider: user.providerData[0].providerId,
              creationTime: user.metadata.creationTime,
              // lastSignInTime: user.metadata.lastSignInTime,
              // date: new Date(),
            });
            console.log("add user");
            setIsGood(true);
          } else {
            const userLocalDataId = localStorage.getItem("docRef.id");
            const userRef = doc(db, "users", userLocalDataId);
            const userDoc = await getDoc(userRef);

            await updateDoc(userRef, {
              name: user.displayName,
              password: password
                ? password
                : user.multiFactor.user.stsTokenManager.accessToken,
              email: user.email,
              phoneNumber: user.phoneNumber,
              accessToken: user.multiFactor.user.stsTokenManager.accessToken,
              refreshToken: user.refreshToken,
              photoURL: user.photoURL,
              provider: user.providerData[0].providerId,
              hasClickedLink: true,
              loginMethod: "Google",
            });
            console.log("Пользователь уже зарегистрировал этот емейл");
            console.log(user.emailVerified);
            setIsGood(true);
          }

          console.log(user);
        }
      }
    } catch (e) {
      console.error("Error adding document or signInWithPopup is closed: ", e);
      alert("Reload page");
    } finally {
    }
  };
  // ...
  useEffect(() => {
    if (textSendEmail && !workTimer) {
      refError.current.style.display = "inherit";
      sendAgainRef.current.style.display = "flex";
      sendAgainRef.current.style.background = "#bbbbbb";

      refError.current.style.color = "green";

      console.log(textSendEmail); // Просто используйте textSendEmail напрямую
      setErrorAlert(textSendEmail);
      const intervalId = setInterval(() => {
        setTimerSendEmailAgain((prevTimer) => {
          setIntervalIdState(intervalId);
          if (prevTimer === 0) {
            clearInterval(intervalId); // Остановка интервала, когда таймер достигнет 0
            const timerCountRefCurrent = timerCountRef.current;
            const sendAgainRefCurrent = sendAgainRef.current;

            setWorkTimer(true);
            setTimerSendEmailAgain(60);
            sendAgainRefCurrent.style.background = "white";

            timerCountRefCurrent.style.display = "none";
            console.log(prevTimer, "zero");

            return prevTimer; // Не изменяем таймер, если он равен 0
          }
          console.log(prevTimer);

          return prevTimer - 1; // Уменьшаем таймер, если он больше 0
        });
      }, 1000);

      // Возвращаем функцию очистки, чтобы остановить интервал при размонтировании компонента
      return () => clearInterval(intervalId);
    }
  }, [textSendEmail, workTimer]);

  // ...

  useEffect(() => {
    // Проверка авторизации пользователя при загрузке компонента
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Получаем список всех cookies на странице

      if (user) {
        // setIsGood(true);

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

          await addDoc(collection(db, "users"), {
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

          if (!user) {
            // Пользователя с такой почтой нет в базе данных, добавляем его
            await addDoc(collection(db, "users"), {
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

            // Теперь аутентифицируйте пользователя после создания записи
            const userCredentials = await auth.signInWithEmailAndPassword(
              user.email,
              password ? password : null
            );
            const authenticatedUser = userCredentials.user;

            console.log("User authenticated:", authenticatedUser);
          } else {
            console.log("User already exists in the database:", user);
          }

          // Перенаправляем на нужную страницу после успешной авторизации
          // Ваш код для перенаправления здесь

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
  }, [auth, login, password]);

  const fetchData = async (e) => {
    const errorRefCurrent = refError.current;
    // e.preventDefault();
    if (login === "" || password === "") {
      setErrorAlert("incorrect username or password");

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
        const userKey = userData.key;

        if (login === userLogin && password === userPassword) {
          setErrorAlert("");
          clearInterval(intervalIdState);
          localStorage.setItem("keyUser", userKey);
          console.log(userArray);
          const userLocalDataId = localStorage.getItem("docRef.id");
          const userRef = doc(db, "users", userLocalDataId);
          const userDoc = await getDoc(userRef);
          // console.log(
          //   userDoc._document.data.value.mapValue.fields.hasClickedLink
          // );

          if (userDoc.exists() && !userDoc.hasClickedLink) {
            // Документ существует, можно обновить его
            await updateDoc(userRef, {
              hasClickedLink: true,
            });
            console.log("hasClickedLink: ", userDoc.hasClickedLink);
          } else {
            console.error("User document not found.");
          }
          const { user } = await signInWithEmailAndPassword(
            auth,
            login,
            password
          );
          console.log(user);
          console.log(userDoc._document.data.value.mapValue.fields);
          if (user.emailVerified) {
            setIsGood(true);
          } else {
            setErrorAlert(
              "Confirm your email, the email has already been sent"
            );

            return;
          }

          console.log("Success");

          break; // Прерываем цикл после нахождения первого совпадения
        } else if (userLogin === userData.email) {
          setErrorAlert("Email already registered");
        } else {
          setErrorAlert("incorrect username or password");

          errorRefCurrent.style.display = "inherit";
          setTimeout(() => {
            errorRefCurrent.style.display = "none";
          }, 5000);
          console.log("nee");
        }
      }
    } catch (error) {
      console.error("Ошибка при чтении данных:", error);
      setErrorAlert("Your email already in use or invalid email");

      errorRefCurrent.style.display = "inherit";
      setTimeout(() => {
        errorRefCurrent.style.display = "none";
      }, 10000);
    }
  };

  const sendAgainEmailVerify = () => {
    if (workTimer) {
      const timerCountRefCurrent = timerCountRef.current;

      if (timerCountRefCurrent && emailAgain) {
        timerCountRefCurrent.style.display = "inherit";

        // Проверяем, авторизован ли пользователь
        const user = auth.currentUser; // Предполагая, что auth - это ваш объект аутентификации Firebase

        if (user) {
          // Пользователь авторизован, теперь можно отправлять письмо на подтверждение
          console.log(emailAgain);
          console.log(user);

          onAuthStateChanged(auth, (user) => {
            if (user) {
              // Пользователь успешно авторизован
              console.log(user);
              console.log("Пользователь авторизован");
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  // Письмо успешно отправлено
                  console.log(auth.currentUser.email);
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
        } else {
          // Пользователь не авторизован, просто игнорируем отправку письма
          console.log("Пользователь не авторизован");
        }
      }
      setWorkTimer(false);
    } else {
    }
  };

  const renderContent = () => {
    if (value) {
      return <Register />;
    } else if (
      isGood ||
      localStorage.getItem("numberPage") === "NavigationBtn"
    ) {
      return (
        <>
          <avatarImageContext.Provider
            value={{
              imageAvatar,
              setImageAvatar,
            }}
          >
            {/* imageAvatar={imageAvatar} */}
            <NavigationBtn />
          </avatarImageContext.Provider>
        </>
      );
    } else if (localStorage.getItem("numberPage") === "pageOne") {
      return <PageOne />;
    } else if (localStorage.getItem("numberPage") === "StepByStep") {
      return <StepByStep />;
    } else if (localStorage.getItem("numberPage") === "StepByStepGame") {
      return <StepByStep />;
    } else if (localStorage.getItem("numberPage") === "Lecture") {
      return <Lecture />;
    } else if (localStorage.getItem("numberPage") === "Setting") {
      return <Setting />;
    } else if (localStorage.getItem("numberPage") === "DragAndDrop") {
      return <DragAndDrop />;
    } else if (localStorage.getItem("numberPage") === "DragAndDropLevels") {
      return <DragAndDropLevels />;
    } else if (localStorage.getItem("numberPage") === "Dice") {
      return <Dice />;
    } else {
      return (
        <>
          <div
            className={css.bgContainer}
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div className={css.authContainer}>
            <div className={css.auth}>
              <p className={css.namePage}>Log in</p>

              <p ref={refError} className={css.errorRegister}>
                {errorAlert}
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
                Log in
              </button>
              <div style={{ position: "relative" }}>
                <div>
                  <div
                    style={{ justifyContent: "space-between" }}
                    onClick={sendAgainEmailVerify}
                    ref={sendAgainRef}
                    className={css.sendAgainBtn}
                  >
                    <p ref={timerCountRef}> {timerSendEmailAgain}s</p>
                    <p>Send Again</p>
                  </div>
                </div>
                <p style={{ color: "#000", textAlign: "center" }}>or</p>
              </div>

              <button onClick={() => setValue(true)} className={css.createBtn}>
                Create account
              </button>
              <button
                onClick={registerGmail}
                className={css.gmailBtn}
                disabled={false}
              >
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
