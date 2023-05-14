import React, { useState } from "react";
import { PageOne } from "./pageOne";
import btnList from "./BtnForLearning.json";
import css from "./GamePage.module.css";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleOnClick = (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    setSelectedId(id);
  };

  return (
    <>
      {selectedId === "1" ? (
        <PageOne />
      ) : (
        btnList.map((i) => (
          <button
            className={css.NavigationBtn}
            key={i.id}
            onClick={handleOnClick}
            data-id={i.id}
          >
            {i.name}
          </button>
        ))
      )}
    </>
  );
};
