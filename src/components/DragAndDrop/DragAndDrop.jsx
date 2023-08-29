import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { PageOne } from "../Game-page/pageOne";
import { DragAndDropLevels } from "./DragAndDropLevels";

export const DragAndDrop = () => {
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    localStorage.setItem("numberPage", "DragAndDrop");
    localStorage.setItem("currentValue", "1");
  }, []);
  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };

  const renderContent = () => {
    if (selectedId === "back") {
      return <PageOne />;
    } else if (selectedId === "1") {
      return <DragAndDropLevels />;
    } else {
    }
    return (
      <>
        <button className={css.BackBtn} onClick={handleOnClick} id="back">
          Back
        </button>
        <div className={css.containerForLevelButton}>
          <button
            id="1"
            onClick={(e) => setSelectedId(e.target.id)}
            className={css.levelSelectionBtn}
          >
            Low Lavel
          </button>
          <button
            id="2"
            onClick={(e) => setSelectedId(e.target.id)}
            className={css.levelSelectionBtn}
          >
            Medium Level
          </button>
          <button
            id="3"
            onClick={(e) => setSelectedId(e.target.id)}
            className={css.levelSelectionBtn}
          >
            High Level
          </button>
        </div>
      </>
    );
  };
  return renderContent();
};
