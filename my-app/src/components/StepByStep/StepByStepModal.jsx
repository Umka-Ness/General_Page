import React, { useEffect, useRef, useState } from "react";
import css from "../StepByStep/StepByStep.module.css";

export const StepByStepModal = ({ name, index, id, value, data }) => {
  const selectedItem = data.find((item) => item.id === id);

  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const handleClick = () => {
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;

    if (!isActive) {
      setIsActive(true);
      container.style.top = "120px";
      container.style.transition = "top 0.5s";
      refActiveCurrent.style.transform = "scale(2.5)";
      refActiveCurrent.style.zIndex = "9";
    } else {
      refActiveCurrent.style.transform = "scale(1)";
      refActiveCurrent.style.zIndex = "1";
      console.log(12312);
      setIsActive(false);
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
        {selectedItem.index}
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
        {selectedItem.name}
      </button>
    </div>
  );
};
