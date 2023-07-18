import React from "react";
import css from "../../main.module.css";

export const StepByStepModal = () => {
  const closeModal = (e) => {};
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "11",
        }}
      >
        <div className={css.modalContainer}>
          <div>
            <div>Modal</div>
            <div>Text</div>
          </div>
          <div>
            <button className={css.closeBtn} onClick={closeModal}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
