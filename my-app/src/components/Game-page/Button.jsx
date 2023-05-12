import React from "react";
import s from "../Game-page/Screenshot_9.png";
export const Button = (url) => {
  return (
    <div>
      <form action={url} target="_blank">
        <button>
          <img
            src={s}
            alt="lalala"
            style={{ width: "250px", height: "100px" }}
          />
        </button>
      </form>
    </div>
  );
};
