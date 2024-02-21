import "../scss/Template.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import Board from "./Board";
import { useEffect, useRef,useState } from "react";
import moon from "../assets/moon.svg.svg";
import sun from "../assets/sun.svg.svg";

const Template = () => {
  const cardId = useRef(jsonLocalStorage.getItem("cardId")||0);
  const [isDarkMode,setIsDarkMode] = useState(false);
  const [icon, setIcon] = useState(moon);

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

  const handleDarkModeBtn = () =>{
    setIsDarkMode(!isDarkMode);
  }
  useEffect(()=>{
    if(isDarkMode) setIcon(sun);
    else setIcon(moon);
  },[isDarkMode])

  return (
    <div className={`template ${isDarkMode ? 'darkMode' : ''}`}>
      <header>
        <h1 className="title">RoadMap</h1>
        <button onClick={handleDarkModeBtn}><img src={icon}></img></button>
      </header>
      <div className="content">
        {category.map((e,idx)=><Board key={idx} type={e.type} cardId={cardId} updateCardId={updateCardId} boards={boards} setBoards={setBoards}>{e.title}</Board>)}
      </div>
    </div>
  );
};

export default Template;
