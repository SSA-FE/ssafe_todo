import '../scss/TodoTemplate.scss';
import jsonLocalStorage from '../utils/jsonLocalStorage';
import WorkContainer from './WorkContainer';
import { useState } from 'react';

const todos = [{ id: 1, title: 'React Study', body: '리액트 공부를 해야해' }];
const progresses = [{ id: 1, title: 'ViewJs Study', body: '뷰 공부를 해야해' }];
const completes = [
  { id: 1, title: 'Angular Study', body: '앵귤러 공부를 해야해' },
];

const TodoTemplate = ({ children }) => {
  const [todos, setTodos] = useState(jsonLocalStorage.getItem('todos') || []);
  const [progresses, setProgresses] = useState(
    jsonLocalStorage.getItem('inprogresses') || [],
  );
  const [completes, setCompletes] = useState(
    jsonLocalStorage.getItem('completes') || [],
  );

  return (
    <div className="TodoTemplate">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <WorkContainer type="todos">To do</WorkContainer>
        <WorkContainer type="progresses">In Progress</WorkContainer>
        <WorkContainer type="completes">Done</WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
