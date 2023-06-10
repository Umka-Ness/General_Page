import React, { useEffect, useRef, useState } from "react";
import css from "../StepByStep/StepByStep.module.css";

export const StepByStepButtonGame = ({ name, index, id, value }) => {
  const containerRef = useRef(null);
  const refActive = useRef();
  const [isActive, setIsActive] = useState(false);
  const [xClient, setXclient] = useState(0);
  const [yClient, setYclient] = useState(0);

  useEffect(() => {
    console.log(xClient, yClient);
  }, [xClient, yClient]);
  const handleClick = (e) => {
    console.log(e);
    const container = containerRef.current;
    const refActiveCurrent = refActive.current;

    if (!isActive) {
      setIsActive(true);

      container.style.top = "420px";
      container.style.transition = "top 0.5s";
      // refActiveCurrent.style.transform = "scale(2.5)";
      refActiveCurrent.style.zIndex = "9";
      refActiveCurrent.style.position = "absolute";

      // clearInterval(interval);
      // return;
      refActiveCurrent.style.top = `10%`;
      refActiveCurrent.style.left = `10%`;

      refActiveCurrent.style.transition = "2s";
      refActiveCurrent.style.width = "900px";
      refActiveCurrent.style.height = "500px";
    } else {
      refActiveCurrent.style.transform = `translate(10%, 10%)`;
      container.style.top = "120px";
      refActiveCurrent.style.position = "absolute";
      refActiveCurrent.style.width = "150px";
      refActiveCurrent.style.height = "150px";
      refActiveCurrent.style.transform = "scale(1)";
      refActiveCurrent.style.zIndex = "1";
      setTimeout(() => {
        refActiveCurrent.style.position = "inherit";
      }, 1300);
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
        zIndex: "1",
      }}
      onClick={handleClick}
      className={css.btnGame}
      ref={refActive}
      id={id}
    >
      <button class="zoomTarget" data-targetsize="0.45" data-duration="600">
        This element zooms when clicked on.
      </button>
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
