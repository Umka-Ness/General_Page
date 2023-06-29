import { reload } from "firebase/auth";
import React from "react";

export const Setting = () => {
  const SignOut = () => {
    localStorage.setItem("numberPage", "");
    window.location.reload();
  };
  return (
    <>
      <div></div>
      <button onClick={SignOut}>Sign out</button>
      {/* Сделать тут настройки аккаунта с изменением пароля, логина и выход из акк */}
    </>
  );
};
