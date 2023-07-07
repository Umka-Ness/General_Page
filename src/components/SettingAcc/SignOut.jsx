import React from "react";

export const SignOut = ({ id }) => {
  const SignOut = () => {
    localStorage.setItem("numberPage", "");
    window.location.reload();
  };
  return (
    <>
      <div></div>
      <div onClick={SignOut} id={id}>
        Sign out
      </div>
      {/* Сделать тут настройки аккаунта с изменением пароля, логина и выход из акк */}
    </>
  );
};
