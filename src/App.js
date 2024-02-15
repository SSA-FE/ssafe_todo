
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTop from './components/todoTop.js';
import TodoList from './components/todoList.js'
import TodoDone from './components/todoDone.js'
import TodoProgress from './components/todoProgress.js';
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  background-color:#e9ecef;
	line-height: 1;
  font-family:Interop;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const FlexStyle = styled.div`
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
      <GlobalStyle />
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
