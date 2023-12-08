import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { NavigationBtn } from "./NavigationBtn";
import { SaimonsCat } from "./SaimonsCat/SaimonsCat";

export const Materials = () => {
  useEffect(() => {
    localStorage.setItem("numberPage", "Materials");
  }, []);
  const [backBtn, setBackBtn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const saimonsCat = () => {
    setIsActive(true);
  };

  const renderContent = () => {
    if (backBtn) {
      return <NavigationBtn />;
    } else if (isActive) {
      return <SaimonsCat />;
    } else {
      return (
        <>
          <button
            className={css.BackBtn}
            onClick={handleOnClick}
            id="back"
            // style={{ position: "absolute", top: "0" }}
          >
            Back
          </button>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                border: "2px solid black",
                width: "200px",
                height: "200px",
                borderRadius: "15px",
                textAlign: "center",
              }}
              onClick={saimonsCat}
            >
              <p style={{ position: "absolute", top: "160px", left: "55px" }}>
                Simon`s cat
              </p>
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
