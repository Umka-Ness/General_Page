import React, { useEffect, useState } from "react";
import css from "../../../main.module.css";
import video1 from "./Video/one.mp4";
import video2 from "./Video/2.mp4";
import video3 from "./Video/3.mp4";
import video4 from "./Video/4.mp4";

import { Materials } from "../Materials";

export const SaimonsCat = () => {
  const [backBtn, setBackBtn] = useState(false);

  useEffect(() => {
    localStorage.setItem("numberPage", "SaimonsCat");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const renderContent = () => {
    if (backBtn) {
      return <Materials />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <video
              src={video1}
              autoPlay="true"
              controls
              style={{
                width: "150px",
                height: "150px",
                border: "2px solid black",
              }}
            ></video>
            <video
              src={video2}
              controls
              style={{
                width: "150px",
                height: "150px",
                border: "2px solid black",
              }}
            ></video>
            <video
              src={video3}
              controls
              style={{
                width: "150px",
                height: "150px",
                border: "2px solid black",
              }}
            ></video>
            <video
              src={video4}
              controls
              style={{
                width: "150px",
                height: "150px",
                border: "2px solid black",
              }}
            ></video>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
