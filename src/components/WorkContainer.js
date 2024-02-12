import WorkItem from './WorkItem';
import '../scss/WorkContainer.scss';

const WorkContainer = ({ children }) => {
  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <div className="containerContent">
        <WorkItem></WorkItem>
        <WorkItem></WorkItem>
      </div>
    </div>
  );
};

export default WorkContainer;
