import Card from "./Card";
import "../scss/Board.scss";
import { useState,useEffect } from "react";
import NewCardForm from "./NewCardForm";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const Board = ({ children, cardId,updateCardId,type,boards,setBoards }) => {
  const [isCreate, setIsCreate] = useState(false);
  const [cards, setCards] = useState(jsonLocalStorage.getItem(type) || []);

  useEffect(()=>{
    setCards(jsonLocalStorage.getItem(type)||[]);
  },[boards])

  
  const handlePlusBtnClick = () => {
    setIsCreate(true);
  };

  return (
    <div className="board">
      <h2 className="boardTitle">{children}</h2>
        {cards.map((card,idx) => (
          <Card
            setIsCreate={setIsCreate}
            key={idx}
            card={card}
            type={type}
            cards={cards} 
            setCards={setCards}
            boards ={boards}
            setBoards = {setBoards}
          />
        ))}

      {isCreate&&(<NewCardForm
      setIsCreate={setIsCreate}
      cardId = {cardId}
      updateCardId = {updateCardId}
      type = {type}
      boards = {boards}
      cards ={cards}
      setCards={setCards}
      setBoards ={setBoards}
    />)}
     <button className="plusBtn" onClick={handlePlusBtnClick}>+</button>
    </div>
   
  );
};

export default Board;
