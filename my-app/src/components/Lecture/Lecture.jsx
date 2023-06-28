import React, { useState } from "react";
import css from "../../main.module.css";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { BurgerBtn } from "./BurgerBtn";

export const Lecture = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  const renderContent = () => {
    if (selectedId === "back") {
      return <NavigationBtn />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div className={css.burgerContainer}>
            <BurgerBtn name="one" />
            <BurgerBtn name="two" />
            <BurgerBtn name="three" />
            <BurgerBtn name="four" />
            <BurgerBtn name="five" />
          </div>
        </>
      );
    }
  };
  return renderContent();
};
