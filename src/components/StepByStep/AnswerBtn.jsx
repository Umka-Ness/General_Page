import React, { useState } from "react";
import css from "../../main.module.css";
export const AnswerBtn = ({
  id,
  text,
  textOne,
  textTwo,
  textThree,
  goodAnswer,
}) => {
  const [valueBtn, setValueBtn] = useState(false);
  const isDisabled = () => {
    setValueBtn(true);
  };

  return (
    <div style={{ display: "flex" }} id={id}>
      <div className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer",
          }}
          data={text === goodAnswer ? goodAnswer : ""}
          disabled={valueBtn}
          datavalue="answerBtn"
          onClick={isDisabled}
        >
          {text}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer",
          }}
          data={textOne === goodAnswer ? goodAnswer : ""}
          disabled={valueBtn}
          datavalue="answerBtn"
          onClick={isDisabled}
        >
          {textOne}
        </button>
      </div>
      <div className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer",
          }}
          data={textTwo === goodAnswer ? goodAnswer : ""}
          disabled={valueBtn}
          datavalue="answerBtn"
          onClick={isDisabled}
        >
          {textTwo}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer",
          }}
          data={textThree === goodAnswer ? goodAnswer : ""}
          disabled={valueBtn}
          datavalue="answerBtn"
          onClick={isDisabled}
        >
          {textThree}
        </button>
      </div>
    </div>
  );
};
