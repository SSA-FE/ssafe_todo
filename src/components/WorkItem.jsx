import "../scss/WorkItem.scss";
import closeIcon from "../icon/close.svg";
import editIcon from "../icon/edit.svg";

const WorkItem = ({
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
        onClick={() => handleMoveBtnClick(id, type, "todos")}
      >
        🐣
      </div>
      <div
        className="moveProgress"
        onClick={() => handleMoveBtnClick(id, type, "progresses")}
      >
        🐥
      </div>
      <div
        className="moveDone"
        onClick={() => handleMoveBtnClick(id, type, "dones")}
      >
        🦅
      </div>

      {work.body ? <div className="workBody">{work.body}</div> : null}
    </div>
  );
};

export default WorkItem;
