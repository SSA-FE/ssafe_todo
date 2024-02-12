import '../scss/WorkItem.scss';
import closeIcon from '../icon/close.svg';
import editIcon from '../icon/edit.svg';

const WorkItem = ({ work }) => {
  return (
    <div className="WorkItem">
      <div className="workBtns">
        <button>
          <img src={closeIcon}></img>
        </button>
        <button>
          <img src={editIcon}></img>
        </button>
      </div>
      <h3 className="workTitle">{work.title}</h3>
      {work.body ? <div className="workBody">{work.body}</div> : null}
    </div>
  );
};

export default WorkItem;
