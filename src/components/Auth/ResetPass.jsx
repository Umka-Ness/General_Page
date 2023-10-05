import React, { useContext, useEffect, useRef, useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { Context } from "../../App";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase";
import css from "../../main.module.css";

export const ResetPass = () => {
  const { auth } = useContext(Context);
  const refNewPass = useRef();
  const errorParagraf = useRef();
  const [errorPass, setErrorPass] = useState();
  const [password, setPassword] = useState();
  const errorParagrafCurrent = errorParagraf.current;
  console.log(refNewPass);

  const userId = localStorage.getItem("docRef.id");

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Функция для повторной аутентификации пользователя
  const reauthenticateUser = async (currentPassword) => {
    const user = auth.currentUser;

    try {
      // Создаем учетные данные для повторной аутентификации
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      // Проводим повторную аутентификацию
      await reauthenticateWithCredential(user, credential);

      // Пользователь успешно повторно аутентифицирован
      console.log("Пользователь успешно повторно аутентифицирован");
    } catch (error) {
      if (error.code === "auth/requires-recent-login") {
        // Обработка ошибки требующей повторной аутентификации
        console.error(
          "Ошибка требующей повторной аутентификации:",
          error.message
        );
      } else {
        console.error("Произошла неизвестная ошибка:", error);
      }
    }
  };

  // Функция для смены пароля пользователя
  const changePassword = async () => {
    const user = auth.currentUser; // Получаем текущего пользователя
    if (password < 6 || password === "") {
      setErrorPass("password less than 6 characters");

      errorParagrafCurrent.style.display = "inherit";
      setTimeout(() => {
        errorParagrafCurrent.style.display = "none";
      }, 5000);
    } else {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userArray = querySnapshot.docs;

      for (let i = 0; i < userArray.length; i++) {
        const userData = userArray[i].data();
        const userPass = userData.password;
        const userKey = userData.key;
        if (userKey === userId) {
          try {
            // Вызываем функцию повторной аутентификации перед изменением пароля
            await reauthenticateUser(userPass);

            // Изменяем пароль пользователя
            await updatePassword(user, password);
            const userRef = doc(db, "users", userId);
            await updateDoc(userRef, {
              password: password,
            });
            // Пароль успешно изменен
            console.log("Password changed successfully");
            setErrorPass("Weak-password");
            errorParagrafCurrent.style.color = "green";

            errorParagrafCurrent.style.display = "inherit";
            setTimeout(() => {
              errorParagrafCurrent.style.display = "none";
            }, 5000);
          } catch (error) {
            console.error("error: ", error);
            console.log(error.code);
            if (error.code === "invalid-argument") {
              setErrorPass("password less than 6 characters");
              try {
                errorParagrafCurrent.style.display = "inherit";
                setTimeout(() => {
                  errorParagrafCurrent.style.display = "none";
                }, 5000);
              } catch (error) {
                console.error(error);
              }
            } else if (error.code === "auth/weak-password") {
              setErrorPass("Weak-password");
              errorParagrafCurrent.style.display = "inherit";
              setTimeout(() => {
                errorParagrafCurrent.style.display = "none";
              }, 5000);
            }
          }
        } else {
        }
      }
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // Получаем список всех cookies на странице
      if (user) {
        // setIsGood(true);

        console.log(user);
      } else {
      }
    });

    return () => {
      // Отписка от обновлений авторизации при размонтировании компонента
    };
  }, [auth]);

  return (
    <>
      <div>
        <p
          ref={errorParagraf}
          style={{ color: "tomato", marginBottom: "5px", textAlign: "center" }}
        >
          {errorPass}
        </p>
        <div style={{ display: "flex", gap: "5px" }}>
          <input
            type="text"
            ref={refNewPass}
            className={css.resetPassInput}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your new password"
          />

          <button onClick={changePassword} className={css.resetPassBtn}>
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
};
