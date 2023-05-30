import React, { useState } from "react";
import css from "./StepByStep.module.css";
import cssPageOne from "../Game-page/GamePage.module.css";
import { StepByStepButton } from "./StepByStepButton";
import { PageOne } from "../Game-page/pageOne";
import { StepByStepGame } from "./StepByStepGame";

export const StepByStep = () => {
  const [backBtn, setBackBtn] = useState(false);
  const [run, setRun] = useState(false);
  const [dataId, setDataId] = useState(null);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const runGame = (e) => {
    setDataId(e.currentTarget.id);

    setRun(true);
  };
  const renderContent = (e) => {
    dataId === "1" ? console.log("da") : console.log("net");
    if (backBtn === true) {
      return <PageOne />;
    } else if (run) {
      return <StepByStepGame dataId={dataId} />;
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
              <div
                style={{ marginLeft: "50px", maxWidth: "40px" }}
                id={1}
                onClick={runGame}
              >
                <StepByStepButton name="1" />
              </div>
              <div
                style={{ marginLeft: "-10px", maxWidth: "40px" }}
                id={2}
                onClick={runGame}
              >
                <StepByStepButton name="2" />
              </div>
              <div
                style={{ marginLeft: "70px", maxWidth: "40px" }}
                id={3}
                onClick={runGame}
              >
                <StepByStepButton name="3" />
              </div>
              <div
                style={{ marginLeft: "-5px", maxWidth: "40px" }}
                id={4}
                onClick={runGame}
              >
                <StepByStepButton name="4" />
              </div>
            </li>
            <li>
              <div
                style={{
                  marginLeft: "-120px",
                  marginTop: "20px",
                  maxWidth: "40px",
                }}
                id={5}
                onClick={runGame}
              >
                <StepByStepButton name="5" />
              </div>
              <div
                style={{
                  marginLeft: "-100px",
                  marginBottom: "60px",
                  maxWidth: "40px",
                }}
                id={6}
                onClick={runGame}
              >
                <StepByStepButton name="6" />
              </div>
              <div
                style={{ marginLeft: "-150px", maxWidth: "40px" }}
                id={7}
                onClick={runGame}
              >
                <StepByStepButton name="7" />
              </div>
            </li>
            <li>
              <div
                style={{ marginLeft: "-150px", maxWidth: "40px" }}
                id={8}
                onClick={runGame}
              >
                <StepByStepButton name="8" />
              </div>
              <div
                style={{ marginLeft: "-100px", maxWidth: "40px" }}
                id={9}
                onClick={runGame}
              >
                <StepByStepButton name="9" />
              </div>
              <div
                style={{ marginLeft: "-130px", maxWidth: "40px" }}
                id={10}
                onClick={runGame}
              >
                <StepByStepButton name="10" />
              </div>
            </li>

            <li>
              <div
                style={{ marginLeft: "-100px", maxWidth: "40px" }}
                id={11}
                onClick={runGame}
              >
                <StepByStepButton name="11" />
              </div>
              <div
                style={{ marginLeft: "10px", maxWidth: "40px" }}
                id={12}
                onClick={runGame}
              >
                <StepByStepButton name="12" />
              </div>
              <div
                style={{ marginLeft: "-10px", maxWidth: "40px" }}
                id={13}
                onClick={runGame}
              >
                <StepByStepButton name="13" />
              </div>
              <div
                style={{ marginLeft: "-115px", maxWidth: "40px" }}
                id={14}
                onClick={runGame}
              >
                <StepByStepButton name="14" />
              </div>
            </li>
            <li>
              <div
                style={{ marginLeft: "-50px", maxWidth: "40px" }}
                id={15}
                onClick={runGame}
              >
                <StepByStepButton name="15" />
              </div>
              <div>
                <StepByStepButton name="16" />
              </div>
              <div
                style={{ marginLeft: "-100px", maxWidth: "40px" }}
                id={16}
                onClick={runGame}
              >
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
