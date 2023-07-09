import React from "react";
import { BtnComponent } from "./BtnComponent";
import svg from "./SVG/bgButtonStars.svg";
import svgIdk from "./SVG/bgButtonIdk.svg";
import svgPurple from "./SVG/bgButtonPurple.svg";

export const BtnForNavigation = () => {
  return (
    <>
      <BtnComponent id={"1"} name={"Game"} color={"red"} image={svg} />
      <BtnComponent id={"2"} name={"lecture"} color={"blue"} image={svgIdk} />
      <BtnComponent
        id={"3"}
        name={"materials"}
        color={"yellow"}
        image={svgPurple}
      />
      <BtnComponent id={"4"} name={"Homework"} color={"purple"} image={svg} />
      <BtnComponent id={"5"} name={"Setting"} color={"tomato"} image={svgIdk} />
    </>
  );
};
