import React, { useEffect, useState } from "react";
import css from "../../main.module.css";

import { NavMenu } from "../Navigation/NavMenu";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { Setting } from "../SettingAcc/Setting";

export const YourCourse = () => {
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    localStorage.setItem("numberPage", "YourCourse");
  }, []);
  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  if (selectedId === "GoNavigation") {
    return <NavigationBtn />;
  } else if (selectedId === "back") {
    return <NavigationBtn />;
  } else if (selectedId === "setting") {
    return <Setting />;
  } else if (selectedId === "GoHome") {
    return <NavigationBtn />;
  } else {
    return (
      <>
        <div onClick={handleOnClick}>
          <NavMenu />
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              marginLeft: "20px",
              marginTop: "70px",
              height: "100vh",
            }}
          >
            {/* <button
            className={css.BackBtn}
            id="back"
            style={{ marginTop: "60px" }}
          >
            Home
          </button> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid black",
                padding: "10px",
                width: "290px",
                height: "150px",
              }}
            >
              <p>№Courses</p>
              <p>Your course</p>

              <button
                id="GoNavigation"
                style={{ width: "100%", padding: "5px" }}
              >
                Go learning
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};
