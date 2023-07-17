import React, { useState, useEffect } from "react";
import css from "../../main.module.css";
import { StepByStep } from "./StepByStep";
import { StepByStepButtonGame } from "./StepByStepButtonGame";
import fone from "./images/fon.png";

export const StepByStepGame = (dataId, data) => {
  data = dataId.data;
  console.log(dataId);
  const [backBtn, setBackBtn] = useState(false);
  const [isGood, setIsGood] = useState(false);
  const [error, setError] = useState(0);

  useEffect(() => {
    if (error === 10) {
      //сделать рендер компонента модального окна для подведения ошибок и верных ответов
    }
  }, [error]);

  const handleOnClick = (e) => {
    setBackBtn(true);
  };

  const handleClickBtn = (e) => {
    setIsGood(true);
    try {
      if (e.target.attributes.datavalue.value === "answerBtn") {
        setError(error + 1);
        e.target.style.backgroundColor = "purple";
        e.target.style.color = "white";
        console.log(e.target.textContent);
      } else {
      }
    } catch (error) {}
  };

  const renderGame = (data) => {
    if (backBtn) {
      return <StepByStep />;
    } else {
      return (
        <>
          <div
            style={{
              backgroundImage: `url(${fone})`,
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            className={css.fon}
          ></div>
          <div
            style={{
              display: "flex",
              minHeight: "100vh",
              justifyContent: "center",
            }}
          >
            <button className={css.BackBtn} onClick={handleOnClick} id="back">
              Back
            </button>
            <div
              style={{
                position: "relative",
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
                    text={i.text}
                    textOne={i.textOne}
                    textTwo={i.textTwo}
                    textThree={i.textThree}
                    value={isGood}
                    goodAnswer={i.goodAnswer}
                    answerBtn="answerBtn"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };
  return renderGame(data);
};
