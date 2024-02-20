import Card from "./Card";
import "../scss/Board.scss";
import { useState } from "react";
import NewCardForm from "./NewCardForm";
import EditCardForm from "./EditCardForm";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const Board = ({ children, cardId,updateCardId,type }) => {
  const [createMode, setCreateMode] = useState(false);
  const [cards, setCards] = useState(jsonLocalStorage.getItem(type) || []);
  const [editedCard, setEditedCard] = useState(null);
  const handleCancelBtnClick = () => {
    setCreateMode(false);
  }; 
  
  const handlePlusBtnClick = () => {
    setCreateMode(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextCards = [...cards, { id: cardId.current, title: e.target.title.value, body: e.target.body.value}];
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
    updateCardId();
  };
  
 
  const onUpdate = (_title, _body) => {
    let nextCards = cards.filter(card=>card.id!==editedCard.id);
    nextCards = nextCards.concat({ id: editedCard.id, title: _title, body: _body })
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
    // setCardForm(null);
  };

  const handleCloseBtnClick = (cardId) => {
    const nextCards = cards.filter(card=>card.id !==cardId);
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
  };

  const handleEditBtnClick = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    // setCardForm(<EditCardForm
    //   onCancelBtnClick={handleCancelBtnClick}
    //   editedCard={editedCard}
    //   onUpdate={onUpdate}
    // />);
    setEditedCard(selectedCard);
  };

 
  return (
    <div className="board">
      <h2 className="boardTitle">{children}</h2>
      <div>
        {cards.map((card,idx) => (
          <Card
            key={idx}
            work={card}
            handleCloseBtnClick={handleCloseBtnClick}
            handleEditBtnClick={handleEditBtnClick}
            // handleMoveBtnClick={handleMoveBtnClick}
            type={type}
            cards={cards} 
            setCards={setCards}
          />
        ))}
      </div>
      {createMode&&(<NewCardForm
      onCancelBtnClick={handleCancelBtnClick}
      handleFormSubmit={handleFormSubmit}
    />)}
    
      <button onClick={handlePlusBtnClick}>+</button>
    </div>
  );
};

export default Board;
