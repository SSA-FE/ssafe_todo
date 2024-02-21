import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoDone, setDone] = useState([]);
  const [todoProgress, setProgress] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  }, [todos]);
  useEffect(() => {
    const savedDone = JSON.parse(localStorage.getItem('todoDone')) || [];
  }, [todoDone]);
  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('todoProgress')) || [];    
  }, [todoProgress]);
  const addTodo = () => {
    const newTodo = { id: uuidv4(), title: '', content: '', isEdit: true, color: 'red' };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const addDone = () => {
    const newDone = { id: uuidv4(), title: '', content: '', isEdit: true, color: 'red' };
    const updatedDone = [...todoDone, newDone];
    localStorage.setItem('todoDone', JSON.stringify(updatedDone));
    setDone(updatedDone);
  };
  const addProgress = () => {
    const newProgress = { id: uuidv4(), title: '', content: '', isEdit: true, color: 'red' };
    const updatedProgress = [...todoProgress, newProgress];
    localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const removeDone = (index) => {
    const updatedTodos = [...todoDone];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todoDone', JSON.stringify(updatedTodos));
    setDone(updatedTodos);
  };
  const removeProgress = (index) => {
    const updatedTodos = [...todoProgress];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todoProgress', JSON.stringify(updatedTodos));
    setProgress(updatedTodos);
  };

  const updateTodo = (index, updatedTitle, updatedContent, updatedColor) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      id: todos[index].id,
      title: updatedTitle,
      content: updatedContent,
      isEdit: false,
      color: updatedColor,
    };
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const updateDone = (index, updatedTitle, updatedContent, updatedColor) => {
    const updatedTodos = [...todoDone];
    updatedTodos[index] = {
      id: todoDone[index].id,
      title: updatedTitle,
      content: updatedContent,
      isEdit: false,
      color: updatedColor,
    };
    localStorage.setItem('todoDone', JSON.stringify(updatedTodos));
    setDone(updatedTodos);
  };
  const updateProgress = (index, updatedTitle, updatedContent, updatedColor) => {
    const updatedTodos = [...todoProgress];
    updatedTodos[index] = {
      id: todoProgress[index].id,
      title: updatedTitle,
      content: updatedContent,
      isEdit: false,
      color: updatedColor,
    };
    localStorage.setItem('todoProgress', JSON.stringify(updatedTodos));
    setProgress(updatedTodos);
  };

  const moveTodoToProgress = (index) => {
    const newProgress = {
      id: todos[index].id,
      title: todos[index].title,
      content: todos[index].content,
      isEdit: false,
      color: todos[index].color,
    };
    const updatedProgress = [...todoProgress, newProgress];
    localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);

    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const moveTodoToDone = (index) => {
    const newDone = {
      id: todos[index].id,
      title: todos[index].title,
      content: todos[index].content,
      isEdit: false,
      color: todos[index].color,
    };
    const updatedDone = [...todoDone, newDone];
    localStorage.setItem('todoDone', JSON.stringify(updatedDone));
    setDone(updatedDone);

    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  const moveProgressToTodo = (index) => {
    const newTodo = {
      id: todoProgress[index].id,
      title: todoProgress[index].title,
      content: todoProgress[index].content,
      isEdit: false,
      color: todoProgress[index].color,
    };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);

    const updatedProgress = [...todoProgress];
    updatedProgress.splice(index, 1);
    localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };
 
  const moveProgressToDone = (index) => {
    const newDone = {
      id: todoProgress[index].id,
      title: todoProgress[index].title,
      content: todoProgress[index].content,
      isEdit: false,
      color: todoProgress[index].color,
    };
    const updatedDone = [...todoDone, newDone];
    localStorage.setItem('todoDone', JSON.stringify(updatedDone));
    setDone(updatedDone);

    const updatedProgress = [...todoProgress];
    updatedProgress.splice(index, 1);
    localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };

  const moveDoneToTodo = (index) => {
    const newTodo = {
      id: todoDone[index].id,
      title: todoDone[index].title,
      content: todoDone[index].content,
      isEdit: false,
      color: todoDone[index].color,
    };
    const updatedTodo = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodo));
    setTodos(updatedTodo);

    const updatedDone = [...todoDone];
    updatedDone.splice(index, 1);
    localStorage.setItem('todoDone', JSON.stringify(updatedDone));
    setDone(updatedDone);
  };
  const moveDoneToProgress = (index) => {
    const newProgress = {
      id: todoDone[index].id,
      title: todoDone[index].title,
      content: todoDone[index].content,
      isEdit: false,
      color: todoDone[index].color,
    };
    const updatedProgress = [...todoProgress, newProgress];
    localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);

    const updatedDone = [...todoDone];
    updatedDone.splice(index, 1);
    localStorage.setItem('todoDone', JSON.stringify(updatedDone));
    setDone(updatedDone);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        todoDone,
        setDone,
        todoProgress,
        setProgress,
        addTodo,
        addDone,
        addProgress,
        removeTodo,
        removeDone,
        removeProgress,
        updateTodo,
        updateDone,
        updateProgress,
        moveTodoToProgress,
        moveTodoToDone,
        moveProgressToDone,
        moveProgressToTodo,
        moveDoneToProgress,
        moveDoneToTodo,

      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};