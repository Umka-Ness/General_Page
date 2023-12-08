import React, { useEffect, useState } from "react";
import css from "../../../main.module.css";
import video1 from "./Video/one.mp4";
import video2 from "./Video/2.mp4";
import video3 from "./Video/3.mp4";
import video4 from "./Video/4.mp4";
import video5 from "./Video/5.mp4";
import video6 from "./Video/6.mp4";
import video7 from "./Video/7.mp4";
import video8 from "./Video/8.mp4";
import video9 from "./Video/9.mp4";
import video10 from "./Video/10.mp4";

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
              paddingTop: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video1}
                autoPlay="true"
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
              ></video>
              <p>Simon`s cat one</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video2}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
              ></video>
              <p>Simon`s cat two</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video3}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat three</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video4}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat four</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video5}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat five</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video6}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat six</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video7}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat seven</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video8}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat eight</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video9}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat nine</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={css.simonsCat}
            >
              <video
                src={video10}
                controls
                style={{
                  border: "2px solid black",
                  width: "100%",
                  height: "100%",
                }}
                className={css.simonsCat}
              ></video>
              <p>Simon`s cat ten</p>
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
