import React, { useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";
import css from "../../main.module.css";
import { DragAndDropGame } from "./DragAndDropGame";

export const DragAndDropLevels = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentId, setCurrentId] = useState("");

  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("numberPage", "DragAndDropLevels");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  const forstText = {
    wordsOne: "a",
    wordsTwo: "d",
    wordsThree: "m",
    wordsFour: "n",
  };
  const secondText = {
    wordsOne: "k",
    wordsTwo: "p",
    wordsThree: "i",
    wordsFour: "n",
  };

  const renderContent = () => {
    if (selectedId === "back") {
      return <DragAndDrop />;
    } else if (currentId === "1") {
      return <DragAndDropGame textData={forstText} />;
    } else if (currentId === "2") {
      return <DragAndDropGame textData={secondText} />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              gap: "20px",
            }}
          >
            <button id="1" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 1
            </button>
            <button id="2" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 2
            </button>
            <button id="3" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 3
            </button>
            <button id="4" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 4
            </button>
            <button id="5" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 5
            </button>
            <button id="6" onClick={(e) => setCurrentId(e.target.id)}>
              Game number 6
            </button>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
