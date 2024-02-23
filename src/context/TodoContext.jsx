import React, { createContext, useReducer, useContext } from "react";

const initialTodos = [];
const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
      );
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...action.todo } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export function useTodoState() {
  const state = useContext(TodoContext);
  if (!state) throw new Error("Provider is not found");
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("Provider is not found");
  return dispatch;
}

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};
