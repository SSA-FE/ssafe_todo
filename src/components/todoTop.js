import React, { useState } from "react";
import styled from "styled-components";

const TodoTopStyle=styled.div`
    .todoTopContainer{
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        padding:20px;
        align-items:center;
    }
    .todoTopTitle{
        width:230px;
        height:60px;
        font-size:50px;

    }
    .todoTopDark{
        width:40px;
        height:40px;
        color:white;
    }
`;

function TodoTop(){
    const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = "#282c34";
      document.body.style.color = "#e9ecef";
    } else {
      document.body.style.backgroundColor = "#e9ecef";
      document.body.style.color = "black";
    }
  };

  return (
    <TodoTopStyle>
      <div className={`todoTopContainer ${darkMode ? 'darkMode' : ''}`}>
        <div className="todoTopTitle">RoadMap</div>
        <img
          className={`todoTopDark ${darkMode ? 'darkMode' : ''}`}
          src={darkMode ? "res/iconLight.svg" : "res/iconDark.svg"}
          alt="Dark mode"
          onClick={handleDarkMode}
        ></img>
      </div>
    </TodoTopStyle>
  );
}

export default TodoTop;