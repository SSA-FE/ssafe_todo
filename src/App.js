import React, { useState } from "react";
import styled from "styled-components";
import { IoMoon } from "react-icons/io5";
import { TodoContextProvider } from "./context/TodoContext";
import AddCard from "./components/Edit/AddCard";
import CardList from "./components/Card/CardList";
import plusIcon from "./assets/Icon/plus.png";

const Full = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 90px;
`;

const IconMoon = styled(IoMoon)`
  float: right;
  font-size: 40px;
  margin-top: 2%;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    background-color: #212121;
    transition: background-color 1s;
  }
`;

const Boards = styled.div`
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #242424;
  top: 146px;
  width: 368px;
  height: flexible;
  border-radius: 16px;
  padding: 10px 24px 24px 24px;
  margin: 10px 10px;
  gap: 16px;
`;

const Title = styled.h1`
  width: 320px;
  height: 44px;
  size: 37px;
  text-align: left;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: none;
  border-radius: 50%;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 100%;
`;

function App() {
  const [todoAdd, setTodoAdd] = useState(false);
  return (
    <TodoContextProvider>
      <Full>
        <Header>
          <IconMoon />
        </Header>
        <Boards>
          <Board>
            <Title>
              To do{" "}
              <span role="img" aria-label="chick">
                🐥
              </span>
            </Title>
            <CardList />
            {todoAdd && <AddCard setTodoAdd={setTodoAdd} />}
            <Button onClick={() => setTodoAdd((prev) => !prev)}>
              <ButtonImg src={plusIcon} alt="add" />
            </Button>
          </Board>

          <Board>
            <Title>
              In Progress{" "}
              <span role="img" aria-label="chick2">
                🐣
              </span>
            </Title>
          </Board>

          <Board>
            <Title>
              Done{" "}
              <span role="img" aria-label="dove">
                🕊️
              </span>
            </Title>
          </Board>
        </Boards>
      </Full>
    </TodoContextProvider>
  );
}

export default App;
