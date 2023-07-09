import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import gameInfo from "./gameInfo.json";
import css from "../../main.module.css";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { StepByStep } from "../StepByStep/StepByStep";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";

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
    } else if (DraggableDiv === "Logo") {
      return <StepByStep />;
    } else if (DraggableDiv === "DragAndDrop") {
      return <DragAndDrop />;
    } else {
      return (
        <div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px",
              verticalAlign: "middle",
              maxWidth: "100%",
              // minHeight: "100vh",
            }}
          >
            <button className={css.BackBtn} onClick={handleOnClick} id="back">
              Back
            </button>
            {/* {DraggableDiv === true ? <MoveBox /> : <p>dadada</p>} */}
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={css.name}>1 StepByStep</p>
              <div onClick={GoMoveBox}>
                <Button alt="Logo" />
              </div>
              <p className={css.blockCard}>lala</p>
            </div>
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={css.name}>2 Drag and Drop</p>
              <div onClick={GoMoveBox}>
                <Button alt="DragAndDrop" />
              </div>
              <p className={css.blockCard}>Drag and Drop</p>
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
                    <p className={css.name}>
                      {index + 3 + " "}
                      {i.name}
                    </p>
                    <Button url={i.url} onClick={GoMoveBox} />
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
