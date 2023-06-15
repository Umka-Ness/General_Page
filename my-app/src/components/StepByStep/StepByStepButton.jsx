import React from "react";
import css from "../../main.module.css";
// import css from "./StepByStep.module.css";

export const StepByStepButton = ({ name, dataSvg }) => {
  return (
    <>
      <img src={dataSvg} alt="awd" className={css.btnImage} />
      {/* <button className={css.btnComponent}> {name} </button> */}
    </>
  );
};
