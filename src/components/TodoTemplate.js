import '../scss/TodoTemplate.scss';
import WorkContainer from './WorkContainer';
const todos = [{ id: 1, title: 'React Study', body: '리액트 공부를 해야해' }];
const progresses = [{ id: 1, title: 'ViewJs Study', body: '뷰 공부를 해야해' }];
const completes = [
  { id: 1, title: 'Angular Study', body: '앵귤러 공부를 해야해' },
];

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <WorkContainer works={todos}>To do</WorkContainer>
        <WorkContainer works={progresses}>In Progress</WorkContainer>
        <WorkContainer works={completes}>Done</WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
