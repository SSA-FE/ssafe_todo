import '../scss/WorkItem.scss';
import closeIcon from '../icon/close.svg';
import editIcon from '../icon/edit.svg';

const WorkItem = () => {
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
      <h3 className="workTitle">TabletView</h3>
      <div className="workExplain">태블랫 뷰를 구현해야함.</div>
    </div>
  );
};

export default WorkItem;
