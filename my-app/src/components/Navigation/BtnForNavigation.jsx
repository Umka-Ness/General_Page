import React from "react";
import btnList from "../Navigation/BtnForLearning.json";
import css from "../../main.module.css";
// import svg from "../../../public/bgButtonStars.svg";

export const BtnForNavigation = () => {
  return btnList.map((i) => (
    <button
      className={css.NavigationBtn}
      key={i.id}
      data-id={i.id}
      style={{ backgroundImage: `url(${i.image})` }}
    >
      {i.name}
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          top: "5px",
          left: "50%",
          color: "#e2e8f0",
          height: "5px",
          width: "5px",
          transform: "scale(2.5)",
          border: "0.5px solid #000",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          zIndex: "2",
          top: "5px",
          left: "49.6%",
          color: "transparent",
          height: "5px",
          width: "5px",
          transform: "scale(1.3)",
          border: "0.5px solid black",
          borderRadius: "50%",
        }}
      ></div>
    </button>
  ));
};
