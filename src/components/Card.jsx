import "../scss/Card.scss";
import closeIcon from "../assets/close.svg";
import editIcon from "../assets/edit.svg";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const Card= ({card,cards,setCards,type,}) => {

    const handleCloseBtnClick = () => {
      const nextCards = cards.filter(e=>e.cardId !==card.cardId);
      setCards(nextCards);
      jsonLocalStorage.setItem(type, nextCards);
    };

    // const handleEditBtnClick = () => {
    //   const selectedCard = cards.find(e=>e.cardId ===card.cardId);
    //   setEditedCard(selectedCard);
    // };

  return (
    <div className="card">
      <div className="cardBtns">
      {/* <button onClick={handleEditBtnClick}> */}
      <button>
          <img src={editIcon} alt="X"></img>
        </button>
        <button onClick={handleCloseBtnClick}>
          <img src={closeIcon} alt="X"></img>
        </button>
      </div>
      <h3 className="cardTitle">{card.title}</h3>
      <div
        className="moveTodo"
        // onClick={() => handleMoveBtnClick(id, type, "toDo")}
      >
        🐣
      </div>
      <div
        className="moveProgress"
        // onClick={() => handleMoveBtnClick(id, type, "inProgress")}
      >
        🐥
      </div>
      <div
        className="moveDone"
        // onClick={() => handleMoveBtnClick(id, type, "done")}
      >
        🦅
      </div>

      {card.body ? <div className="cardBody">{card.body}</div> : null}
    </div>
  );
};

export default Card;
