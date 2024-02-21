import "../scss/Card.scss";
import "../scss/EditCardForm.scss";
import closeIcon from "../assets/close.svg";
import editIcon from "../assets/edit.svg";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import { useState } from "react";
import EditCardForm from "./EditCardForm";

const Card= ({card,cards,setCards,type,boards,setBoards}) => {
    const [isEdit,setIsEdit] = useState(false);

    const handleRemoveBtnClick = () => {
      const nextCards = cards.filter(e=>e.cardId !==card.cardId);
      setCards(nextCards);
      jsonLocalStorage.setItem(type, nextCards);

      const board = boards.find((e)=>e.type===type);
      board.cards=nextCards;
      const nextBoards = boards.filter((e)=>e.type!==type);
      setBoards([...nextBoards,board]);
    };

    const handleEditBtnClick = () => {
      setIsEdit(true);
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
    }

  return <>
  {isEdit?
   <EditCardForm card={card} cards={cards} setCards={setCards} type={type} boards={boards} setBoards={setBoards} setIsEdit={setIsEdit} />
  :
    <div className="card" style={{backgroundColor:card.color}}>
      <div className="cardBtns">
      <button onClick={handleEditBtnClick}>
          <img src={editIcon} alt="X"></img>
        </button>
        <button onClick={handleRemoveBtnClick}>
          <img src={closeIcon} alt="X"></img>
        </button>
      </div>
      <h3 className="cardTitle">{card.title}</h3>
      {/* 맵처리 가능할 듯 */}
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
