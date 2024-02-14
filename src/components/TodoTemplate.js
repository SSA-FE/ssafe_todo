import "../scss/TodoTemplate.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import WorkContainer from "./WorkContainer";
import { useState } from "react";

const TodoTemplate = ({ children }) => {
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
    <div className="TodoTemplate">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <WorkContainer type="todos" handleMoveBtnClick={handleMoveBtnClick}>
          To do 🐣
        </WorkContainer>
        <WorkContainer
          type="progresses"
          handleMoveBtnClick={handleMoveBtnClick}
        >
          In Progress 🐥
        </WorkContainer>
        <WorkContainer type="completes" handleMoveBtnClick={handleMoveBtnClick}>
          Done 🦅
        </WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
