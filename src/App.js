import './App.css';
// import useStore from './store.js';
import styled from "styled-components";

const Board = styled.div`
  display: inline-block;
  color: white;
  background-color: #242424;
  top: 146px;
  width: 368px;
  height: flexible;
  border-radius: 16px;
  padding: 24px;
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
  padding: 5%;
  margin-bottom: 15px;
`
// height 글자에 맞춰서 flexible하게 할 수 있을 것 같음
const MenuView = styled(Menu)`
  height: flexible;
  background-color: #D93535;
`
// width 고정. 320px fixed 뭐 이렇게 안되나?
const MenuInNote = styled(Menu)`
  height: 140px;
  background-color: #7678D1;
`
const MenuOptions = styled(Menu)`
  height: 140px;
  background-color: #307FE2;
`
const MenuStoring = styled(Menu)`
  height: 140px;
  background-color: #00B294;
`

function App() {
  return (
    <div>
      <Board>
        <Title>To do</Title>

        <MenuView><h3>Tablet view</h3></MenuView>

        <MenuInNote><h3>Audio recording in note</h3>
        Show audio in a note and playback UI
        </MenuInNote>

        <MenuInNote><h3>Bookmark in note</h3>
        Show rich link UI in a note, and feature to render website screenshot.
        </MenuInNote>

        <MenuInNote><h3>Image viewer</h3>
        Opens when clicking on the thumbnail in the list or on the image in the note
        </MenuInNote>
      </Board>

      <Board>
        <Title>In Progress</Title>
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
        <Title>Done</Title>
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