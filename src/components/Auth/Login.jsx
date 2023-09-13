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
import { PageOne } from "../Game-page/pageOne";
import { StepByStep } from "../StepByStep/StepByStep";
import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { DragAndDropLevels } from "../DragAndDrop/DragAndDropLevels";
import { Dice } from "../Dice/Dise";

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
  const refError = useRef("");

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
  }, [auth]);

  const registerGmail = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const { user } = await auth.signInWithRedirect(provider);
      console.log(user);

      setIsGood(true);
    } catch (e) {
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
    } else if (
      isGood ||
      localStorage.getItem("numberPage") === "NavigationBtn"
    ) {
      return <NavigationBtn />;
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
              <button
                onClick={registerGmail}
                className={css.gmailBtn}
                disabled={true}
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
