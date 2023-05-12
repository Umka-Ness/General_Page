import React from "react";

import { Button } from "./Button";
import gameInfo from "./gameInfo.json";

export const PageOne = () => {
  return (
    <div>
      {gameInfo.map((i) => (
        <div key={i.id}>
          <div style={{ display: "flex", gap: "5px" }}>
            <p> {i.id}:</p>
            <p> {i.name} </p>
          </div>
          <Button url={i.url} />
        </div>
      ))}
    </div>
  );
};
