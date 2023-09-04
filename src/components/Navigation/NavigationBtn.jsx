import React, { useEffect, useState } from "react";
import { PageOne } from "../Game-page/pageOne";
import { BtnForNavigation } from "./BtnForNavigation";
// import { Context } from "../../App";
// import { Login } from "../Auth/Login";
import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";
import css from "../../main.module.css";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    localStorage.setItem("numberPage", "NavigationBtn");
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };

  // const { auth } = useContext(Context);

  // const handleLogout = async () => {
  //   try {
  //     await auth.signOut();
  //     return <Login />;
  //     // Дополнительные действия после выхода пользователя
  //   } catch (error) {
  //     console.log("Ошибка при выходе из системы:", error);
  //   }
  // };
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
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "100vw",
                  textAlign: "center",
                  position: "absolute",
                  top: "0",
                  height: "50px",
                  borderBottom: "2px solid black",
                }}
              >
                awsdwdawd
              </div>
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
