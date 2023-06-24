import React, { useRef, useState } from "react";
import css from "../../main.module.css";
import bgImage from "./images/zhivopis-illustracia-art-voda-oblako-500x.jpg";

const positions = {
  1: { y: 27.5, x: 8, xTranslate: -8, yTranslate: -20 },
  2: { y: 27.5, x: 24, xTranslate: -24, yTranslate: -20 },
  3: { y: 27.5, x: 44, xTranslate: -44, yTranslate: -20 },
  4: { y: 27.5, x: 60, xTranslate: -60, yTranslate: -20 },
  5: { y: 27.5, x: 76, xTranslate: -76, yTranslate: -20 },
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

export const StepByStepButtonGame = ({ name, index, id, value }) => {
  const [isActive, setIsActive] = useState(false);

  const el = document.getElementsByTagName("body")[0];
  el.style.overflowX = "hidden";
  const containerRef = useRef(null);
  const refActive = useRef();
  const refBtn = useRef();

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
    top
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
    }, 2000);
  };
  const handleButtonClick = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });

    const { id } = e.target;
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;
    const refBtnCurrent = refBtn.current;
    const { y, x, xTranslate, yTranslate } = positions[id];

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
        "420px"
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
        "620px",
        "0px",
        "0px",
        "520px"
      );
    } else if (!isActive && window.innerWidth >= 325) {
      setIsActive(true);
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
        "90vh",
        "0px",
        "0px",
        "520px"
      );
    } else if (!isActive && window.innerWidth <= 324) {
      setIsActive(true);
      giveStyles(
        x,
        y,
        container,
        refActiveCurrent,
        refBtnCurrent,
        xTranslate,
        yTranslate - 18.5,
        9,
        "absolute",
        "2s",
        "100vw",
        "100vh",
        "0px",
        "0px",
        "920px"
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

      setTimeout(() => {
        refActiveCurrent.style.position = "inherit";
      }, 1300);
      setIsActive(false);
    }
  };

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
          backgroundImage: `url(${bgImage})`,
        }}
        className={css.btnContainerGame}
        id={id}
        value={value}
      >
        {index}
      </div>
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
        <div
          // style={{
          //   fontSize:
          //     containerRef.current?.style.top === "420px" ? "28px" : "inherit",
          // }}
          id={id}
        >
          {name}
        </div>
      </button>
    </div>
  );
};
