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
  const handleCancelBtnClick = () => {
    setIsCreate(false);
  }; 
  
  const handlePlusBtnClick = () => {
    setIsCreate(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextCards = [...cards, { cardId: cardId.current, title: e.target.title.value, body: e.target.body.value}];
    setCards(nextCards);
    
    updateCardId();
    jsonLocalStorage.setItem(type, nextCards);

    const board = boards.find((e)=>e.type===type);
    board.cards=nextCards;
    const nextBoards = boards.filter((e)=>e.type!==type);
    setBoards([...nextBoards,board]);
    console.log(boards);
  };
  
 
  return (
    <div className="board">
      <h2 className="boardTitle">{children}</h2>
 
        {cards.map((card,idx) => (
          <Card
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
      onCancelBtnClick={handleCancelBtnClick}
      handleFormSubmit={handleFormSubmit}
    />)}
    
      <button onClick={handlePlusBtnClick}>+</button>
    </div>
  );
};

export default Board;
