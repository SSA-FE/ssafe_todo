// import useStore from './store.js';
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

import CardEx from './components/Card/CardEx.jsx'
import Home from './components/Header/Home.jsx';
import Menu from "./components/Card/Menu.jsx";
import AddMenu from "./components/Edit/AddMenu.jsx";
import { useState } from "react";

//react-scripts 오류 https://thespoiler.tistory.com/21

// https://html-css-js.com/html/character-codes/

// Q. 모든 박스마다 같은 위치에 같은 아이콘 넣으려면?

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
// height flexible 적용되게 -> flex-start
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

const MenuView = styled(Menus)`
  height: flexible;
  background-color: #f8bbd0;
`;
const MenuInNote = styled(Menus)`
  height: 140px;
  background-color: #b39ddb;
`;
const MenuOptions = styled(Menus)`
  height: 140px;
  background-color: #90caf9;
`;
const MenuStoring = styled(Menus)`
  height: 140px;
  background-color: #4db6ac;
`;

const AddButton = styled.button`
  width: 30px;
  border-radius: 40%;
`;

// const MenuMod = styled(Menu)`
//   height: 112px;
//   background-color: #b0bec5;
//   &:hover {
//     background-color: #607d8b;
//   }
// `;

// const ModHeader = styled.div`
// display: flex;
// width: 300px;
// `

// Icon 나오게 ...
// const ModIcon = styled.div`
// display: flex;
// width: 50px;
// color: black;
// `

// 사실상 바뀌는 게 color밖에 없음
// menu 추가될 때마다 있어야하는 속성이니까 렌더링을 할 수는 있지만 ~ 적절하지 않을듯

const IconClose = styled(IoMdClose)`
  cursor: pointer;
  float: right;
  margin-top: 7px;
`;
const IconEdit = styled(FaRegEdit)`
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: 7px;
`;

// const IconAdd = styled.div`
//   border-radius: 50%;
//   background-color: #d93535;
// `;

///App.js에 useEffect 쓰기   
///받은 다음 Menu에다가 props 전달
/// 전달한 걸 바탕으로 title, contents 라는 이름으로 받은 다음
/// {title} {contents} 보여줌
/// useEffect 쓸 때 localstorage.getItem을 쓸것

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
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
          <CardEx />
          <MenuView>
            <h3>Tablet view</h3>
          </MenuView>
          <MenuInNote>
            <IconClose />
            <IconEdit />
            <h3>Audio recording in note</h3>
            Show audio in a note and playback UI
          </MenuInNote>
          <MenuInNote>
            <h3>Bookmark in note</h3>
            Show rich link UI in a note, and feature to render website
            screenshot.
          </MenuInNote>
          <MenuInNote>
            <h3>Image viewer</h3>
            Opens when clicking on the thumbnail in the list or on the image in
            the note
          </MenuInNote>
          {/* <AddMenu /> */}
          {isClicked ? <AddMenu /> : null}
          <AddButton onClick={() => setIsClicked(true)}>+</AddButton>
        </Board>

        <Board>
          <Title>
            In Progress{" "}
            <span role="img" aria-label="chick2">
              🐣
            </span>
          </Title>
          <MenuView>
            <h3>Mobile view</h3>
            Functions for both web responsive and native apps. Note: Android and
            iOS will need unique share icons.
          </MenuView>

          <MenuView>
            <h3>Desktop view</h3>
            PWA for website and native apps. Note: Windows and Mac will need
            unique share icons.
          </MenuView>

          <MenuOptions>
            <h3>Formatting options</h3>
            Mobile formatting bar expands and collapses when tapping the format
            icon.
          </MenuOptions>

          <MenuInNote>
            <h3>Media in note</h3>
            Image & video with player UI
          </MenuInNote>
        </Board>

        <Board>
          <Title>
            Done{" "}
            <span role="img" aria-label="dove">
              🕊️
            </span>
          </Title>
          <MenuStoring>
            <h3>Audio recording</h3>
            Interface for when recording a new audio note
          </MenuStoring>

          <MenuStoring>
            <h3>Bookmarking</h3>
            Interface for when creating a new link note.
          </MenuStoring>

          <MenuOptions>
            <h3>Mobile home screen</h3>
            Folders, tags, and notes lists are sorted by recent.
          </MenuOptions>
        </Board>
      </Boards>
    </Full>
  );
}

// const App = () => {
//   const { bears, increasePopulation, removeAllBears} = useStore(state => state);

//   return (
//     <>
//       <h1>{bears} around here...</h1>
//       <button onClick = {increasePopulation}>one up</button>
//       <button onClick = {removeAllBears}>remove all</button>
//     </>
//   )
// }

export default App;
