import React, { useState, createContext } from "react";

export const AppContext = createContext([
  {
    id: 0,
    inputTitle: "hello",
    inputContents: "hi",
  },
]);

export const AppContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const context = {
    list,
    setList,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
