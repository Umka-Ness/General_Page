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
    </>
  );
};

// [
//   {
//     id: 1,
//     name: "Game",
//     color: "red",
//     image: "../../../public/bgButtonStars.svg",
//   },
//   {
//     id: 2,
//     name: "lecture",
//     color: "blue",
//     image:
//       "https://co19.nevseoboi.com.ua/game/318/31854/thumbs/1562412498-1000278-games-nevseoboi.com.ua.jpg",
//   },
//   { id: 3, name: "materials", color: "green", image: "" },
//   { id: 4, name: "Homework", color: "aqua", image: "" },
// ];
