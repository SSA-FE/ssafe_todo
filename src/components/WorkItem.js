import "../scss/WorkItem.scss";
import closeIcon from "../icon/close.svg";
import editIcon from "../icon/edit.svg";

const WorkItem = ({
  work,
  handleCloseBtnClick,
  handleEditBtnClick,
  handleMoveBtn,
  type,
}) => {
  const id = work.id;
  return (
    <div className="WorkItem">
      <div className="workBtns">
        <button onClick={() => handleCloseBtnClick(id)}>
          <img src={closeIcon}></img>
        </button>
        <button onClick={() => handleEditBtnClick(id)}>
          <img src={editIcon}></img>
        </button>
      </div>
      <h3 className="workTitle">{work.title}</h3>
      <div
        className="moveTodo"
        onClick={() => handleMoveBtn(id, type, "todos")}
      >
        🐣
      </div>
      <div
        className="moveProgress"
        onClick={() => handleMoveBtn(id, type, "progresses")}
      >
        🐥
      </div>
      <div
        className="moveDone"
        onClick={() => handleMoveBtn(id, type, "completes")}
      >
        🦅
      </div>

      {work.body ? <div className="workBody">{work.body}</div> : null}
    </div>
  );
};

export default WorkItem;
