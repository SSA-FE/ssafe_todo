import "../scss/Card.scss";
import closeIcon from "../assets/close.svg";
import editIcon from "../assets/edit.svg";

const Card= ({
  work,
  handleCloseBtnClick,
  handleEditBtnClick,
  handleMoveBtnClick,
  type,
  // handleLocalStorageChange,
}) => {
  const id = work.id;
  // const handleBtn = (id, type, str) => {
  //   handleLocalStorageChange();
  //   handleMoveBtnClick(id, type, str);
  // };

  return (
    <div className="card">
      <div className="cardBtns">
      <button onClick={() => handleEditBtnClick(id)}>
          <img src={editIcon} alt="X"></img>
        </button>
        <button onClick={() => handleCloseBtnClick(id)}>
          <img src={closeIcon} alt="X"></img>
        </button>
      </div>
      <h3 className="cardTitle">{work.title}</h3>
      <div
        className="moveTodo"
        onClick={() => handleMoveBtnClick(id, type, "toDo")}
      >
        🐣
      </div>
      <div
        className="moveProgress"
        onClick={() => handleMoveBtnClick(id, type, "inProgress")}
      >
        🐥
      </div>
      <div
        className="moveDone"
        onClick={() => handleMoveBtnClick(id, type, "done")}
      >
        🦅
      </div>

      {work.body ? <div className="cardBody">{work.body}</div> : null}
    </div>
  );
};

export default Card;
