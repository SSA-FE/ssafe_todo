import Card from "./Card";
import "../scss/Board.scss";
import { useState } from "react";
import NewCardForm from "./NewCardForm";
import EditCardForm from "./EditCardForm";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const Board = ({ children, type, handleMoveBtnClick }) => {
  const [mode, setMode] = useState("");
  const [cards, setCards] = useState(jsonLocalStorage.getItem(type) || []);
  const [id, setId] = useState(0);
  const [editedCard, setEditedCard] = useState(null);
  let cardForm = null;

  const handleLocalStorageChange = () => {
    setCards(jsonLocalStorage.getItem(type) || []);
  };

  const handlePlusBtnClick = () => {
    return setMode("create");
  };

  const handleCancelBtnClick = () => {
    return setMode("read");
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
    const newCards = [];
    for (let card of cards) {
      if (card.id !== editedCard.id) newCards.push(card);
    }
    const newCard = { id: editedCard.id, title: _title, body: _body };
    newCards.push(newCard);

    setCards(newCards);
    jsonLocalStorage.setItem(type, newCards);
    setMode("read");
  };
  const handleCloseBtnClick = (cardId) => {
    let newtCards = [];
    for (let card of cards) {
      if (card.id !== cardId) newtCards.push(card);
    }
    jsonLocalStorage.setItem(type, newtCards);
    setCards(newtCards);
  };
  const handleEditBtnClick = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    setMode("edit");
    setEditedCard(selectedCard);
  };

  if (mode === "create") {
    cardForm = (
      <NewCardForm
        onCancelBtnClick={handleCancelBtnClick}
        onSubmit={handleFormSubmit}
      />
    );
  }
  if (mode === "edit") {
    cardForm = (
      <EditCardForm
        onCancelBtnClick={handleCancelBtnClick}
        editedCard={editedCard}
        onUpdate={onUpdate}
      />
    );
  }

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
            handleLocalStorageChange={handleLocalStorageChange}
          ></Card>
        ))}
      </div>
      {cardForm}
      <button onClick={handlePlusBtnClick}>+</button>
    </div>
  );
};

export default Board;
