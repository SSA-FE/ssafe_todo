import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTop from './components/todoTop.js';
import TodoList from './components/todoList.js'
import TodoDone from './components/todoDone.js'
import TodoProgress from './components/todoProgress.js';
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const FlexStyle=styled.div`
  .appContainer{
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex:1;
    padding:20px;
    align-items:center;
  }
  
`;

function App() {
  
  return (
    <>
    <GlobalStyle/>
      <TodoTop></TodoTop>
      <FlexStyle>
        <div className="appContainer">
        <TodoList></TodoList>
        <TodoProgress></TodoProgress>
        <TodoDone></TodoDone>

        </div>
      </FlexStyle>
      
    </>
  );
}

export default App;
