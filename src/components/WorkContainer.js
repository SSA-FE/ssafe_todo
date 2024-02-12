import WorkItem from './WorkItem';
import '../scss/WorkContainer.scss';

const WorkContainer = ({ children }) => {
  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <WorkItem></WorkItem>
      <WorkItem></WorkItem>
    </div>
  );
};

export default WorkContainer;
