import React, { useRef, useState } from "react";
import css from "../../main.module.css";
import { AnswerBtn } from "./AnswerBtn";

const positions = {
  1: { y: 27.5, x: 8, xTranslate: -8, yTranslate: -28.6 },
  2: { y: 27.5, x: 24, xTranslate: -24, yTranslate: -28.6 },
  3: { y: 27.5, x: 44, xTranslate: -44, yTranslate: -28.6 },
  4: { y: 27.5, x: 60, xTranslate: -60, yTranslate: -28.6 },
  5: { y: 27.5, x: 76, xTranslate: -76, yTranslate: -28.6 },
  6: { y: 51.5, x: 12, xTranslate: -12, yTranslate: -53 },
  7: { y: 51.5, x: 28, xTranslate: -28, yTranslate: -53 },
  8: { y: 51.5, x: 44, xTranslate: -44, yTranslate: -53 },
  9: { y: 51.5, x: 64, xTranslate: -64, yTranslate: -53 },
  10: { y: 51.5, x: 80, xTranslate: -80, yTranslate: -53 },
};

// Чтение данных
// fetch(app)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

export const StepByStepButtonGame = ({
  name,
  id,
  value,
  text,
  textOne,
  textTwo,
  textThree,
  goodAnswer,
}) => {
  const [isActive, setIsActive] = useState(false);

  const containerRef = useRef(null);
  const refActive = useRef();
  const refBtn = useRef();
  const answers = useRef();

  const el = document.getElementsByTagName("body")[0];
  el.style.overflowX = "hidden";
  const stepByStepFindErrorAnswer = () => {
    for (const i of [goodAnswer]) {
      console.log(i);
    }
  };
  stepByStepFindErrorAnswer();
  const giveStyles = (
    x,
    y,
    container,
    refActiveCurrent,
    refBtnCurrent,
    xTranslate,
    yTranslate,
    zIndex,
    position,
    transition,
    width,
    height,
    borderTopLeftRadius,
    borderTopRightRadius,
    top,
    overflowY
  ) => {
    container.style.top = top;
    container.style.transition = "top 0.5s";

    refActiveCurrent.style.zIndex = zIndex;
    refActiveCurrent.style.position = position;
    refActiveCurrent.style.top = `${y}%`;
    refActiveCurrent.style.left = `${x}%`;
    refActiveCurrent.style.transform = `translate(${xTranslate}%, ${yTranslate}%)`;
    refActiveCurrent.style.transition = transition;
    refActiveCurrent.style.width = width;
    refActiveCurrent.style.height = height;
    refBtnCurrent.style.fontSize = "24px";
    el.style.overflowY = overflowY;
    container.style.backgroundSize = "cover";
    container.style.borderTopLeftRadius = borderTopLeftRadius;
    container.style.borderTopRightRadius = borderTopRightRadius;
    setTimeout(() => {
      if (!isActive) {
        refActiveCurrent.style.minWidth = "0";
        refActiveCurrent.style.minHeight = "0";
      } else {
        refActiveCurrent.style.minWidth = width;
        refActiveCurrent.style.minHeight = height;
      }
    }, 200);
  };
  const handleButtonClick = (e) => {
    const answersCurrent = answers.current;
    if (e.target.attributes.datavalue?.value === "answerBtn") {
      return;
    } else {
      answersCurrent.style.opacity = "0";
      setTimeout(() => {
        answersCurrent.style.opacity = "1";
      }, 2000);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });

    const { id } = e.target;
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;
    const refBtnCurrent = refBtn.current;
    try {
      const { y, x, xTranslate, yTranslate } = positions[id];
      answersCurrent.style.display = "inherit";

      if (!isActive && window.innerWidth >= 1000) {
        setIsActive(true);
        giveStyles(
          x,
          y,
          container,
          refActiveCurrent,
          refBtnCurrent,
          xTranslate,
          yTranslate,
          9,
          "absolute",
          "2s",
          "950px",
          "500px",
          "0px",
          "0px",
          "420px",
          "hidden"
        );
      } else if (!isActive && window.innerWidth >= 520) {
        setIsActive(true);
        giveStyles(
          x,
          y,
          container,
          refActiveCurrent,
          refBtnCurrent,
          xTranslate,
          yTranslate,
          9,
          "absolute",
          "2s",
          "100vw",
          "650px",
          "0px",
          "0px",
          "520px",
          "hidden"
        );
      } else if (
        !isActive &&
        window.innerWidth >= 325 &&
        window.innerHeight >= 700
      ) {
        setIsActive(true);
        if (
          e.target.id === "10" ||
          e.target.id === "9" ||
          e.target.id === "8" ||
          e.target.id === "7" ||
          e.target.id === "6"
        ) {
          giveStyles(
            x,
            y,
            container,
            refActiveCurrent,
            refBtnCurrent,
            xTranslate,
            yTranslate + 0.7,
            9,
            "absolute",
            "2s",
            "100vw",
            "100vh",
            "0px",
            "0px",
            "720px",
            "auto"
          );
        } else {
          giveStyles(
            x,
            y,
            container,
            refActiveCurrent,
            refBtnCurrent,
            xTranslate,
            yTranslate - 0.5,
            9,
            "absolute",
            "2s",
            "100vw",
            "100vh",
            "0px",
            "0px",
            "720px",
            "auto"
          );
        }
      } else if (!isActive && window.innerWidth >= 325) {
        setIsActive(true);
        console.log(e.target.id);
        if (
          e.target.id === "10" ||
          e.target.id === "9" ||
          e.target.id === "8" ||
          e.target.id === "7" ||
          e.target.id === "6"
        ) {
          giveStyles(
            x,
            y,
            container,
            refActiveCurrent,
            refBtnCurrent,
            xTranslate,
            yTranslate - 15,
            9,
            "absolute",
            "2s",
            "100vw",
            "100vh",
            "0px",
            "0px",
            "520px",
            "auto"
          );
        } else {
          giveStyles(
            x,
            y,
            container,
            refActiveCurrent,
            refBtnCurrent,
            xTranslate,
            yTranslate - 9.5,
            9,
            "absolute",
            "2s",
            "100vw",
            "100vh",
            "0px",
            "0px",
            "520px",
            "auto"
          );
        }
      } else if (!isActive && window.innerWidth <= 324) {
        setIsActive(true);
        giveStyles(
          x,
          y,
          container,
          refActiveCurrent,
          refBtnCurrent,
          xTranslate,
          yTranslate - 38.5,
          9,
          "absolute",
          "2s",
          "100vw",
          "100vh",
          "0px",
          "0px",
          "650px",
          "auto"
        );
      } else {
        container.style.top = "120px";
        refActiveCurrent.style.position = "absolute";
        refActiveCurrent.style.minWidth = "0";
        refActiveCurrent.style.minHeight = "0";
        refActiveCurrent.style.width = "150px";
        refActiveCurrent.style.height = "150px";
        refActiveCurrent.style.transform = "scale(1)";
        refActiveCurrent.style.zIndex = "1";
        refBtnCurrent.style.fontSize = "13px";
        answersCurrent.style.display = "none";
        setIsActive(false);

        const timeout = setTimeout(() => {
          refActiveCurrent.style.position = "inherit";
          clearTimeout(timeout);
        }, 1300);
      }
    } catch (error) {}
  };

  const buttonImages = [
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_2.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_3.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_4.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_5.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_6.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_7.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_8.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_9.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_10.jpg"),
    require("./images/Isometric_Fantasy_forest_miniatures_in_cartoon_style_11.jpg"),
  ];

  return (
    <div
      onClick={handleButtonClick}
      className={css.btnGame}
      ref={refActive}
      id={id}
    >
      <div
        ref={containerRef}
        style={{
          backgroundImage: `url(${buttonImages[id - 1]})`,
        }}
        className={css.btnContainerGame}
        id={id}
        value={value}
      ></div>
      <button
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "13px",
        }}
        ref={refBtn}
        id={id}
      >
        <div id={id}>{name}</div>
        <div
          style={{ display: "none", position: "relative", top: "80px" }}
          ref={answers}
          className={css.answers}
        >
          <AnswerBtn
            id={id}
            text={text}
            textOne={textOne}
            textTwo={textTwo}
            textThree={textThree}
            goodAnswer={goodAnswer}
            tapInTheBtn={isActive}
          />
        </div>
      </button>
    </div>
  );
};
