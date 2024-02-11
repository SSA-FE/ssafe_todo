import React from "react";
import styled from "styled-components";

const TodoTopStyle=styled.div`
    .todoTopContainer{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding:20px;
        align-items:center;
    }
    .todoTopTitle{
        width:230px;
        height:60px;
        font-size:50px;


    }
`;

function TodoTop(){
    return(
        <TodoTopStyle>
            <div className="todoTopContainer">
                <div className="todoTopTitle">
                    RoadMap
                </div>
                <img src="res/iconDark.svg"></img>

            </div>
        </TodoTopStyle>
    )
}

export default TodoTop;