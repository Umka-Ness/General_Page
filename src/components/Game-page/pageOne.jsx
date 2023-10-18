import React, { useEffect, useState } from "react";
import diceImg from "./img/Dice-img.png";
import logo from "../Game-page/img/Screenshot_9.png";
import dragEndDropImg from "../Game-page/img/drag-end-drop-img.png";
// import sortingImg from "./img/Sorting-img.png";

import { Button } from "./Button";
import gameInfo from "./gameInfo.json";
import css from "../../main.module.css";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { StepByStep } from "../StepByStep/StepByStep";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { Dice } from "../Dice/Dise";
import { NavMenu } from "../Navigation/NavMenu";
import { Setting } from "../SettingAcc/Setting";

export const PageOne = () => {
  const el = document.getElementsByTagName("body")[0];
  el.style.overflow = "auto";
  const [selectedId, setSelectedId] = useState("");
  const [DraggableDiv, setDraggableDiv] = useState(false);

  useEffect(() => {
    localStorage.setItem("numberPage", "pageOne");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };

  const GoMoveBox = (e) => {
    e.preventDefault();
    setDraggableDiv(e.target.alt);
    console.log(e.target.alt);
  };

  const renderContent = () => {
    if (selectedId === "back") {
      return <NavigationBtn />;
    } else if (DraggableDiv === "StepByStep") {
      return <StepByStep />;
    } else if (DraggableDiv === "DragAndDrop") {
      return <DragAndDrop />;
    } else if (DraggableDiv === "Dice") {
      return <Dice />;
    } else if (selectedId === "5") {
      return <Setting />;
    } else if (selectedId === "GoHome") {
      return <NavigationBtn />;
    } else {
      return (
        <div onClick={handleOnClick}>
          {/* <div
            style={{
              display: "flex",
              textAlign: "center",
            }}
          ></div> */}
          <NavMenu />

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px",
              verticalAlign: "middle",
              maxWidth: "100%",
              marginTop: "50px",
              // minHeight: "100vh",
            }}
          >
            <button
              className={css.BackBtn}
              id="back"
              style={{ marginTop: "60px" }}
            >
              Back
            </button>
            {/* {DraggableDiv === true ? <MoveBox /> : <p>dadada</p>} */}
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={(css.name, "notranslate")}>1 StepByStep</p>
              <div
                onClick={GoMoveBox}
                style={{ cursor: "pointer" }}
                className="notranslate"
              >
                <Button alt="StepByStep" img={logo} />
              </div>
              <p className={css.blockCard}>StepByStep</p>
            </div>
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={(css.name, "notranslate")}>2 Drag and Drop</p>
              <div
                onClick={GoMoveBox}
                style={{ cursor: "pointer" }}
                className="notranslate"
              >
                <Button alt="DragAndDrop" img={dragEndDropImg} />
              </div>
              <p className={css.blockCard}>Drag and Drop</p>
            </div>
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={(css.name, "notranslate")}>3 Dice</p>
              <div
                onClick={GoMoveBox}
                style={{ cursor: "pointer" }}
                className="notranslate"
              >
                <Button alt="Dice" img={diceImg} />
              </div>
              <p className={css.blockCard}>Dice</p>
            </div>

            {gameInfo.map((i, index) => (
              <div
                key={i.id}
                style={{
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <div>
                    <p className={(css.name, "notranslate")}>
                      {index + 3 + " "}
                      {i.name}
                    </p>
                    <Button
                      url={i.url}
                      img={i.img ? i.img : logo}
                      onClick={GoMoveBox}
                    />
                    <p className={css.blockCard}>{i.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};
