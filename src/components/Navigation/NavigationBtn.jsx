import React, { useEffect, useRef, useState } from "react";
import { PageOne } from "../Game-page/pageOne";
import { BtnForNavigation } from "./BtnForNavigation";

import { Lecture } from "../Lecture/Lecture";
import { Setting } from "../SettingAcc/Setting";
import css from "../../main.module.css";
import imageQuestionAvatar from "./image/unnamed.jpg";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignOut } from "../SettingAcc/SignOut";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [name, setName] = useState("");
  const refAvatar = useRef();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // В этом месте пользователь успешно аутентифицирован
        console.log("Текущий пользователь:", user);
        console.log(auth.currentUser.photoURL);

        const photoUrl = user.photoURL;
        const userEmail = user.email;
        const userName = user.displayName;
        setPhoto(photoUrl);
        setEmail(userEmail);
        setName(userName);
      } else {
        // Пользователь вышел из системы или не аутентифицирован
        console.log("Пользователь не в системе.");
        // console.log(auth.currentUser.photoURL);
      }
    });

    return () => unsubscribe(); // Отписка от обновлений при размонтировании компонента
  }, []);

  const fetchDataAsync = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userArray = querySnapshot.docs;
    const keyUser = localStorage.getItem("keyUser");

    for (let i = 0; i < userArray.length; i++) {
      const userData = userArray[i].data();
      const userKey = userData.key;
      const userName = userData.login;

      if (keyUser === userKey) {
        setNameUser(userName);
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
    console.log(id);
    setSelectedId(id);
  };
  const handleOnClickAvatar = () => {
    const refAvatarCurrent = refAvatar.current;

    return refAvatarCurrent.classList.toggle(css.isHidden);
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
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "absolute",
                  top: "0",
                  height: "50px",
                  borderBottom: "2px solid black",
                }}
              >
                <div>
                  <div
                    style={{ position: "absolute", top: "15px", left: "15px" }}
                  >
                    <div style={{ display: "flex" }}>
                      Langalaxy <p style={{ color: "blue" }}>™</p>
                    </div>
                  </div>
                </div>
                <div>awsdwdawd</div>
                <div
                  style={{
                    position: "relative",
                    height: "45px",
                  }}
                >
                  <img
                    src={imageQuestionAvatar}
                    alt="img"
                    className={css.avatarImg}
                    onClick={handleOnClickAvatar}
                  />

                  <ul
                    className={`${css.toggleMenu} ${css.nothing} ${css.isHidden}`}
                    ref={refAvatar}
                  >
                    <div>
                      <li
                        style={{
                          marginTop: "10px",
                          marginBottom: "5px",
                          color: "#909196",
                          cursor: "default",
                        }}
                      >
                        {name ? name : nameUser}
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          color: "#909196",
                          cursor: "default",
                        }}
                      >
                        {email}
                      </li>
                      <li className={css.toggleMenuList}>Profile</li>
                      <li className={css.toggleMenuList}>Nothing2</li>
                    </div>
                    <li className={css.toggleMenuList} id={"5"}>
                      Setting
                    </li>
                    <li className={css.toggleMenuList}>
                      <SignOut />
                    </li>
                  </ul>
                </div>
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
