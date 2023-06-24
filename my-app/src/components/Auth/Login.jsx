import React, { useContext, useRef, useState } from "react";
import css from "../../main.module.css";
import firebase from "firebase/compat/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Register } from "./Register";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { Context } from "../../App";

export const Login = (id) => {
  const [value, setValue] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isGood, setIsGood] = useState(false);
  const refError = useRef(null);

  const { auth } = useContext(Context);

  const registerGmail = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: user.displayName,
        login: login,
        password: password,

        email: user.email,
        phoneNumber: user.phoneNumber,
        accessToken: user.multiFactor.user.stsTokenManager.accessToken,
        photoURL: user.photoURL,
        // date: new Date(),
      });
      setIsGood(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyB1mWqevmipidxWW264EnXV__YFdSkx93M",
    authDomain: "umka-77a72.firebaseapp.com",
    databaseURL: "https://umka-77a72-default-rtdb.firebaseio.com",
    projectId: "umka-77a72",
    storageBucket: "umka-77a72.appspot.com",
    messagingSenderId: "270019919476",
    appId: "1:270019919476:web:28ff114af689a2143bdb21", // Initialize Firebaseconst app = initializeApp(firebaseConfig
    // и другие настройки
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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
        <div className={css.authContainer}>
          <div className={css.auth}>
            <p ref={refError} className={css.errorRegister}>
              incorrect username or password
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={css.email}
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
            <button onClick={fetchData}>Login in</button>
            <p style={{ color: "#fff", textAlign: "center" }}>or</p>

            <button onClick={() => setValue(true)}>Create account </button>
            <button onClick={registerGmail}>Gmail</button>
          </div>
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};
