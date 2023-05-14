import React from "react";
import { Button } from "./Button";
import gameInfo from "./gameInfo.json";
import css from "./GamePage.module.css";

export const PageOne = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        border: "2px solid black",
        padding: "10px",
        verticalAlign: "middle",
        minWidth: "100vh",
        minHeight: "100vh",
      }}
    >
      {gameInfo.map((i) => (
        <div key={i.id} style={{ textAlign: "center", height: "100%" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <div className={css.blockCard}>
              <p className={css.name}>
                {i.id + " "}
                {i.name}
              </p>
              <Button url={i.url} />
              <p className={css.nameDescription}>{i.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
