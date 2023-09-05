import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { DragAndDropLevels } from "./DragAndDropLevels";
import { DragAndDrop } from "./DragAndDrop";
import wood_bg from "./img/wood_bg.png";

export const DragAndDropGame = ({
  textData,
  goodText,
  image,
  imageWidthImage,
}) => {
  const [selectedId, setSelectedId] = useState("");
  const [cardList, setCardList] = useState([
    { id: 1, order: 0, text: textData.wordsOne },
    { id: 2, order: 1, text: textData.wordsTwo },
    { id: 3, order: 2, text: textData.wordsThree },
    { id: 4, order: 3, text: textData.wordsFour },
    { id: 5, order: 4, text: textData.wordsFive ? textData.wordsFive : "" },
    { id: 6, order: 5, text: textData.wordSix ? textData.wordSix : "" },
    { id: 7, order: 6, text: textData.wordSeven ? textData.wordSeven : "" },
    { id: 8, order: 7, text: textData.wordEight ? textData.wordEight : "" },
    { id: 9, order: 8, text: textData.wordNine ? textData.wordNine : "" },
    { id: 10, order: 9, text: textData.wordTen ? textData.wordTen : "" },
    { id: 11, order: 10, text: textData.wordEleven ? textData.wordEleven : "" },
    { id: 12, order: 11, text: textData.wordTwelve ? textData.wordTwelve : "" },
  ]);
  const [currentCard, setCurrentCard] = useState(null);
  const [firstLeatter, setFirstLeatter] = useState({ order: "", text: "" });
  const [secondLeater, setSecondLeater] = useState({ order: "", text: "" });
  const [currentValue, setCurrentValue] = useState(0);

  const wordsCard = goodText;

  useEffect(() => {
    console.log(
      "text 1",
      firstLeatter,
      "text 2",
      secondLeater,
      "list",
      cardList
    );
  }, [firstLeatter, secondLeater, cardList]);
  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };
  const dragStartHandler = (e, card) => {
    setFirstLeatter({ ...firstLeatter, text: card.text, order: card.order });
    console.log("card", card);
    setCurrentCard(card);
  };
  const dragLeaveHandler = (e) => {
    e.target.style.background = "white";
  };
  const dragEndHandler = (e) => {};
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "#808080";
  };
  const dragDropHandler = (e, card) => {
    e.preventDefault();
    console.log("card", card);

    const updatedCardList = cardList.map((item) => {
      if (item.id === card.id) {
        return { ...item, order: currentCard.order };
      }
      if (item.id === currentCard.id) {
        return { ...item, order: card.order };
      }
      return item;
    });

    updatedCardList.sort((a, b) => a.order - b.order).map((item) => item.text);

    setCardList(updatedCardList);
    // setWordsCard(updatedWordsCard);

    setSecondLeater({ ...secondLeater, text: card.text, order: card.order });
    e.target.style.background = "white";
  };

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  const CheckRightWords = () => {
    const joinedString = cardList
      .sort((a, b) => a.order - b.order)
      .reduce((acc, card) => acc + card.text, "");

    if (joinedString === wordsCard.join("")) {
      console.log("Good");
    } else {
      console.log("Incorrect");
      console.log(joinedString);
      console.log(wordsCard.join(""));
    }
  };

  const jobChange = (action) => {
    const localValue = JSON.parse(localStorage.getItem("currentValue")) || 1;
    if (action === "front") {
      if (localValue >= 15) {
        return;
      } else {
        const updatedValue = localValue + 1;
        localStorage.setItem("currentValue", JSON.stringify(updatedValue));
        setCurrentValue(updatedValue);
      }
    } else if (action === "back" && localValue > 1) {
      const updatedValue = localValue - 1;
      localStorage.setItem("currentValue", JSON.stringify(updatedValue));
      setCurrentValue(updatedValue);
    }
  };
  const defaultWidth = "227px";
  const imageWidth = imageWidthImage || defaultWidth;

  const renderContent = () => {
    if (selectedId === "back") {
      return <DragAndDrop />;
    } else if (currentValue === 1) {
      return <DragAndDropLevels />;
    } else if (currentValue === 2) {
      return <DragAndDropLevels />;
    } else if (currentValue === 3) {
      return <DragAndDropLevels />;
    } else if (currentValue === 4) {
      return <DragAndDropLevels />;
    } else if (currentValue === 5) {
      return <DragAndDropLevels />;
    } else if (currentValue === 6) {
      return <DragAndDropLevels />;
    } else if (currentValue === 7) {
      return <DragAndDropLevels />;
    } else if (currentValue === 8) {
      return <DragAndDropLevels />;
    } else if (currentValue === 9) {
      return <DragAndDropLevels />;
    } else if (currentValue === 10) {
      return <DragAndDropLevels />;
    } else if (currentValue === 11) {
      return <DragAndDropLevels />;
    } else if (currentValue === 12) {
      return <DragAndDropLevels />;
    } else if (currentValue === 13) {
      return <DragAndDropLevels />;
    } else if (currentValue === 14) {
      return <DragAndDropLevels />;
    } else if (currentValue === 15) {
      return <DragAndDropLevels />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>

          <div
            className={css.containteCard}
            style={{ backgroundImage: `url(${wood_bg})` }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // width: "inherit",
              }}
            >
              <div>
                <img
                  src={image}
                  alt="lalala"
                  style={{
                    // paddingBottom: "40px",
                    // position: "absolute",
                    // top: "30%",
                    // left: "40vw",
                    width: imageWidth,
                    height: "234px",
                    border: "2px solid black",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "inherit",
                  justifyContent: "center",
                }}
              >
                {cardList.sort(sortCards).map((card) => {
                  if (card.text === "") {
                    console.log(card);
                    return null;
                  } else {
                    return (
                      <div
                        onDragStart={(e) => dragStartHandler(e, card)}
                        onDragLeave={(e) => dragLeaveHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dragDropHandler(e, card)}
                        draggable={true}
                        onTouchStart={(e) => dragStartHandler(e, card)}
                        onTouchEnd={(e) => dragEndHandler(e)}
                        className={css.card}
                      >
                        {card.text}
                      </div>
                    );
                  }
                })}

                <div className={css.startBtnContainer}>
                  <button onClick={CheckRightWords} className={css.startBtn}>
                    Gooooo
                  </button>
                </div>
                <div className={css.currentPage}>
                  <button
                    onClick={() => jobChange("back")}
                    id="back"
                    style={{ width: "50px", height: "50px" }}
                  >
                    back
                  </button>
                  <div>{localStorage.getItem("currentValue")} / 15</div>
                  <button
                    onClick={() => jobChange("front")}
                    id="front"
                    style={{ width: "50px", height: "50px" }}
                  >
                    front
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return renderContent();
};
