import React from "react";
import css from "../../main.module.css";
export const BurgerBtn = ({ name }) => {
  return (
    <ul className={css.burgerUl}>
      <li className={css.burgerLi}>
        <a href="#" className={css.burgwrLink}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span style={{ textAlign: "center" }}> lecture {name}</span>
        </a>
      </li>
    </ul>
  );
};
