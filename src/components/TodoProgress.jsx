import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import { useTodoContext } from './TodoContext';

const TodoProgressStyle=styled.div`
position:relative;
    .todoProgressContainer{
        border:1px solid white;
        position:relative;
        background-color: #262626;
        border-radius: 8px;
        width:370px;
        display:flex;
        flex-direction:column;
        flex:1;
        padding:0px 20px 20px 20px;
        align-items:center;
        margin:20px;
        height:800px;
        overflow-y:auto;
    }
    .todoProgressContainer::-webkit-scrollbar {
        display: none;
      }
    .todoProgressTitle{
        position:sticky;
        top:0px;
        background-color: #262626;
        z-index:1;
        color:white;
        font-size:37px;
        font-weight:700;
        text-align: left;
        width:100%;
        padding:20px;
        margin-bottom:5px;

    }
    .todoListPlus{
        position:absolute;
        width:26px;
        height:26px;
        background-color:white;
        transform:translate(-50%,0%);
        left:50%;
        bottom:5px;
        border-radius:50%;

    }
    .todoListItem{
        position:relative;
        display:flex;
        flex-direction:column;
        margin:15px;
        padding:10px;
        border-radius:8px;
        background-color:#D93535;
        width:90%;
        color:white;
        &.red {
            background-color: #D93535;
        }

        &.blue {
            background-color: #307FE2;
        }

        &.green {
            background-color: #00B294;
        }

        &.purple {
            background-color: #7678D1;
        }
    }
    .todoListItemTitle{
        font-size:20px;

        margin:30px 10px 10px 10px;
    }
    .todoListItemContent{
        margin:10px;
    }
    .todoListItemXBtn{
        position:absolute;
        width:25px;
        height:30px;
        top:0px;
        right:10px;
        text-align:center;
    }

    .todoListItemWriteBtn{
        position:absolute;
        right:35px;
        top:5px;
        width:25px;
        height:25px;
        text-align:center;
    }
    .todoListEditContainer{
        display:flex;
        flex-direction:column;
        position:relative;
    }
    .todoListEditTitle{
        border-radius:8px;
        border:1px white solid;
        background-color: rgb(200, 200, 200,0.5);
        margin:2px;
        font-size:20px;
        width:50%;
        color:white;
        font-style:bold;
    }
    .todoListEditTitle::placeholder{
        color:white;
        font-style:bold;
    }
    .todoListEditContent{
        border-radius:8px;
        border:1px white solid;
        background-color: rgb(200, 200, 200,0.5);        
        margin:2px;
        color:white;
    }
    .todoListEditContent::placeholder{
        color:white;

    }
    .todoListEditBtn{
        border-radius:8px;
        border:1px white solid;
        background-color: rgb(200, 200, 200,0.5);
        margin:2px;
        width:50%;
        color:white;

    }
    .hoverMoveTodoBtn{
        top:5px;
        position:absolute;
        border-radius:8px;
        background-color:white;
    }
    .hoverMoveProgressBtn{
        display:none;
        border-radius:8px;
        position:absolute;
        top:5px;
        background-color:white;
    }  
    .hoverMoveDoneBtn{
        border-radius:8px;
        position:absolute;
        top:5px;
        left:120px;
        background-color:white;
    }
    
    .todoListBtnContainer{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .todoListRedBtn{
        border-radius:50%;
        background-color:#D93535;
        width:30px;
        height:30px;
        border:1px solid white;
    }
    .todoListBlueBtn{
        border-radius:50%;
        background-color:#307FE2;
        width:30px;
        height:30px;
        border:1px solid white;
    } .todoListGreenBtn{
        border-radius:50%;
        background-color:#00B294;
        width:30px;
        height:30px;
        border:1px solid white;
    } .todoListPurpleBtn{
        border-radius:50%;
        background-color:#7678D1;
        width:30px;
        height:30px;
        border:1px solid white;
    }
`

function TodoProgress(){
    const{todoProgress,addProgress,removeProgress,updateProgress,moveProgressToDone,moveProgressToTodo}=useTodoContext();
    return(
        <TodoProgressStyle>
            <div className="todoProgressContainer">
                <div className="todoProgressTitle"> 
                    In Progress 🐥
                </div>
                {todoProgress.map((todo, index) => (
                    <TodoListItem key={todo.id} id={todo.id} title={todo.title} content={todo.content}
                        onRemove={() => removeProgress(index)}
                        onUpdate={(updatedTitle, updatedContent,updatedColor) => updateProgress(index, updatedTitle, updatedContent,updatedColor)
                        }isEdit={todo.isEdit}
                        onMoveTodo={()=>moveProgressToTodo(index)}
                        onMoveDone={()=>moveProgressToDone(index)}
                        color={todo.color} />
                ))}

            </div>
            <button className="todoListPlus" onClick={addProgress}> +</button>

        </TodoProgressStyle>
    )
}

export default TodoProgress;