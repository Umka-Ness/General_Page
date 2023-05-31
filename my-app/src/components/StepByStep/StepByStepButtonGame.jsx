import React, { useRef, useState } from "react";
import css from "../StepByStep/StepByStep.module.css";

export const StepByStepButtonGame = ({ name, index, id }) => {
  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(false);

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
    setIsActive(true);
    const refActiveCurrent = refActive.current;
    const temporaryId = refActiveCurrent.id;
    if (!isActive) {
      refActiveCurrent.style.transform = "scale(2.5)";
      refActiveCurrent.style.zIndex = "9999";
      setIsActive(false);
      console.log(refActiveCurrent.id);
    } else {
      if (value) {
        refActiveCurrent.style.transform = "scale(1)";
        refActiveCurrent.style.zIndex = "1";
        console.log(12312);
      } else {
        return;
      }
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
        id={id}
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
        value={value}
        // className={css.btnGame}
      >
        {name}
      </button>
    </div>
  );
};
