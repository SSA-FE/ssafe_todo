import "../scss/WorkItem.scss";
import closeIcon from "../icon/close.svg";
import editIcon from "../icon/edit.svg";

const WorkItem = ({
  work,
  handleCloseBtnClick,
  handleEditBtnClick,
  handleMoveTodoBtn,
}) => {
  const id = work.id;
  console.log("workItem 에서 받은 id: ", id);
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
      <div className="moveTodo" onClick={() => handleMoveTodoBtn(id)}>
        🐣
      </div>
      <div className="moveProgress">🐥</div>
      <div className="moveDone">🦅</div>

      {work.body ? <div className="workBody">{work.body}</div> : null}
    </div>
  );
};

export default WorkItem;
