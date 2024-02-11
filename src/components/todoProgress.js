import React from "react";
import styled from "styled-components";

const TodoProgressSytle=styled.div`
    .todoProgressContainer{
        background-color: rgb(26, 26, 26);
        border-radius: 8px;
        width:370px;
        display:flex;
        flex-direction:column;
        flex:1;
        padding:20px;
        align-items:center;
        margin:20px;
    }
    .todoProgressTitle{
        color:white;
        font-size:37px;
        text-align: left;
        width:80%;

    }
    

`

function TodoProgress(){
    return(
        <TodoProgressSytle>
            <div className="todoProgressContainer">
                <div className="todoProgressTitle"> 
                    In Progress
                </div>
            </div>
        </TodoProgressSytle>
    )
}
export default TodoProgress;