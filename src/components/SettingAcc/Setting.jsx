import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { SignOut } from "./SignOut";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { ResetPass } from "../Auth/ResetPass";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Setting = () => {
  const [backBtn, setBackBtn] = useState(false);
  const [hiddenResetPass, setHiddenResetPass] = useState(true);
  useEffect(() => {
    localStorage.setItem("numberPage", "Setting");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Пользователь успешно авторизован
        user.getIdToken();
        console.log(user);
        console.log("Пользователь авторизован");
        if (user.displayName) {
          setHiddenResetPass(false);
        } else {
          setHiddenResetPass(true);
        }
      } else {
      }
    });
  }, [auth]);
  const renderContent = () => {
    if (backBtn === true) {
      return <NavigationBtn />;
    } else {
      return (
        <>
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
              {hiddenResetPass ? <div>{<ResetPass />}</div> : <div></div>}
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
