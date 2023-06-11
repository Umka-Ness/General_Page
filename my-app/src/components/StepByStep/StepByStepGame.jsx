import React, { useState } from "react";
import cssPageOne from "../Game-page/GamePage.module.css";
import { StepByStep } from "./StepByStep";
import { StepByStepButtonGame } from "./StepByStepButtonGame";

export const StepByStepGame = (dataId, data) => {
  data = dataId.data;
  console.log(dataId);
  const [backBtn, setBackBtn] = useState(false);
  const [isGood, setIsGood] = useState(false);
  // const [client, setClient] = useState({ x: "0", y: "0" });

  const handleOnClick = (e) => {
    setBackBtn(true);
  };

  const handleClickBtn = (e) => {
    setIsGood(true);
    // window.resizeBy(-500, -500);
    // window.moveTo(184, 229);
  };

  const renderGame = (data) => {
    if (backBtn) {
      return <StepByStep />;
    } else {
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
                  value={isGood}
                />
              </div>
            ))}
            {/* {isGood && <StepByStepModal id={targetId} data={data} />} */}
          </div>
        </div>
      );
    }
  };
  return renderGame(data);
};
