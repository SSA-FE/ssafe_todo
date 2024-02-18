import "../scss/Template.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import Board from "./Board";
import { useState } from "react";

const Template = ({ children }) => {
  const [startItems, setStartItems] = useState([]);
  const [endItems, setEndItems] = useState([]);
  const boards = [
    {title:"To do 🐣",type:"toDo"},
    {title:"In Progress 🐥",type:"inProgress"},
    {title:"Done 🦅",type:"done"},
  ];

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
        {boards.map(board=><Board type={board.type} handleMoveBtnClick={handleMoveBtnClick}>{board.title}</Board>)}
      </div>
    </div>
  );
};

export default Template;
