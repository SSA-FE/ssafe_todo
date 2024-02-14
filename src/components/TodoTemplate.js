import "../scss/TodoTemplate.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import WorkContainer from "./WorkContainer";
import { useState } from "react";

const TodoTemplate = ({ children }) => {
  const [startItems, setStartItems] = useState([]);
  const [endItems, setEndItems] = useState([]);

  const handleMoveBtn = (id, start, end) => {
    setStartItems(jsonLocalStorage.getItem(start));

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
        <WorkContainer type="todos" handleMoveBtn={handleMoveBtn}>
          To do
        </WorkContainer>
        <WorkContainer type="progresses" handleMoveBtn={handleMoveBtn}>
          In Progress
        </WorkContainer>
        <WorkContainer type="completes" handleMoveBtn={handleMoveBtn}>
          Done
        </WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
