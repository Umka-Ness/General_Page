import React, { useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";
import css from "../../main.module.css";
import { DragAndDropGame } from "./DragAndDropGame";
import backImg from "./img/tetrad.jpg";
import image from "./img/bag.png";

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
    wordsOne: "k",
    wordsTwo: "a",
    wordsThree: "c",
    wordsFour: "l",
    wordsFive: "P",
    wordSix: "e",
  };
  const goodFirstText = ["P", "l", "e", "c", "a", "k"];
  const secondText = {
    wordsOne: "u",
    wordsTwo: "c",
    wordsThree: "l",
    wordsFour: "i",
    wordsFive: "N",
    wordSix: "e",
    wordSeven: "y",
    wordEight: "c",
    wordNine: "z",
    wordTen: "a",
  };
  const goodSecondText = ["N", "a", "u", "c", "z", "y", "c", "i", "e", "l"];
  const threeText = {
    wordsOne: "z",
    wordsTwo: "c",
    wordsThree: "N",
    wordsFour: "i",
    wordsFive: "l",
    wordSix: "a",
    wordSeven: "y",
    wordEight: "c",
    wordNine: "a",
    wordTen: "u",
    wordEleven: "e",
    wordTwelve: "k",
  };
  const goodThreeText = [
    "N",
    "a",
    "u",
    "c",
    "z",
    "y",
    "c",
    "i",
    "e",
    "l",
    "k",
    "a",
  ];
  const fourText = {
    wordsOne: "z",
    wordsTwo: "e",
    wordsThree: "c",
    wordsFour: "ń",
    wordsFive: "U",
  };
  const goodFourText = ["U", "c", "z", "e", "ń"];
  const fiveText = {
    wordsOne: "n",
    wordsTwo: "e",
    wordsThree: "i",
    wordsFour: "c",
    wordsFive: "z",
    wordSix: "U",
    wordSeven: "n",
    wordEight: "a",
    wordNine: "c",
  };
  const goodFiveText = ["U", "c", "z", "e", "n", "n", "i", "c", "a"];
  const sixText = {
    wordsOne: "g",
    wordsTwo: "D",
    wordsThree: "s",
    wordsFour: "u",
    wordsFive: "ł",
    wordSix: "o",
    wordSeven: "p",
    wordEight: "i",
  };
  const goodSixText = ["D", "ł", "u", "g", "o", "p", "i", "s"];
  const sevenText = {
    wordsOne: "e",
    wordsTwo: "O",
    wordsThree: "w",
    wordsFour: "ł",
    wordsFive: "k",
    wordSix: "ó",
  };
  const goodSevenText = ["O", "ł", "ó", "w", "e", "k"];
  const eightText = {
    wordsOne: "s",
    wordsTwo: "z",
    wordsThree: "e",
    wordsFour: "y",
    wordsFive: "t",
    wordSix: "Z",
  };
  const goodEightText = ["Z", "e", "s", "z", "y", "t"];
  const nineText = {
    wordsOne: "ż",
    wordsTwo: "i",
    wordsThree: "s",
    wordsFour: "k",
    wordsFive: "a",
    wordSix: "K",
    wordSeven: "ą",
  };
  const goodNineText = ["K", "s", "i", "ą", "ż", "k", "a"];
  const tenText = {
    wordsOne: "u",
    wordsTwo: "p",
    wordsThree: "e",
    wordsFour: "o",
    wordsFive: "t",
    wordSix: "m",
    wordSeven: "r",
    wordEight: "K",
  };
  const goodTenText = ["K", "o", "m", "p", "u", "t", "e", "r"];
  const elevenText = {
    wordsOne: "a",
    wordsTwo: "i",
    wordsThree: "l",
    wordsFour: "b",
    wordsFive: "a",
    wordSix: "T",
    wordSeven: "c",
  };
  const goodElevenText = ["T", "a", "b", "l", "i", "c", "a"];
  const twelveText = {
    wordsOne: "ł",
    wordsTwo: "e",
    wordsThree: "o",
    wordsFour: "s",
    wordsFive: "r",
    wordSix: "z",
    wordSeven: "K",
  };
  const goodTwelveText = ["K", "r", "z", "e", "s", "ł", "o"];
  const thirteenText = {
    wordsOne: "k",
    wordsTwo: "o",
    wordsThree: "O",
    wordsFour: "n",
  };
  const goodThirteenText = ["O", "k", "n", "o"];
  const fourteenText = {
    wordsOne: "r",
    wordsTwo: "w",
    wordsThree: "i",
    wordsFour: "D",
    wordsFive: "z",
  };
  const goodFourteenText = ["D", "r", "z", "w", "i"];
  const fifteenText = {
    wordsOne: "a",
    wordsTwo: "w",
    wordsThree: "k",
    wordsFour: "a",
    wordsFive: "Ł",
  };
  const goodFifteenText = ["Ł", "a", "w", "k", "a"];

  const renderContent = () => {
    if (selectedId === "back") {
      return <DragAndDrop />;
    } else if (localStorage.getItem("currentValue") === "1") {
      return (
        <DragAndDropGame
          textData={forstText}
          goodText={goodFirstText}
          image={image}
        />
      );
    } else if (localStorage.getItem("currentValue") === "2") {
      return (
        <DragAndDropGame textData={secondText} goodText={goodSecondText} />
      );
    } else if (localStorage.getItem("currentValue") === "3") {
      return <DragAndDropGame textData={threeText} goodText={goodThreeText} />;
    } else if (localStorage.getItem("currentValue") === "4") {
      return <DragAndDropGame textData={fourText} goodText={goodFourText} />;
    } else if (localStorage.getItem("currentValue") === "5") {
      return <DragAndDropGame textData={fiveText} goodText={goodFiveText} />;
    } else if (localStorage.getItem("currentValue") === "6") {
      return <DragAndDropGame textData={sixText} goodText={goodSixText} />;
    } else if (localStorage.getItem("currentValue") === "7") {
      return <DragAndDropGame textData={sevenText} goodText={goodSevenText} />;
    } else if (localStorage.getItem("currentValue") === "8") {
      return <DragAndDropGame textData={eightText} goodText={goodEightText} />;
    } else if (localStorage.getItem("currentValue") === "9") {
      return <DragAndDropGame textData={nineText} goodText={goodNineText} />;
    } else if (localStorage.getItem("currentValue") === "10") {
      return <DragAndDropGame textData={tenText} goodText={goodTenText} />;
    } else if (localStorage.getItem("currentValue") === "11") {
      return (
        <DragAndDropGame textData={elevenText} goodText={goodElevenText} />
      );
    } else if (localStorage.getItem("currentValue") === "12") {
      return (
        <DragAndDropGame textData={twelveText} goodText={goodTwelveText} />
      );
    } else if (localStorage.getItem("currentValue") === "13") {
      return (
        <DragAndDropGame textData={thirteenText} goodText={goodThirteenText} />
      );
    } else if (localStorage.getItem("currentValue") === "14") {
      return (
        <DragAndDropGame textData={fourteenText} goodText={goodFourteenText} />
      );
    } else if (localStorage.getItem("currentValue") === "15") {
      return (
        <DragAndDropGame textData={fifteenText} goodText={goodFifteenText} />
      );
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
            {/* <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                alignContent: "flex-start",
                alignItems: "center",
                width: "100vw",
                height: "70vh",
                gap: "20px",
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
              <button
                id="7"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 7
              </button>
              <button
                id="8"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 8
              </button>
              <button
                id="9"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 9
              </button>
              <button
                id="10"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 10
              </button>
              <button
                id="11"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 11
              </button>
              <button
                id="12"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 12
              </button>
              <button
                id="13"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 13
              </button>
              <button
                id="14"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 14
              </button>
              <button
                id="15"
                onClick={(e) => setCurrentId(e.target.id)}
                className={css.onlyLvlBtn}
              >
                Game number 15
              </button>
            </div> */}
          </div>
        </>
      );
    }
  };
  return renderContent();
};
