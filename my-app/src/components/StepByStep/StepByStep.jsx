import React, { useState } from "react";
import css from "./StepByStep.module.css";
import cssPageOne from "../Game-page/GamePage.module.css";
import { StepByStepButton } from "./StepByStepButton";
import { PageOne } from "../Game-page/pageOne";

export const StepByStep = () => {
  const [backBtn, setBackBtn] = useState(false);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };
  const renderContent = () => {
    if (backBtn === true) {
      return <PageOne />;
    } else {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div></div>
          <button
            className={cssPageOne.BackBtn}
            onClick={handleOnClick}
            id="back"
            // style={{ position: "absolute", top: "0" }}
          >
            Back
          </button>
          <ul className={css.container}>
            <li>
              <div style={{ marginLeft: "50px" }}>
                <StepByStepButton name="1" />
              </div>
              <div style={{ marginLeft: "-10px" }}>
                <StepByStepButton name="2" />
              </div>
              <div style={{ marginLeft: "70px" }}>
                <StepByStepButton name="3" />
              </div>
              <div style={{ marginLeft: "-5px" }}>
                <StepByStepButton name="4" />
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "-120px", marginTop: "20px" }}>
                <StepByStepButton name="5" />
              </div>
              <div style={{ marginLeft: "-100px", marginBottom: "60px" }}>
                <StepByStepButton name="6" />
              </div>
              <div style={{ marginLeft: "-150px" }}>
                <StepByStepButton name="7" />
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "-150px" }}>
                <StepByStepButton name="8" />
              </div>
              <div style={{ marginLeft: "-100px" }}>
                <StepByStepButton name="9" />
              </div>
              <div style={{ marginLeft: "-130px" }}>
                <StepByStepButton name="10" />
              </div>
            </li>

            <li>
              <div style={{ marginLeft: "-100px" }}>
                <StepByStepButton name="11" />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <StepByStepButton name="12" />
              </div>
              <div style={{ marginLeft: "-10px" }}>
                <StepByStepButton name="13" />
              </div>
              <div style={{ marginLeft: "-115px" }}>
                <StepByStepButton name="14" />
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "-50px" }}>
                <StepByStepButton name="15" />
              </div>
              <div>
                <StepByStepButton name="16" />
              </div>
              <div style={{ marginLeft: "-100px" }}>
                <StepByStepButton name="17" />
              </div>
            </li>
          </ul>
        </div>
      );
    }
  };
  return renderContent();
};
