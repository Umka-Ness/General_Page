import React, { useEffect, useRef, useState } from "react";
import { PageOne } from "../Game-page/pageOne";
import { BtnForNavigation } from "./BtnForNavigation";

import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";
import css from "../../main.module.css";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignOut } from "../SettingAcc/SignOut";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase";
import { NavMenu } from "./NavMenu";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState("");

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const fetchDataAsync = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userArray = querySnapshot.docs;
    const keyUser = localStorage.getItem("keyUser");

    for (let i = 0; i < userArray.length; i++) {
      const userData = userArray[i].data();
      const userKey = userData.key;
      const userName = userData.login;

      if (keyUser === userKey) {
        console.log(userName, 12312312);
        break;
      } else {
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("numberPage", "NavigationBtn");

    fetchDataAsync();
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    setSelectedId(id);
  };

  const renderContent = () => {
    if (selectedId === "1") {
      return <PageOne />;
    } else if (selectedId === "2") {
      return <Lecture />;
    } else if (selectedId === "5") {
      return <Setting />;
    } else {
      return (
        <>
          <div
            onClick={handleOnClick}
            style={{
              display: "flex",
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              background: "#fafafa",
            }}
          >
            <div style={{ display: "flex" }}>
              <NavMenu />
              <div
                style={{
                  display: "flex",
                  marginTop: "45px",
                  borderRight: "2px solid black",
                  paddingRight: "5px",
                  // borderTop: "2px solid black",
                  // paddingTop: "5px",
                  // paddingBottom: "5px",
                  // borderBottom: "2px solid black",
                }}
                className={css.LeftMenu}
              >
                <BtnForNavigation />
              </div>
            </div>
            <div
              style={{
                padding: "0px 0px 0px 40px",
                width: "100%",
                textAlign: "center",
                height: "80%",
              }}
              className={css.containerForLeftMenu}
            >
              12312312312
            </div>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
