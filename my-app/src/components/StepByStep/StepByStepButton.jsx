import React from "react";
// import css from "./StepByStep.module.css";

export const StepByStepButton = ({ name, dataSvg }) => {
  return (
    <>
      <img src={dataSvg} alt="awd" style={{ height: "70px", width: "70px" }} />
      {/* <button className={css.btnComponent}> {name} </button> */}
    </>
  );
};
