import React, { useContext, useRef, useState } from "react";
import css from "../../main.module.css";
import { initializeApp } from "firebase/app";
import "firebase/compat/database"; // Импорт модуля базы данных
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

import { Login } from "./Login";

export const Register = () => {
  // Инициализация Firebase
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

  const [value, setValue] = useState(false);
  const [id, setId] = useState("");

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const refError = useRef(null);

  const postData = async (e) => {
    const errorRefCurrent = refError.current;
    e.preventDefault();
    if (login === "" || password === "") {
      errorRefCurrent.style.display = "inherit";
      setTimeout(() => {
        errorRefCurrent.style.display = "none";
      }, 5000);
    } else {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          login: login,
          password: password,
          date: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
        setId(docRef.id);
        setValue(true);
      } catch (e) {
        console.error("Error adding document: ", e);
      } finally {
      }
    }
  };
  const renderContent = () => {
    if (value) {
      return <Login id={id} />;
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
            <button onClick={postData}>Create account</button>
            <p style={{ color: "#fff", textAlign: "center" }}>or</p>
            <button onClick={() => setValue(true)}>Login</button>
          </div>
        </div>
      );
    }
  };
  return <>{renderContent()}</>;
};
