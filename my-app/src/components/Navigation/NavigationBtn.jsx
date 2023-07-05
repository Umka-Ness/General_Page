import React, { useEffect, useState } from "react";
import { PageOne } from "../Game-page/pageOne";
import { BtnForNavigation } from "./BtnForNavigation";
// import { Context } from "../../App";
// import { Login } from "../Auth/Login";
import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState(null);

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
              flexWrap: "wrap",
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <BtnForNavigation />
            {/* <Register /> */}
          </div>
          {/* <button onClick={handleLogout}>Setting</button> */}
        </>
      );
    }
  };
  return renderContent();
};
