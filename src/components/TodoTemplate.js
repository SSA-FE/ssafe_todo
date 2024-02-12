import '../scss/TodoTemplate.scss';
import WorkContainer from './WorkContainer';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <WorkContainer>To do</WorkContainer>
        <WorkContainer>In Progress</WorkContainer>
        <WorkContainer>Done</WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
