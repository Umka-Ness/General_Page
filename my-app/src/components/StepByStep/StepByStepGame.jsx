import React, { useState } from "react";
import cssPageOne from "../Game-page/GamePage.module.css";
import { StepByStep } from "./StepByStep";
import { StepByStepButtonGame } from "./StepByStepButtonGame";
import data from "./StepByStepDataBtn.json";
export const StepByStepGame = (dataId) => {
  console.log(dataId);
  const [backBtn, setBackBtn] = useState(false);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const renderGame = () => {
    if (backBtn) {
      return <StepByStep />;
    } else {
      const handleClickBtn = (e) => {
        console.log(e.target);
      };

      return (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            justifyContent: "center",
          }}
        >
          <button
            className={cssPageOne.BackBtn}
            onClick={handleOnClick}
            id="back"
            // style={{ position: "absolute", top: "0" }}
          >
            Back
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              maxWidth: "995px",
            }}
          >
            {data.map((i, index) => (
              <div key={i.id} onClick={handleClickBtn}>
                <StepByStepButtonGame
                  name={i.name}
                  id={i.id}
                  index={index + 1}
                />
              </div>
            ))}
            {/* <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame />
            <StepByStepButtonGame /> */}
          </div>
        </div>
      );
    }
  };
  return renderGame();
};
