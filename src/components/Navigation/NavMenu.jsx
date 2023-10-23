import React, { useEffect, useRef, useState } from "react";
import css from "../../main.module.css";
import imageQuestionAvatar from "./image/Avatar.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignOut } from "../SettingAcc/SignOut";
import { Setting } from "../SettingAcc/Setting";
import { YourCourse } from "../Lecture/YourCourse";

export const NavMenu = () => {
  const refAvatar = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const handleOnClick = (e) => {
    const id = e.target.id;
    setSelectedId(id);
  };

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // В этом месте пользователь успешно аутентифицирован
        console.log("Текущий пользователь:", user);
        // console.log(auth.currentUser.photoURL);

        const userEmail = user.email;
        const userName = user.displayName;
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
  const handleOnClickAvatar = () => {
    const refAvatarCurrent = refAvatar.current;

    return refAvatarCurrent.classList.toggle(css.isHidden);
  };
  const renderContent = () => {
    if (selectedId === "5") {
      //   return <Setting />;
    } else {
      return (
        <>
          <div className={css.navContainer} onClick={handleOnClick}>
            <div>
              <div id="GoHome" className={css.navLogo}>
                <div style={{ display: "flex" }} id="GoHome">
                  Langalaxy
                  <p style={{ color: "blue" }} id="GoHome">
                    ™
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "20px",

                alignItems: "center",
                position: "relative",
                height: "45px",
              }}
            >
              <div>awsdwdawd</div>
              <div
                id={"YourCourse"}
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Courses
              </div>

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
                    {name ? name : null}
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
                <li className={css.toggleMenuList} id={"setting"}>
                  Setting
                </li>
                <li className={css.toggleMenuList}>
                  <SignOut />
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  };

  return renderContent();
};
