import './App.css';
// import useStore from './store.js';
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMoon } from "react-icons/io5";


// https://html-css-js.com/html/character-codes/

// Q. 모든 박스마다 아이콘 넣으려면?
// Q. 박스가 위로 정렬된 채로 고정되려면?

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
`

const Title = styled.h1`
  width: 320px;
  height: 44px;
  size: 37px;
  text-align: left;
`


const Menu = styled.div`
  max-width: 320px;
  color: white;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`

// height 글자에 맞춰서 flexible하게 할 수 있을 것 같음
const MenuView = styled(Menu)`
  height: flexible;
  background-color: #F8BBD0;
`
// width 고정. 320px fixed 뭐 이렇게 안되나?
const MenuInNote = styled(Menu)`
  height: 140px;
  background-color: #B39DDB;
`
const MenuOptions = styled(Menu)`
  height: 140px;
  background-color: #90CAF9;
`
const MenuStoring = styled(Menu)`
  height: 140px;
  background-color: #4DB6AC;
`
const MenuMod = styled(Menu)`
  height: 112px;
  background-color: #B0BEC5;
  &:hover{
    background-color : #607D8B;
`

// 사실상 바뀌는 게 color밖에 없는데. menu 추가될 때마다 있어야하는 속성이니까 렌더링을 할 수는 있지만 ~ 적절하지 않을듯



const IconClose = styled(IoMdClose)`
  cursor: pointer;
  float: right;
  margin-top: 7px;
`
const IconEdit = styled(FaRegEdit)`
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: 7px;
`

const IconAdd = styled.div`
  border-radius: 50%;
  background-color: #D93535; 
`

// Add Element 옆 동그라미 아이콘들 넣으려다가,,~

const IconMoon = styled(IoMoon)`
  float: right;
  font-size: 40px;
  margin-top: 1%;
  margin-right: 1%;
  cursor: pointer;
  &:hover{
    background-color: #212121;
    transition: background-color 1s;}
`

//Board 전체 묶어서 옮겨다니게 해야하나?

function App() {
  return (
    <div className = "App">
      <IconMoon />
      <div></div> 
      <div className="Boards">
        <Board>
          <Title>To do <span role="img" aria-label="chick">🐥</span></Title>

          <MenuView><h3>Tablet view</h3></MenuView>

          <MenuInNote>
            <IconClose />
            <IconEdit />
            <h3>Audio recording in note</h3>
          Show audio in a note and playback UI
          </MenuInNote>

          <MenuInNote><h3>Bookmark in note</h3>
          Show rich link UI in a note, and feature to render website screenshot.
          </MenuInNote>

          <MenuInNote><h3>Image viewer</h3>
          Opens when clicking on the thumbnail in the list or on the image in the note
          </MenuInNote>

          <MenuMod>
            <IconAdd />
            <h3>Add Element</h3>
          Opens when clicking on the thumbnail in the list or on the image in the note
          </MenuMod>
        </Board>


        <Board>
          <Title>In Progress <span role="img" aria-label="chick2">🐣</span></Title>
            <MenuView><h3>Mobile view</h3>
            Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons.
            </MenuView>

            <MenuView><h3>Desktop view</h3>
            PWA for website and native apps. Note: Windows and Mac will need unique share icons.
            </MenuView>

            <MenuOptions><h3>Formatting options</h3>
            Mobile formatting bar expands and collapses when tapping the format icon.
            </MenuOptions>

            <MenuInNote><h3>Media in note</h3>
            Image & video with player UI
            </MenuInNote>
        </Board>


        <Board>
          <Title>Done <span role="img" aria-label="dove">🕊️</span></Title>
            <MenuStoring><h3>Audio recording</h3>
            Interface for when recording a new audio note
            </MenuStoring>

            <MenuStoring><h3>Bookmarking</h3>
            Interface for when creating a new link note.
            </MenuStoring>

            <MenuOptions><h3>Mobile home screen</h3>
            Folders, tags, and notes lists are sorted by recent.
            </MenuOptions>
        </Board>
      </div>
    </div>
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