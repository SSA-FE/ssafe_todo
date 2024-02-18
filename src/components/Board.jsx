import Card from "./Card";
import "../scss/Board.scss";
import { useState } from "react";
import NewCardForm from "./NewCardForm";
import EditCardForm from "./EditCardForm";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const Board = ({ children, type, handleMoveBtnClick }) => {
  const [cardForm, setCardForm] = useState("");
  const [cards, setCards] = useState(jsonLocalStorage.getItem(type) || []);
  const [id, setId] = useState(0);
  const [editedCard, setEditedCard] = useState(null);

  const handlePlusBtnClick = () => {
    setCardForm(<NewCardForm
      onCancelBtnClick={handleCancelBtnClick}
      onSubmit={handleFormSubmit}
    />);
  };

  const handleCancelBtnClick = () => {
    setCardForm(null);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const _title = e.target.title.value;
    const _body = e.target.body.value;
    const newCard = { id: id, title: _title, body: _body };
    const nextCards = [...cards, newCard];

    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
    setId(id + 1);
  };

  const onUpdate = (_title, _body) => {
    let nextCards = cards.filter(card=>card.id!==editedCard.id);
    nextCards = nextCards.concat({ id: editedCard.id, title: _title, body: _body })
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
    setCardForm(null);
  };

  const handleCloseBtnClick = (cardId) => {
    const nextCards = cards.filter(card=>card.id !==cardId);
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
  };

  const handleEditBtnClick = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    setCardForm(<EditCardForm
      onCancelBtnClick={handleCancelBtnClick}
      editedCard={editedCard}
      onUpdate={onUpdate}
    />);
    setEditedCard(selectedCard);
  };


  return (
    <div className="board">
      <h2 className="boardTitle">{children}</h2>
      <div>
        {cards.map((card) => (
          <Card
            id={card.id}
            work={card}
            handleCloseBtnClick={handleCloseBtnClick}
            handleEditBtnClick={handleEditBtnClick}
            handleMoveBtnClick={handleMoveBtnClick}
            type={type}
          ></Card>
        ))}
      </div>
      {cardForm}
      <button onClick={handlePlusBtnClick}>+</button>
    </div>
  );
};

export default Board;
