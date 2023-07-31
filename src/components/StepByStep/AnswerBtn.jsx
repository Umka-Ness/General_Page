import React, { useRef, useState } from "react";
import css from "../../main.module.css";
export const AnswerBtn = ({
  id,
  text,
  textOne,
  textTwo,
  textThree,
  goodAnswer,
  tapInTheBtn,
}) => {
  const [valueBtn, setValueBtn] = useState(false);
  const leftRef = useRef();
  const rightRef = useRef();

  if (tapInTheBtn) {
    setTimeout(() => {
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.transform = "translate(-30px, 0px)";
        rightRef.current.style.transform = "translate(30px, 0px)";
      }
    }, 1900);
  } else {
    return null;
  }
  const isDisabled = () => {
    setValueBtn(true);
  };

  return (
    <div style={{ display: "flex" }} id={id}>
      <div className={css.answers} ref={leftRef}>
        <button
          style={{
            minWidth: "150px",
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
            minWidth: "150px",
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
      <div className={css.answers} ref={rightRef}>
        <button
          style={{
            minWidth: "150px",
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
            minWidth: "150px",
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
