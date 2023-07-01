import React, { useEffect, useState } from "react";
import { DragAndDropGame } from "./DragAndDropGame";
import css from "../../main.module.css";
import { PageOne } from "../Game-page/pageOne";

export const DragAndDrop = () => {
  const [currentId, setCurrentId] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("numberPage", "DragAndDrop");
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
  const renderContent = () => {
    if (currentId === "1") {
      return <DragAndDropGame textData={forstText} />;
    } else if (selectedId === "back") {
      return <PageOne />;
    } else {
    }
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
  };
  return renderContent();
};
