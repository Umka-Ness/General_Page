// import React, { useEffect, useState, useRef } from "react";
// import * as THREE from "three";
// import { PageOne } from "../Game-page/pageOne";
import css from "../../main.module.css";

// export const Dice = () => {
//   const [selectedId, setSelectedId] = useState("");
//   //   const [diceValue, setDiceValue] = useState(0);

//   //   const scene = new THREE.Scene();
//   //   const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//   //   const renderer = new THREE.WebGLRenderer();
//   //   const dice = new THREE.Object3D();

//   //   const diceMaterials = [
//   //     new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Front
//   //     new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Back
//   //     new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top
//   //     new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom
//   //     new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Right
//   //     new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Left
//   //   ];

//   //   const rollDice = () => {
//   //     const side = Math.floor(Math.random() * 6);
//   //     setDiceValue(side + 1);

//   //     const rollDuration = 2000; // 3 seconds
//   //     const initialRotation = dice.rotation.x;

//   //     const animateRoll = () => {
//   //       const currentTime = Date.now();
//   //       const elapsedTime = currentTime - startTime;

//   //       if (elapsedTime < rollDuration) {
//   //         const rotationProgress = (elapsedTime / rollDuration) * Math.PI * 2;
//   //         dice.rotation.x = initialRotation + rotationProgress;
//   //         renderer.render(scene, camera);
//   //         requestAnimationFrame(animateRoll);
//   //       } else {
//   //         dice.rotation.x = initialRotation + Math.PI * 2 * (diceValue / 6);
//   //         renderer.render(scene, camera);
//   //       }
//   //     };

//   //     const startTime = Date.now();
//   //     animateRoll();
//   //   };

//   //   useEffect(() => {
//   //     localStorage.setItem("numberPage", "Dice");

//   //     // Set up scene
//   //     camera.position.z = 5;
//   //     renderer.setSize(200, 200);
//   //     const diceGeometry = new THREE.BoxGeometry(3, 3, 3);
//   //     const diceMesh = new THREE.Mesh(diceGeometry, diceMaterials);
//   //     dice.add(diceMesh);
//   //     scene.add(dice);

//   //     // Append renderer to a container div
//   //     const container = document.getElementById("dice-container");
//   //     container.appendChild(renderer.domElement);
//   //   }, []);
// //   const handleOnClick = (e) => {
// //     const id = e.target.id;
// //     setSelectedId(id);
// //   };

//   //var faceAni = ["faceOne", "faceTwo", "faceThree", "faceFour", "faceFive", "faceSix"];

//   var faceRot = [
//     "rotate3d(0, 0, 1, -90deg)",
//     "rotate3d(1, 0, 0, 180deg)",
//     "rotate3d(1, 0, 0, 90deg)",
//     "rotate3d(1, 0, 0, -90deg)",
//     "rotate3d(0, 1, 0, -90deg)",
//     "rotate3d(0, 1, 0, 90deg)",
//   ];

//   var dice = document.getElementsByClassName("dice")[0];

//   function rollDice() {
//     var faces = document.getElementsByClassName("dice-face");

//     for (var fIt = 0; fIt < faces.length; fIt++) {
//       faces[fIt].style.backgroundColor = "white";
//     }

//     var randFace = Math.round(Math.random() * 5);

//     dice.style.left = Math.random() * 3 + "px";
//     dice.style.top = Math.random() * 3 + "px";

//     dice.style.transform =
//       "rotate3d(1, 0, 0, " +
//       Math.random() * 360 +
//       "deg) rotate3d(0, 1, 0, " +
//       Math.random() * 360 +
//       "deg) rotate3d(0, 0, 1, " +
//       Math.random() * 360 +
//       "deg)";

//     setTimeout(function () {
//       dice.style.transform = faceRot[randFace];
//       document.getElementsByClassName("dice-face")[
//         randFace
//       ].style.backgroundColor = "green";
//     }, 900);

//     //dice.style.transform = faceRot[0];

//     //dice.style.animation = faceAni[Math.round(Math.random() * 5)] + "1s linear";

//     //dice.style.animation = "faceOne 1s";
//   }

//   const renderContent = () => {
//     if (selectedId === "back") {
//       return <PageOne />;
//     } else {
//       return (
//         <>
//           <button className={css.BackBtn} onClick={handleOnClick} id="back">
//             Back
//           </button>
//           <div className="dice-face">
//             <div
//               className={css.dice}
//               onClick={rollDice}
//               style={{ width: "300px", height: "300px" }}
//             >
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//               <div
//                 className={css.diceface}
//                 style={{ width: "30px", height: "30px" }}
//               ></div>
//             </div>
//           </div>
//         </>
//       );
//     }
//   };

//   return <>{renderContent()}</>;
// };

// // src/Dice.js
import React, { useEffect, useRef, useState } from "react";
import { PageOne } from "../Game-page/pageOne";

export const Dice = () => {
  const [selectedId, setSelectedId] = useState("");
  const refRoll = useRef();

  useEffect(() => {
    setTimeout(() => {
      handleRoll();
    }, 100);
  }, []);

  const handleOnClick = (e) => {
    const id = e.target.id;
    setSelectedId(id);
  };
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(1);
  const [counter, setCounter] = useState(1);

  const handleRoll = () => {
    const refRollCurrent = refRoll.current;
    refRollCurrent.style.animationIterationCount = counter;
    setCounter(counter + 1);
    console.log(refRollCurrent.classList);
    setTimeout(() => {
      refRollCurrent.style.animation = "roll 2s ease infinite";
    }, 3000);
    refRollCurrent.style.animation = "";

    // refRollCurrent.classList.add("rolling");
    // console.log(refRollCurrent.classList);

    console.log(refRollCurrent.style);
    console.log(refRollCurrent.classList);

    if (!rolling) {
      setRolling(true);

      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        setResult(randomNumber);
        setRolling(false);
      }, 3000); // 2 секунды
    }
  };

  if (selectedId === "back") {
    return <PageOne />;
  }
  return (
    <>
      <button
        className={css.BackBtn}
        onClick={handleOnClick}
        id="back"
        style={{ borderColor: "rgba(248, 0, 0, 0.63)", color: "red" }}
      >
        Back
      </button>

      <div className={css.diceContainer}>
        <div
          className={`${css.dice}  ${css.rolling} `}
          onClick={handleRoll}
          ref={refRoll}
        >
          <div className={css.face}>
            {result === 1 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.center}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
          <div className={css.faceOne}>
            {result === 1 && <div className={`${css.dot} ${css.center}`} />}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
          <div className={css.faceTwo}>
            {result === 1 && <div className={`${css.dot} ${css.center}`} />}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
          <div className={css.faceThree}>
            {result === 1 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.center}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
          <div className={css.faceFour}>
            {result === 1 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
          <div className={css.faceFive}>
            {result === 1 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 2 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 3 && (
              <>
                <div className={`${css.dot} ${css.center}`} />
              </>
            )}
            {result === 4 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 5 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.center}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
            {result === 6 && (
              <>
                <div className={`${css.dot} ${css.topLeft}`} />
                <div className={`${css.dot} ${css.topRight}`} />
                <div className={`${css.dot} ${css.middleLeft}`} />
                <div className={`${css.dot} ${css.middleRight}`} />
                <div className={`${css.dot} ${css.bottomLeft}`} />
                <div className={`${css.dot} ${css.bottomRight}`} />
              </>
            )}
          </div>
        </div>

        <button onClick={handleRoll} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll"}
        </button>
      </div>
    </>
  );
};

export default Dice;
