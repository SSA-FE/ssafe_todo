import "../scss/Template.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import Board from "./Board";
import { useState } from "react";

const Template = ({ children }) => {
  const [startItems, setStartItems] = useState([]);
  const [endItems, setEndItems] = useState([]);

  const handleMoveBtnClick = (id, start, end) => {
    setStartItems(jsonLocalStorage.getItem(start));
    setEndItems(jsonLocalStorage.getItem(end));

    const movedItem = jsonLocalStorage
      .getItem(start)
      .find((item) => item.id === id);

    const newEndItems = [...endItems, movedItem];
    setEndItems(newEndItems);
    jsonLocalStorage.setItem(end, newEndItems);

    const newStartItems = startItems.filter((item) => item.id !== id);
    setStartItems(newStartItems);
    jsonLocalStorage.setItem(start, newStartItems);
  };

  return (
    <div className="template">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <Board type="todos" handleMoveBtnClick={handleMoveBtnClick}>
          To do 🐣
        </Board>
        <Board
          type="progresses"
          handleMoveBtnClick={handleMoveBtnClick}
        >
          In Progress 🐥
        </Board>
        <Board type="completes" handleMoveBtnClick={handleMoveBtnClick}>
          Done 🦅
        </Board>
      </div>
    </div>
  );
};

export default Template;
