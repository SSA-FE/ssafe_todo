// import useStore from './store.js';
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

import Card from "./components/Card/Card.jsx";
import { useState } from "react";
import { AppContextProvider } from "./context/AppContext.jsx";
import AddCard from "./components/Edit/AddCard.jsx";

// https://html-css-js.com/html/character-codes/

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
  display: inline-block;
  color: white;
  background-color: #242424;
  top: 146px;
  width: 368px;
  height: flexible;
  border-radius: 16px;
  padding: 10px 24px 10px 24px;
  margin: 10px 10px;
  gap: 16px;
`;

const Title = styled.h1`
  width: 320px;
  height: 44px;
  size: 37px;
  text-align: left;
`;

// max-width로 가로 길이 고정
const Menus = styled.div`
  max-width: 320px;
  color: white;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

///App.js에 useEffect 쓰기
///받은 다음 Menu에다가 props 전달
/// 전달한 걸 바탕으로 title, contents 라는 이름으로 받은 다음
/// {title} {contents} 보여줌
/// useEffect 쓸 때 localstorage.getItem을 쓸것

function App() {
  // const [byeCard, setByeCard] = useState();   // Card의 button onClick하면 여기서 Card가 없어지게?

  return (
    <AppContextProvider>
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
            <AddCard />
          </Board>

          <Board>
            <Title>
              In Progress{" "}
              <span role="img" aria-label="chick2">
                🐣
              </span>
            </Title>
            <Card />
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
    </AppContextProvider>
  );
}

export default App;
