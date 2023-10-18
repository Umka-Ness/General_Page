import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { BurgerBtn } from "./BurgerBtn";
import { NavMenu } from "../Navigation/NavMenu";
import { Setting } from "../SettingAcc/Setting";

export const Lecture = () => {
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    localStorage.setItem("numberPage", "Lecture");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  const renderContent = () => {
    if (selectedId === "back") {
      return <NavigationBtn />;
    } else if (selectedId === "5") {
      return <Setting />;
    } else if (selectedId === "GoHome") {
      return <NavigationBtn />;
    } else {
      return (
        <>
          <div onClick={handleOnClick}>
            <button
              className={css.BackBtn}
              id="back"
              style={{ marginTop: "60px" }}
            >
              Back
            </button>
            <NavMenu />
            <div className={css.burgerContainer}>
              <BurgerBtn name="one" />
              <BurgerBtn name="two" />
              <BurgerBtn name="three" />
              <BurgerBtn name="four" />
              <BurgerBtn name="five" />
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
