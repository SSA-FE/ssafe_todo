import WorkItem from './WorkItem';
import '../scss/WorkContainer.scss';

const WorkContainer = ({ children, works }) => {
  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <div className="containerContent">
        {works.map((work) => (
          <WorkItem work={work}></WorkItem>
        ))}
      </div>
      <button>+</button>
    </div>
  );
};

export default WorkContainer;
