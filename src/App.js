
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTop from './components/TodoTop.jsx';
import TodoList from './components/TodoList.jsx'
import TodoDone from './components/TodoDone.jsx'
import TodoProgress from './components/TodoProgress.jsx';
import styled from "styled-components";
import { TodoProvider } from './components/TodoContext.jsx';
import { Reset } from 'styled-reset'
const GlobalStyle = createGlobalStyle`
body {
  background-color:#e9ecef;
  font-family:Interop;
}
`;

const FlexStyle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex:1;
    padding:20px;
    align-items:center;

  
`;

function App() {

  return (
    <>
      <Reset/>
      <GlobalStyle />
      <TodoTop/>
      <FlexStyle>
        <TodoProvider>
          <TodoList/>
          <TodoProgress/>
          <TodoDone/>
        </TodoProvider>

      </FlexStyle>

    </>
  );
}

export default App;
