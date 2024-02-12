import React from "react";
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
    }
`;

function TodoTop(){
    return(
        <TodoTopStyle>
            <div className="todoTopContainer">
                <div className="todoTopTitle">
                    RoadMap
                </div>
                <img className="todoTopDark" src="res/iconDark.svg"></img>
                
            </div>
        </TodoTopStyle>
    )
}

export default TodoTop;