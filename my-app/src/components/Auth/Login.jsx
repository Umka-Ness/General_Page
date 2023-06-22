import React, { useState } from "react";
import css from "../../main.module.css";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Register } from "./Register";
import { NavigationBtn } from "../Navigation/NavigationBtn";

export const Login = (id) => {
  const [value, setValue] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGood, setIsGood] = useState(false);

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
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userArray = querySnapshot.docs;
      for (let i = 0; i < userArray.length; i++) {
        const userData = userArray[i].data();
        const userEmail = userData.email;
        const userPassword = userData.password;
        if (email === userEmail && password === userPassword) {
          setIsGood(true);
          console.log("Success");
          break; // Прерываем цикл после нахождения первого совпадения
        } else {
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
            <button onClick={fetchData}>Login in</button>
            <p style={{ color: "#fff", textAlign: "center" }}>or</p>

            <button onClick={() => setValue(true)}>Create account </button>
          </div>
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};
