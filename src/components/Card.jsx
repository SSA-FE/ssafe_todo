import "../scss/Card.scss";
import "../scss/EditCardForm.scss";
import closeIcon from "../assets/close.svg";
import editIcon from "../assets/edit.svg";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import { useState } from "react";

const Card= ({card,cards,setCards,type,boards,setBoards}) => {
    const [isEdit,setIsEdit] = useState(false);
    const [title, setTitle] = useState(card.title);
    const [body, setBody] = useState(card.body);

    const handleRemoveBtnClick = () => {
      const nextCards = cards.filter(e=>e.cardId !==card.cardId);
      setCards(nextCards);
      jsonLocalStorage.setItem(type, nextCards);

      const board = boards.find((e)=>e.type===type);
      board.cards=nextCards;
      const nextBoards = boards.filter((e)=>e.type!==type);
      setBoards([...nextBoards,board]);
      console.log(boards);
    };

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
      console.log(boards);
    };

    const handleEditBtnClick = () => {
      setIsEdit(true);
    };

    const handleEditCancelBtnClick = () => {
      setIsEdit(false);
    }; 

    const handleMoveBtnClick = (end) => {
      //현재 배열에서 삭제
      const movedCard = cards.find((e)=>e.cardId===card.cardId);
      const nextStartCards = cards.filter(e=>e.cardId !==card.cardId);
      setCards(nextStartCards);
      jsonLocalStorage.setItem(type, nextStartCards);

      //도착 배열에서 이 배열을 추가.
      const endBoard = boards.find((e)=>e.type===end);
      const nextEndCards = [...endBoard.cards,movedCard];
      jsonLocalStorage.setItem(end, nextEndCards);

      //Boards에서 변경
      const nextStartBoard = boards.find((e)=>e.type===type);
      nextStartBoard.cards=nextStartCards;
      const nextEndBoard = boards.find((e)=>e.type===end);
      nextEndBoard.cards=nextEndCards;

      const nextBoards = boards.filter((e)=>e.type!==type && e.type!==end);
      setBoards([...nextBoards,nextStartBoard,nextEndBoard]);
      console.log(boards);
    }

  return <>
  {isEdit?
    <form className="editCardForm" onSubmit={handleEditSubmit}>
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
  </form>
  :
    <div className="card">
      <div className="cardBtns">
      <button onClick={handleEditBtnClick}>
          <img src={editIcon} alt="X"></img>
        </button>
        <button onClick={handleRemoveBtnClick}>
          <img src={closeIcon} alt="X"></img>
        </button>
      </div>
      <h3 className="cardTitle">{card.title}</h3>
      <div
        className="moveTodo"
        onClick={() => handleMoveBtnClick("todo")}
      >
        🐣
      </div>
      <div
        className="moveProgress"
        onClick={() => handleMoveBtnClick("inProgress")}
      >
        🐥
      </div>
      <div
        className="moveDone"
        onClick={() => handleMoveBtnClick("done")}
      >
        🦅
      </div>

      {card.body ? <div className="cardBody">{card.body}</div> : null}
    </div>}
    </>
};

export default Card;
