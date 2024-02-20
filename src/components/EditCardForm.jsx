import { useState } from "react";
import "../scss/EditCardForm.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const EditCardForm = ({card,cards,setCards,type,boards,setBoards, setIsEdit}) => {
  const [title, setTitle] = useState(card.title);
  const [body, setBody] = useState(card.body);
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    let nextCards = cards.filter(e=>e.cardId !==card.cardId);
    nextCards = nextCards.concat({ cardId: card.cardId, title: title, body: body })
    setCards(nextCards);
    jsonLocalStorage.setItem(type, nextCards);
    setIsEdit(false);

    const board = boards.find((e)=>e.type===type);
    board.cards=nextCards;
    const nextBoards = boards.filter((e)=>e.type!==type);
    setBoards([...nextBoards,board]);
  };

  const handleEditCancelBtnClick = () => {
    setIsEdit(false);
  }; 

  return  <form className="editCardForm" onSubmit={handleEditSubmit}>
  <div className="colors">
  </div>
  <input
    className="editInputTitle"
    placeholder="해야할 일을 입력하세요."
    name="title"
    value={title}
    onChange={(e) => {
      setTitle(e.target.value);
    }}
  />
  <textarea
    className="editInputBody"
    placeholder="자세히 입력해주세요."
    name="body"
    value={body}
    onChange={(e) => {
      setBody(e.target.value);
    }}
  />
  <button type="submit" >수정완료</button>
  <button onClick={handleEditCancelBtnClick}>취소</button>
</form>}
 
export default EditCardForm;
