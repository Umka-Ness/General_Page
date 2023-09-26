import React from "react";
import { getAuth, signOut } from "firebase/auth";
import css from "../../main.module.css";

export const SignOut = () => {
  const handleSignOut = () => {
    const auth = getAuth();

    // Выполнение выхода из аккаунта
    signOut(auth)
      .then(() => {
        // Успешный выход из аккаунта

        // Очистка данных браузера
        // Получаем список всех cookies на странице
        const cookies = document.cookie.split(";");

        // Проходимся по списку и удаляем каждый cookie
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }

        localStorage.removeItem("numberPage");
        // Дополнительно можно добавить очистку других данных или куки, если используете
        // дополнительные данные для сохранения состояния пользователя

        // Перезагрузка страницы
        window.location.reload();
      })
      .catch((error) => {
        // Обработка ошибок при выходе из аккаунта
        console.error("Error signing out: ", error);
      });
  };

  return (
    <>
      <div onClick={handleSignOut} className={css.signOut}>
        Sign out
      </div>
      {/* Сделать тут настройки аккаунта с изменением пароля, логина и выход из акк */}
    </>
  );
};
