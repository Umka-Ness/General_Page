import React from "react";

export const AnswerBtn = ({ id, text, textOne, textTwo, textThree }) => {
  return (
    <div id={id}>
      <button> {text}</button>
      <button> {textOne}</button>
      <button> {textTwo}</button>
      <button> {textThree}</button>
    </div>
  );
};
