import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { SignOut } from "./SignOut";
import { NavigationBtn } from "../Navigation/NavigationBtn";

export const Setting = () => {
  const [backBtn, setBackBtn] = useState(false);

  useEffect(() => {
    localStorage.setItem("numberPage", "Setting");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const renderContent = () => {
    if (backBtn === true) {
      return <NavigationBtn />;
    } else {
      return (
        <div className={css.settingContainer}>
          <div>
            <button
              className={css.BackBtn}
              onClick={handleOnClick}
              id="back"
              // style={{ position: "absolute", top: "0" }}
            >
              Back
            </button>
            <div>
              <SignOut id="signOut" />
            </div>
          </div>
        </div>
      );
    }
  };
  return renderContent();
};
