import React from "react";
import css from "../../main.module.css";
export const AnswerBtn = ({
  id,
  text,
  textOne,
  textTwo,
  textThree,
  goodAnswer,
}) => {
  console.log(goodAnswer);
  return (
    <div style={{ display: "flex" }}>
      <div id={id} className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
          }}
          data={text === goodAnswer ? goodAnswer : ""}
        >
          {text}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
          }}
          data={textOne === goodAnswer ? goodAnswer : ""}
        >
          {textOne}
        </button>
      </div>
      <div id={id} className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
          }}
          data={textTwo === goodAnswer ? goodAnswer : ""}
        >
          {textTwo}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
            padding: "5px",
          }}
          data={textThree === goodAnswer ? goodAnswer : ""}
        >
          {textThree}
        </button>
      </div>
    </div>
  );
};
