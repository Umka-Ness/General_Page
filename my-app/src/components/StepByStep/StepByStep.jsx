import React, { useState } from "react";
import css from "../../main.module.css";
import cssPageOne from "../Game-page/GamePage.module.css";
import { StepByStepButton } from "./StepByStepButton";
import { PageOne } from "../Game-page/pageOne";
import { StepByStepGame } from "./StepByStepGame";
import data from "./StepByStepData/StepByStepDataBtn.json";
import dataTwo from "./StepByStepData/StepByStepDataBtnTwo.json";
import dataThree from "./StepByStepData/StepByStepDataBtnThree.json";
import dataFour from "./StepByStepData/StepByStepDataBtnFour.json";
import dataFive from "./StepByStepData/StepByStepDataBtnFive.json";
import dataSix from "./StepByStepData/StepByStepDataBtnSix.json";
import dataSeven from "./StepByStepData/StepByStepDataBtnSeven.json";
import dataEight from "./StepByStepData/StepByStepDataBtnEight.json";
import dataNine from "./StepByStepData/StepByStepDataBtnNine.json";
import dataTen from "./StepByStepData/StepByStepDataBtnTen.json";
import dataEleven from "./StepByStepData/StepByStepDataBtnEleven.json";
import dataTwelve from "./StepByStepData/StepByStepDataBtnTwelve.json";
import dataThirteen from "./StepByStepData/StepByStepDataBtnThirteen.json";
import dataFourteen from "./StepByStepData/StepByStepDataBtnFourteen.json";
import dataFifteen from "./StepByStepData/StepByStepDataBtnFifteen.json";
import dataSixteen from "./StepByStepData/StepByStepDataBtnSixteen.json";
import dataSeventeen from "./StepByStepData/StepByStepDataBtnSeventeen.json";

import svgGo from "./Picture/SVG/Go.svg";
import svgBagOneStar from "./Picture/SVG/bag-1-star.svg";
import svgBagTwoStars from "./Picture/SVG/bag-2-stars.svg";
import svgBagThreeStars from "./Picture/SVG/bag-3-stars.svg";
import svgKeyOneStars from "./Picture/SVG/key-1-star.svg";
import svgKeyTwoStars from "./Picture/SVG/key-2-stars.svg";
import svgKeyThreeStars from "./Picture/SVG/key-3-stars.svg";
import svgQuestionOneStar from "./Picture/SVG/question-1-star.svg";
import svgQuestionTwoStars from "./Picture/SVG/question-2-stars.svg";
import svgQuestionThreeStars from "./Picture/SVG/question-3-stars.svg";

import skyBg from "./Picture/SVG/bg.svg";

