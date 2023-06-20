import React, { useEffect, useRef, useState } from "react";
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

export const StepByStepButtonGame = ({ name, index, id, value }) => {
  const el = document.getElementsByTagName("body")[0];
  el.style.overflowX = "hidden";
  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);

  const giveStyles = (
    x,
    y,
    container,
    refActiveCurrent,
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
    const { id } = e.target;
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;
    const { y, x, xTranslate, yTranslate } = positions[id];

    if (!isActive && window.innerWidth >= 1000) {
      setIsActive(true);
      giveStyles(
        x,
        y,
        container,
        refActiveCurrent,
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
    } else {
      container.style.top = "120px";
      refActiveCurrent.style.position = "absolute";
      refActiveCurrent.style.minWidth = "0";
      refActiveCurrent.style.minHeight = "0";
      refActiveCurrent.style.width = "150px";
      refActiveCurrent.style.height = "150px";
      refActiveCurrent.style.transform = "scale(1)";
      refActiveCurrent.style.zIndex = "1";
      setTimeout(() => {
        refActiveCurrent.style.position = "inherit";
      }, 1300);
      setIsActive(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "150px",
        border: "2px solid black",
        borderRadius: "15px",
        zIndex: "1",
      }}
      onClick={handleButtonClick}
      className={css.btnGame}
      ref={refActive}
      id={id}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "top 0.5s, transform 0.5s",
          transformOrigin: "center center",
          cursor: "pointer",
          borderRadius: "13px",
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
        id={id}
      >
        <div
          style={{
            fontSize:
              containerRef.current?.style.top === "420px" ? "28px" : "inherit",
          }}
          id={id}
        >
          {name}
        </div>
      </button>
    </div>
  );
};
