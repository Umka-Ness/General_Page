import React from "react";
import { getAuth } from "firebase/auth";
export const SignOut = ({ id }) => {
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Выход из аккаунта
      localStorage.setItem("numberPage", "");
      window.location.reload(); // Перезагрузка страницы после выхода
    } catch (error) {
      console.error("Ошибка при выходе из аккаунта:", error);
    }
  };

  return (
    <>
      <div></div>
      <div onClick={handleSignOut} id={id}>
        Sign out
      </div>
      {/* Сделать тут настройки аккаунта с изменением пароля, логина и выходом из аккаунта */}
    </>
  );
};
