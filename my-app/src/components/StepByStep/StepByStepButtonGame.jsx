import React, { useEffect, useRef, useState } from "react";
import css from "../StepByStep/StepByStep.module.css";

export const StepByStepButtonGame = ({ name, index, id, value }) => {
  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    console.log(e);
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;

    if (!isActive) {
      setIsActive(true);
      container.style.top = "420px";
      container.style.transition = "top 1s";
      refActiveCurrent.style.transform = "scale(2.5)";
      refActiveCurrent.style.zIndex = "9";
      refActiveCurrent.style.position = "absolute";
      refActiveCurrent.style.top = "50%";
      refActiveCurrent.style.left = "50%";
      refActiveCurrent.style.transform = "translate(-50%, -50%)";
      refActiveCurrent.style.transition = "all 2s";
      refActiveCurrent.style.transitionTimingFunction =
        "cubic-bezier(0, 0, 0, 1.2)";
      refActiveCurrent.style.width = "900px";
      refActiveCurrent.style.height = "500px";
    } else {
      refActiveCurrent.style.position = "absolute";
      refActiveCurrent.style.transitionTimingFunction =
        "cubic-bezier(1.2, 1.1, 1.1, 1.2)";
      refActiveCurrent.style.top = "40%";
      refActiveCurrent.style.left = "60%";
      refActiveCurrent.style.transform = "translate(-40%, -60%)";
      setTimeout(() => {
        refActiveCurrent.style.transition = "all 0s";
        container.style.top = "120px";
        refActiveCurrent.style.position = "inherit";
        refActiveCurrent.style.width = "150px";
        refActiveCurrent.style.height = "150px";
        refActiveCurrent.style.transform = "scale(1)";
        refActiveCurrent.style.zIndex = "1";
        console.log(12312);
        setIsActive(false);
      }, 1300);
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
          // backgroundColor: "red",
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
        // className={css.btnGame}
      >
        <div
          style={{
            fontSize:
              containerRef.current?.style.top === "420px" ? "28px" : "inherit",
          }}
        >
          {name}
        </div>
      </button>
    </div>
  );
};
