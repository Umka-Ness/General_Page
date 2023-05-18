import React from "react";
import logo from "../Game-page/Screenshot_9.png";
import css from "./GamePage.module.css";
export const Button = ({ url }) => {
  return (
    <div>
      <form action={url} target="_blank">
        <button className={css.btn}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "350px", height: "200px" }}
          />
        </button>
      </form>
    </div>
  );
};
