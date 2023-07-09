import React, { useEffect, useState } from "react";
import css from "../../main.module.css";
import { DragAndDropLevels } from "./DragAndDropLevels";

export const DragAndDropGame = ({ textData, goodText }) => {
  const [selectedId, setSelectedId] = useState("");
  const [cardList, setCardList] = useState([
    { id: 1, order: 0, text: textData.wordsOne },
    { id: 2, order: 1, text: textData.wordsTwo },
    { id: 3, order: 2, text: textData.wordsThree },
    { id: 4, order: 3, text: textData.wordsFour },
  ]);
  const [currentCard, setCurrentCard] = useState(null);
  const [firstLeatter, setFirstLeatter] = useState({ order: "", text: "" });
  const [secondLeater, setSecondLeater] = useState({ order: "", text: "" });
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

  const renderContent = () => {
    if (selectedId === "back") {
      return <DragAndDropLevels />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div className={css.containteCard}>
            {cardList.sort(sortCards).map((card) => (
              <div
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragDropHandler(e, card)}
                draggable={true}
                className={css.card}
              >
                {card.text}
              </div>
            ))}
            <div className={css.startBtnContainer}>
              <button onClick={CheckRightWords} className={css.startBtn}>
                Gooooo
              </button>
            </div>
          </div>
        </>
      );
    }
  };

  return renderContent();
};
