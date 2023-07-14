import React from "react";
import css from "../../main.module.css";
export const AnswerBtn = ({ id, text, textOne, textTwo, textThree }) => {
  return (
    <div style={{ display: "flex" }}>
      <div id={id} className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          {" "}
          {text}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          {" "}
          {textOne}
        </button>
      </div>
      <div id={id} className={css.answers}>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          {" "}
          {textTwo}
        </button>
        <button
          style={{
            width: "200px",
            borderRadius: "15px",
            border: "1px solid black",
          }}
        >
          {" "}
          {textThree}
        </button>
      </div>
    </div>
  );
};
