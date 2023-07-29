import React, { useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";
import css from "../../main.module.css";
import { DragAndDropGame } from "./DragAndDropGame";
import backImg from "./img/tetrad.jpg";
export const DragAndDropLevels = () => {
  const [selectedId, setSelectedId] = useState("");
  const [currentId, setCurrentId] = useState("");

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
  const goodFirstText = ["d", "a", "m", "n"];
  const secondText = {
    wordsOne: "k",
    wordsTwo: "p",
    wordsThree: "i",
    wordsFour: "n",
  };
  const goodSecondText = ["p", "i", "n", "k"];
  const threeText = {
    wordsOne: "m",
    wordsTwo: "e",
    wordsThree: "h",
    wordsFour: "o",
  };
  const goodThreeText = ["h", "o", "m", "e"];
  const fourText = {
    wordsOne: "m",
    wordsTwo: "e",
    wordsThree: "h",
    wordsFour: "o",
    wordsFive: "i",
    wordSix: "s",
  };
  const goodFourText = ["h", "o", "m", "i", "e", "s"];

  const renderContent = () => {
    if (selectedId === "back") {
      return <DragAndDrop />;
    } else if (currentId === "1") {
      return <DragAndDropGame textData={forstText} goodText={goodFirstText} />;
    } else if (currentId === "2") {
      return (
        <DragAndDropGame textData={secondText} goodText={goodSecondText} />
      );
    } else if (currentId === "3") {
      return <DragAndDropGame textData={threeText} goodText={goodThreeText} />;
    } else if (currentId === "4") {
      return <DragAndDropGame textData={fourText} goodText={goodFourText} />;
    } else {
      return (
        <>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: "0",
              width: "100vw",
              height: "100vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${backImg})`,
            }}
          ></div>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: "2",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                alignContent: "flex-start",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                gap: "20px",

                marginTop: "150px",
              }}
            >
              <button
                id="1"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 1
              </button>
              <button
                id="2"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 2
              </button>
              <button
                id="3"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 3
              </button>
              <button
                id="4"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 4
              </button>
              <button
                id="5"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 5
              </button>
              <button
                id="6"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 6
              </button>
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
