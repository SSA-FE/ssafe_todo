import "../scss/TodoTemplate.scss";
import jsonLocalStorage from "../utils/jsonLocalStorage";
import WorkContainer from "./WorkContainer";
import { useState } from "react";

const TodoTemplate = ({ children }) => {
  const [todos, setTodos] = useState(jsonLocalStorage.getItem("todos") || []);
  const [progresses, setProgresses] = useState(
    jsonLocalStorage.getItem("inprogresses") || []
  );
  const [completes, setCompletes] = useState(
    jsonLocalStorage.getItem("completes") || []
  );
  const [movedItem, setMovedItem] = useState(null);
  const handleMoveTodoBtn = (id) => {
    //얘가 여기 있어도 되나? 이걸로 기능 구현은 될 것 같은데, 좀 어색하네. 여기서부터 workItem으로 내려가는게 좀 불합리해보인다.
    setCompletes(jsonLocalStorage.getItem("completes"));
    console.log(completes);
    setMovedItem(completes.find((item) => item.id === id));
    const nextItems = [...todos, movedItem];
    console.log(movedItem);
    setTodos(nextItems);
    jsonLocalStorage.setItem("todos", nextItems);
  };
  return (
    <div className="TodoTemplate">
      <h1 className="title">RoadMap</h1>
      <div className="content">
        <WorkContainer type="todos" handleMoveTodoBtn={handleMoveTodoBtn}>
          To do
        </WorkContainer>
        <WorkContainer type="progresses" handleMoveTodoBtn={handleMoveTodoBtn}>
          In Progress
        </WorkContainer>
        <WorkContainer type="completes" handleMoveTodoBtn={handleMoveTodoBtn}>
          Done
        </WorkContainer>
      </div>
    </div>
  );
};

export default TodoTemplate;
