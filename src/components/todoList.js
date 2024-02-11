import React from "react";
import styled from "styled-components";

const TodoListSytle=styled.div`
    .todoListContainer{
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
    .todoListTitle{
        color:white;
        font-size:37px;
        text-align: left;
        width:80%;
    }
    

`

function TodoList(){
    return(
        <TodoListSytle>
            <div className="todoListContainer">
                <div className="todoListTitle"> 
                    To Do
                </div>
            </div>
        </TodoListSytle>
    )
}
export default TodoList;