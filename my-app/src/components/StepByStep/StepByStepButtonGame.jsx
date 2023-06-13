import React, { useRef, useState } from "react";
import css from "../StepByStep/StepByStep.module.css";

const positions = {
  1: { y: 27.5, x: 8, xTranslate: -5, yTranslate: -20 },
  2: { y: 27.5, x: 24, xTranslate: -25, yTranslate: -20 },
  3: { y: 27.5, x: 44, xTranslate: -45, yTranslate: -20 },
  4: { y: 27.5, x: 60, xTranslate: -65, yTranslate: -20 },
  5: { y: 27.5, x: 76, xTranslate: -75, yTranslate: -20 },
  6: { y: 51.5, x: 12, xTranslate: -15, yTranslate: -53 },
  7: { y: 51.5, x: 28, xTranslate: -25, yTranslate: -53 },
  8: { y: 51.5, x: 44, xTranslate: -45, yTranslate: -53 },
  9: { y: 51.5, x: 64, xTranslate: -65, yTranslate: -53 },
  10: { y: 51.5, x: 80, xTranslate: -85, yTranslate: -53 },
};

export const StepByStepButtonGame = ({ name, index, id, value }) => {
  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = (e) => {
    const { id } = e.target;
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;

    if (!isActive) {
      setIsActive(true);

      container.style.top = "420px";
      container.style.transition = "top 0.5s";

      const { y, x, xTranslate, yTranslate } = positions[id];

      refActiveCurrent.style.zIndex = "9";
      refActiveCurrent.style.position = "absolute";
      refActiveCurrent.style.top = `${y}%`;
      refActiveCurrent.style.left = `${x}%`;
      refActiveCurrent.style.transform = `translate(${xTranslate}%, ${yTranslate}%)`;
      refActiveCurrent.style.transition = "2s";
      refActiveCurrent.style.width = "950px";
      refActiveCurrent.style.height = "500px";
      setTimeout(() => {
        if (!isActive) {
          refActiveCurrent.style.minWidth = "0";
          refActiveCurrent.style.minHeight = "0";
        } else {
          refActiveCurrent.style.minWidth = "950px";
          refActiveCurrent.style.minHeight = "500px";
        }
      }, 2000);
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
