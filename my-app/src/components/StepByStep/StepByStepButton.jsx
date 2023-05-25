import React from "react";
import css from "./StepByStep.module.css";

export const StepByStepButton = ({ name }) => {
  return (
    <div>
      <div>
        <button className={css.btnComponent}> {name} </button>
      </div>
    </div>
  );
};
