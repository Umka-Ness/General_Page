import React from "react";
import css from "../../main.module.css";
export const Button = ({ url, alt, img }) => {
  return (
    <div>
      <form action={url} target="_blank">
        <a href={url} className={css.btn}>
          <img
            src={img}
            alt={alt}
            style={{ width: "350px", height: "200px", borderRadius: "10px" }}
          />
        </a>
      </form>
    </div>
  );
};
