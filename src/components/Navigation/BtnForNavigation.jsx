import React from "react";
import { BtnComponent } from "./BtnComponent";

export const BtnForNavigation = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          alignContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "60px",
            paddingTop: "30px",
          }}
        >
          <BtnComponent id={"1"} name={"Game"} />
          <BtnComponent id={"2"} name={"lecture"} />
          <BtnComponent id={"3"} name={"materials"} />
          <BtnComponent id={"4"} name={"Homework"} />
        </div>
        <p style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
          Test Version
        </p>
      </div>
    </>
  );
};
