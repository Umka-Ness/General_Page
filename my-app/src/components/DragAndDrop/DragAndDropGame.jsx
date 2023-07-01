import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import css from "../../main.module.css";
import { PageOne } from "../Game-page/pageOne";
import { useDrag, useDrop } from "react-dnd";

export const DragAndDropGame = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [cardList, setCardList] = useState([
    { id: 1, order: 0, text: "a" },
    { id: 2, order: 1, text: "d" },
    { id: 3, order: 2, text: "n" },
    { id: 4, order: 3, text: "m" },
  ]);
  const [currentCard, setCurrentCard] = useState(null);
  const [firstLeatter, setFirstLeatter] = useState({ order: "", text: "" });
  const [secondLeater, setSecondLeater] = useState({ order: "", text: "" });
  const [wordsCard, setWordsCard] = useState(["d", "a", "m", "n"]);

  useEffect(() => {
    console.log(
      "text 1",
      firstLeatter,
      "text 2",
      secondLeater,
      "list",
      wordsCard,
      cardList
    );
  }, [firstLeatter, secondLeater, wordsCard, cardList]);
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
    e.target.style.background = "inherit";
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

    const updatedWordsCard = updatedCardList
      .sort((a, b) => a.order - b.order)
      .map((item) => item.text);

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
      return <PageOne />;
    } else {
      return (
        <>
          <button className={css.BackBtn} onClick={handleOnClick} id="back">
            Back
          </button>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "space-around",

              alignItems: "center",
            }}
          >
            {cardList.sort(sortCards).map((card) => (
              <div
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragDropHandler(e, card)}
                draggable={true}
                style={{
                  width: "150px",
                  height: "300px",
                  border: "3px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {card.text}
              </div>
            ))}
            <button onClick={CheckRightWords}>Gooooo</button>
          </div>
        </>
      );
    }
  };

  return <DndProvider backend={HTML5Backend}>{renderContent()}</DndProvider>;
};
