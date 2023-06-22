import React, { useState } from "react";
import css from "../../main.module.css";
import { initializeApp } from "firebase/app";
import "firebase/compat/database"; // Импорт модуля базы данных
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
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
  };
  const renderContent = () => {
    if (value) {
      return <Login id={id} />;
    } else {
      return (
        <div className={css.authContainer}>
          <div className={css.auth}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={css.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={css.password}
              value={password}
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