export const StepByStep = () => {
  const el = document.getElementsByTagName("body")[0];
  el.style.overflow = "hidden";
  const [backBtn, setBackBtn] = useState(false);
  const [run, setRun] = useState(false);
  const [dataId, setDataId] = useState(null);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setBackBtn(true);
  };

  const runGame = (e) => {
    setDataId(e.currentTarget.id);

    setRun(true);
  };
  const renderContent = (e) => {
    dataId === "1" ? console.log("da") : console.log("net");
    if (backBtn === true) {
      return <PageOne />;
    } else if (run) {
      if (dataId === "1") {
        return <StepByStepGame dataId={dataId} data={data} dataSvg={svgGo} />;
      } else if (dataId === "2") {
        return <StepByStepGame dataId={dataId} data={dataTwo} />;
      } else if (dataId === "3") {
        return <StepByStepGame dataId={dataId} data={dataThree} />;
      } else if (dataId === "4") {
        return <StepByStepGame dataId={dataId} data={dataFour} />;
      } else if (dataId === "5") {
        return <StepByStepGame dataId={dataId} data={dataFive} />;
      } else if (dataId === "6") {
        return <StepByStepGame dataId={dataId} data={dataSix} />;
      } else if (dataId === "7") {
        return <StepByStepGame dataId={dataId} data={dataSeven} />;
      } else if (dataId === "8") {
        return <StepByStepGame dataId={dataId} data={dataEight} />;
      } else if (dataId === "9") {
        return <StepByStepGame dataId={dataId} data={dataNine} />;
      } else if (dataId === "10") {
        return <StepByStepGame dataId={dataId} data={dataTen} />;
      } else if (dataId === "11") {
        return <StepByStepGame dataId={dataId} data={dataEleven} />;
      } else if (dataId === "12") {
        return <StepByStepGame dataId={dataId} data={dataTwelve} />;
      } else if (dataId === "13") {
        return <StepByStepGame dataId={dataId} data={dataThirteen} />;
      } else if (dataId === "14") {
        return <StepByStepGame dataId={dataId} data={dataFourteen} />;
      } else if (dataId === "15") {
        return <StepByStepGame dataId={dataId} data={dataFifteen} />;
      } else if (dataId === "16") {
        return <StepByStepGame dataId={dataId} data={dataSixteen} />;
      } else if (dataId === "17") {
        return <StepByStepGame dataId={dataId} data={dataSeventeen} />;
      }
    } else {
      return (
        <>
          {/* <img src={skyBg} alt="asas" className={cssPageOne.bgSvg} /> */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: "2",
              alignItems: "center",
            }}
            className={css.wrapper}
          >
            <button
              className={cssPageOne.BackBtn}
              onClick={handleOnClick}
              id="back"
              // style={{ position: "absolute", top: "0" }}
            >
              Back
            </button>
            <ul className={css.container}>
              <li>
                <div
                  style={{ marginLeft: "50px", maxWidth: "40px" }}
                  id={1}
                  onClick={runGame}
                >
                  <StepByStepButton name="Go" dataSvg={svgGo} />
                </div>
                <div
                  style={{ marginLeft: "-10px", maxWidth: "40px" }}
                  id={2}
                  onClick={runGame}
                >
                  <StepByStepButton name="2" dataSvg={svgBagOneStar} />
                </div>
                <div
                  style={{ marginLeft: "70px", maxWidth: "40px" }}
                  id={3}
                  onClick={runGame}
                >
                  <StepByStepButton name="3" dataSvg={svgBagTwoStars} />
                </div>
                <div
                  style={{ marginLeft: "-5px", maxWidth: "40px" }}
                  id={4}
                  onClick={runGame}
                >
                  <StepByStepButton name="4" dataSvg={svgKeyOneStars} />
                </div>
              </li>
              <li>
                <div
                  style={{
                    marginLeft: "-120px",
                    marginTop: "20px",
                    maxWidth: "40px",
                  }}
                  id={5}
                  onClick={runGame}
                >
                  <StepByStepButton name="5" dataSvg={svgBagThreeStars} />
                </div>
                <div
                  style={{
                    marginLeft: "-100px",
                    marginBottom: "60px",
                    maxWidth: "40px",
                  }}
                  id={6}
                  onClick={runGame}
                >
                  <StepByStepButton name="6" dataSvg={svgKeyThreeStars} />
                </div>
                <div
                  style={{ marginLeft: "-150px", maxWidth: "40px" }}
                  id={7}
                  onClick={runGame}
                >
                  <StepByStepButton name="7" dataSvg={svgQuestionOneStar} />
                </div>
              </li>
              <li>
                <div
                  style={{ marginLeft: "-150px", maxWidth: "40px" }}
                  id={8}
                  onClick={runGame}
                >
                  <StepByStepButton name="8" dataSvg={svgKeyTwoStars} />
                </div>
                <div
                  style={{ marginLeft: "-100px", maxWidth: "40px" }}
                  id={9}
                  onClick={runGame}
                >
                  <StepByStepButton name="9" dataSvg={svgBagOneStar} />
                </div>
                <div
                  style={{ marginLeft: "-130px", maxWidth: "40px" }}
                  id={10}
                  onClick={runGame}
                >
                  <StepByStepButton name="10" dataSvg={svgBagThreeStars} />
                </div>
              </li>

              <li>
                <div
                  style={{ marginLeft: "-100px", maxWidth: "40px" }}
                  id={11}
                  onClick={runGame}
                >
                  <StepByStepButton name="11" dataSvg={svgQuestionThreeStars} />
                </div>
                <div
                  style={{ marginLeft: "10px", maxWidth: "40px" }}
                  id={12}
                  onClick={runGame}
                >
                  <StepByStepButton name="12" dataSvg={svgBagOneStar} />
                </div>
                <div
                  style={{ marginLeft: "-10px", maxWidth: "40px" }}
                  id={13}
                  onClick={runGame}
                >
                  <StepByStepButton name="13" dataSvg={svgQuestionTwoStars} />
                </div>
                <div
                  style={{ marginLeft: "-115px", maxWidth: "40px" }}
                  id={14}
                  onClick={runGame}
                >
                  <StepByStepButton name="14" dataSvg={svgBagTwoStars} />
                </div>
              </li>
              <li>
                <div
                  style={{ marginLeft: "-50px", maxWidth: "40px" }}
                  id={15}
                  onClick={runGame}
                >
                  <StepByStepButton name="15" dataSvg={svgKeyOneStars} />
                </div>
                <div>
                  <StepByStepButton name="16" dataSvg={svgQuestionTwoStars} />
                </div>
                <div
                  style={{ marginLeft: "-100px", maxWidth: "40px" }}
                  id={16}
                  onClick={runGame}
                >
                  <StepByStepButton name="17" dataSvg={svgKeyThreeStars} />
                </div>
              </li>
            </ul>
          </div>
        </>
      );
    }
  };
  return renderContent();
};
