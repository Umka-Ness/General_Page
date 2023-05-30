import React, { useRef } from "react";
import css from "../StepByStep/StepByStep.module.css";

export const StepByStepButtonGame = ({ name, index }) => {
  const containerRef = useRef(null);

  const handleClick = () => {
    const container = containerRef.current;
    if (container) {
      container.style.top = "120px";
      container.style.transition = "top 0.5s";

      setTimeout(() => {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.5s";
      }, 500);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "150px",
        border: " 2px solid black",
        borderRadius: "15px",
      }}
      onClick={handleClick}
      className={css.btnGame}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "top 0.5s, transform 0.5s",
          transformOrigin: "center center",
          cursor: "pointer",
          borderRadius: "13px",
        }}
        className={css.btnContainerGame}
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
        // className={css.btnGame}
      >
        {name}
      </button>
    </div>
  );
};
