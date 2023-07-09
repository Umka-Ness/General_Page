import React from "react";
import css from "../../main.module.css";

export const BtnComponent = ({ id, image, name, color }) => {
  return (
    <button
      className={css.NavigationBtn}
      style={{ backgroundImage: `url(${image})`, backgroundColor: color }}
      id={id}
    >
      {name}
    </button>
  );
};
