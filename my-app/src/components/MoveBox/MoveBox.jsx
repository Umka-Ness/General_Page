import React, { useState, useRef, useEffect } from "react";

export function MoveBox() {
  const boxRef = useRef(null);
  const inputRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
  };
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [targetId, setTargetId] = useState(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const boxRect = boxRef.current.getBoundingClientRect();
    const offsetX = event.clientX - boxRect.left;
    const offsetY = event.clientY - boxRect.top;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    checkTargetId();
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const x = event.clientX - offset.x;
      const y = event.clientY - offset.y;
      setPosition({ x, y });
    }
  };

  const checkTargetId = () => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    const boxRect = boxElement.getBoundingClientRect();
    const targetId = findTargetId(boxRect);
    setTargetId(targetId);
    if (targetId) {
      const inputElement = inputRefs[targetId].current;
      if (inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        const inputCenterX = (inputRect.left + inputRect.right) / 2;
        const inputCenterY = (inputRect.top + inputRect.bottom) / 2;
        const boxWidth = boxRect.width;
        const boxHeight = boxRect.height;
        const boxX = inputCenterX - boxWidth / 2;
        const boxY = inputCenterY - boxHeight / 2;
        setPosition({ x: boxX, y: boxY });
      }
    }
  };

  const findTargetId = (boxRect) => {
    for (const id in inputRefs) {
      const inputElement = inputRefs[id].current;
      if (!inputElement) continue;

      const inputRect = inputElement.getBoundingClientRect();
      if (
        boxRect.left > inputRect.left &&
        boxRect.right < inputRect.right &&
        boxRect.top > inputRect.top &&
        boxRect.bottom < inputRect.bottom
      ) {
        return id;
      }
    }
    return null;
  };

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      if (isDragging) {
        handleMouseMove(event);
      }
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
      checkTargetId();
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  const handleCheck = () => {
    if (targetId === "2") {
      console.log(`Квадратик вставлен в поле ${targetId}. Он станет зеленым!`);
    } else {
      console.log(
        "Квадратик вставлен не в поле. Он мигнет серым и останется красным!"
      );
    }
  };

  return (
    <>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: isDragging ? "blue" : "red",
          position: "absolute",
          left: position.x + "px",
          top: position.y + "px",
          cursor: "move",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <input
        type="text"
        disabled="true"
        style={{ height: "150px", marginRight: "20px" }}
        ref={inputRefs["1"]}
        id="1"
      />
      <input
        type="text"
        disabled="true"
        style={{ height: "150px", marginRight: "20px" }}
        ref={inputRefs["2"]}
        id="2"
      />
      <input
        type="text"
        disabled="true"
        style={{ height: "150px", marginRight: "20px" }}
        ref={inputRefs["3"]}
        id="3"
      />
      <input
        type="text"
        disabled="true"
        style={{ height: "150px", marginRight: "20px" }}
        ref={inputRefs["4"]}
        id="4"
      />
      <input
        type="text"
        disabled="true"
        style={{ height: "150px" }}
        ref={inputRefs["5"]}
        id="5"
      />
      <button onClick={handleCheck}>Проверить</button>
    </>
  );
}
