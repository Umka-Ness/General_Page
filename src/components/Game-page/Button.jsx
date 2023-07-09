import React from "react";
import logo from "../Game-page/Screenshot_9.png";
import css from "../../main.module.css";
export const Button = ({ url, alt }) => {
  return (
    <div>
      <form action={url} target="_blank">
        <a href={url} className={css.btn}>
          <img
            src={logo}
            alt={alt}
            style={{ width: "350px", height: "200px", borderRadius: "10px" }}
          />
        </a>
      </form>
    </div>
  );
};
