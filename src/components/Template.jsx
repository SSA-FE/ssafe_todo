import "../scss/Template.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import Board from "./Board";
import { useRef } from "react";

const Template = () => {
  const cardId = useRef(0);
  const boards = [
    {title:"To do 🐣",type:"toDo"},
    {title:"In Progress 🐥",type:"inProgress"},
    {title:"Done 🦅",type:"done"},
  ];

  const updateCardId = () => {
    cardId.current++;
  }



  return (
    <div className="template">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        {boards.map((board,idx)=><Board key={idx} type={board.type} cardId={cardId} updateCardId={updateCardId}>{board.title}</Board>)}
      </div>
    </div>
  );
};

export default Template;
