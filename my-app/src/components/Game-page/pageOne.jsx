// import React, { useState } from "react";
// import { Button } from "./Button";
// import gameInfo from "./gameInfo.json";
// import css from "./GamePage.module.css";
// import { NavigationBtn } from "../Navigation/NavigationBtn";
// import { MoveBox } from "../MoveBox/MoveBox";

// export const PageOne = () => {
//   const [selectedId, setSelectedId] = useState(null);
//   const [DraggableDiv, setDraggableDiv] = useState(false);

//   const handleOnClick = (e) => {
//     const id = e.target.id;
//     console.log(id);
//     setSelectedId(id);
//   };
//   const GoMoveBox = (e) => {
//     e.preventDefault();
//     setDraggableDiv(true);
//     console.log(e);
//   };
//   return (
//     <>
//       {selectedId === "back" ? (
//         <NavigationBtn />
//       ) : (
//         <div>
//           <button className={css.BackBtn} onClick={handleOnClick} id="back">
//             Back
//           </button>
//           <div
//             style={{
//               display: "flex",
//               gap: "20px",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               padding: "20px",
//               verticalAlign: "middle",
//               maxWidth: "100%",
//               minHeight: "100vh",
//             }}
//           >
//             {DraggableDiv === true ? <MoveBox /> : <p>dadada</p>}
//             <div
//               style={{
//                 textAlign: "center",
//                 height: "100%",
//               }}
//             >
//               <p className={css.name}>Name</p>
//               <div onClick={GoMoveBox}>
//                 <Button />
//               </div>
//               <p className={css.blockCard}>lala</p>
//             </div>

//             {gameInfo.map((i) => (
//               <div
//                 key={i.id}
//                 style={{
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 <div style={{ display: "flex", gap: "5px" }}>
//                   <div>
//                     <p className={css.name}>
//                       {i.id + " "}
//                       {i.name}
//                     </p>
//                     <Button url={i.url} onClick={GoMoveBox} />
//                     <p className={css.blockCard}>{i.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

import React, { useState } from "react";
import { Button } from "./Button";
import gameInfo from "./gameInfo.json";
import css from "../../main.module.css";
import { NavigationBtn } from "../Navigation/NavigationBtn";
import { StepByStep } from "../StepByStep/StepByStep";

export const PageOne = () => {
  const el = document.getElementsByTagName("body")[0];
  el.style.overflow = "auto";
  const [selectedId, setSelectedId] = useState(null);
  const [DraggableDiv, setDraggableDiv] = useState(false);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };

  const GoMoveBox = (e) => {
    e.preventDefault();
    setDraggableDiv(e.target.alt);
    console.log(e.target.alt);
  };

  const renderContent = () => {
    if (selectedId === "back") {
      return <NavigationBtn />;
    } else if (DraggableDiv === "Logo") {
      return <StepByStep />;
    } else {
      return (
        <div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px",
              verticalAlign: "middle",
              maxWidth: "100%",
              // minHeight: "100vh",
            }}
          >
            <button className={css.BackBtn} onClick={handleOnClick} id="back">
              Back
            </button>
            {/* {DraggableDiv === true ? <MoveBox /> : <p>dadada</p>} */}
            <div
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              <p className={css.name}>1 StepByStep</p>
              <div onClick={GoMoveBox}>
                <Button />
              </div>
              <p className={css.blockCard}>lala</p>
            </div>

            {gameInfo.map((i, index) => (
              <div
                key={i.id}
                style={{
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <div>
                    <p className={css.name}>
                      {index + 2 + " "}
                      {i.name}
                    </p>
                    <Button url={i.url} onClick={GoMoveBox} />
                    <p className={css.blockCard}>{i.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return <>{renderContent()}</>;
};
