import React, { useState } from "react";
import css from "../../main.module.css";

import { NavMenu } from "../Navigation/NavMenu";
import { NavigationBtn } from "../Navigation/NavigationBtn";

export const YourCourse = () => {
  const [selectedId, setSelectedId] = useState();

  //   useEffect(() => {
  //     localStorage.setItem("numberPage", "YourCourse");
  //   }, []);
  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  if (selectedId === "GoNavigation") {
    return <NavigationBtn />;
  } else if (selectedId === "back") {
    return <NavigationBtn />;
  } else {
    return (
      <>
        <NavMenu />
        <div
          onClick={handleOnClick}
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginLeft: "20px",
            marginTop: "70px",
            height: "100vh",
            alignContent: "flex-start",
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
              border: "1px solid black",
              padding: "10px",
              width: "290px",
              height: "150px",
            }}
          >
            <p>Your course</p>
            <button id="GoNavigation">Go learning</button>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "290px",
              height: "150px",
            }}
          >
            <p>Your course</p>
            <button id="GoNavigation">Go learning</button>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "290px",
              height: "150px",
            }}
          >
            <p>Your course</p>
            <button id="GoNavigation">Go learning</button>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "290px",
              height: "150px",
            }}
          >
            <p>Your course</p>
            <button id="GoNavigation">Go learning</button>
          </div>
        </div>
      </>
    );
  }
};
