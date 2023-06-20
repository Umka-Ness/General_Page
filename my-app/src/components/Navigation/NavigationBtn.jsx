import React, { useState } from "react";
import { PageOne } from "../Game-page/pageOne";
import { BtnForNavigation } from "./BtnForNavigation";

export const NavigationBtn = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleOnClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelectedId(id);
  };

  return (
    <>
      {selectedId === "1" ? (
        <PageOne />
      ) : (
        <div
          onClick={handleOnClick}
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <BtnForNavigation />
        </div>
      )}
    </>
  );
};
