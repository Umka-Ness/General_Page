import React from "react";
import logo from "../Game-page/Screenshot_9.png";
export const Button = ({ url }) => {
  console.log(url);
  return (
    <div>
      <form action={url} target="_blank">
        <button>
          <img
            src={logo}
            alt="lalala"
            style={{ width: "250px", height: "100px" }}
          />
        </button>
      </form>
    </div>
  );
};
