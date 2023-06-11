import React from "react";
import css from "./StepByStep.module.css";

export const StepByStepButton = ({ name }) => {
  return (
    <>
      {/* <svg>
          <use
            href="./symbol-defs.svg#icon-pentagon-svgrepo-com"
            fill="blue"
            style={{ width: "100px", height: "100px" }}
          ></use>
        </svg> */}
      <button className={css.btnComponent}> {name} </button>
    </>
  );
};
