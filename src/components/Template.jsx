import "../scss/Template.scss";
import Board from "./Board";
import { useRef,useState } from "react";

const Template = () => {
  const cardId = useRef(0);
  const category =[
    {type:"todo", title:"To do 🐣"},
    {type:"inProgress", title:"InProgress 🐥"},
    {type:"done", title:"Done 🦅"}
  ]
  const [boards,setBoards] = useState([
    {type:"todo", cards:[]},
    {type:"inProgress", cards:[]},
    {type:"done", cards:[]}
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
