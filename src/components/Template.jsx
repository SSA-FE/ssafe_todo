import "../scss/Template.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import Board from "./Board";
import { useRef,useState } from "react";

const Template = () => {
  const cardId = useRef(jsonLocalStorage.getItem("cardId")||0);
  const category =[
    {type:"todo", title:"To do 🐣"},
    {type:"inProgress", title:"InProgress 🐥"},
    {type:"done", title:"Done 🦅"}
  ]
  const [boards,setBoards] = useState([
    {type:"todo", cards:jsonLocalStorage.getItem("todo")||[]},
    {type:"inProgress", cards:jsonLocalStorage.getItem("inProgress")||[]},
    {type:"done", cards:jsonLocalStorage.getItem("done")||[]}
  ]);

  const updateCardId = () => {
    cardId.current++;
  }

  return (
    <div className="template">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        {category.map((e,idx)=><Board key={idx} type={e.type} cardId={cardId} updateCardId={updateCardId} boards={boards} setBoards={setBoards}>{e.title}</Board>)}
      </div>
    </div>
  );
};

export default Template;
