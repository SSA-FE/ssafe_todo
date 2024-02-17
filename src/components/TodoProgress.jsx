import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoListItem from './TodoListItem';

const TodoProgressSytle=styled.div`
position:relative;
    .todoProgressContainer{
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
        backgroud-color:white;
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
    }
    .todoListItemTitle{
        margin:10px;
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
        top:-20px;
        position:absolute;
        border-radius:8px;
        background-color:white;
    }
    .hoverMoveProgressBtn{
        display:none;
        border-radius:8px;
        position:absolute;
        top:-20px;
        backgroudn-color:white;
    }  
    .hoverMoveDoneBtn{
        border-radius:8px;
        position:absolute;
        top:-20px;
        left:50%;
        background-color:white;
    }
    
    .todoListRedBtn{
        position:absolute;
        border-radius:50%;
        background-color:#D93535;
        width:30px;
        height:30px;
        bottom:-5px;
        left:55%;
        border:1px solid white;
    }
    .todoListBlueBtn{
        position:absolute;
        border-radius:50%;
        background-color:#307FE2;
        width:30px;
        height:30px;
        bottom:-5px;
        left:67%;
        border:1px solid white;
    } .todoListGreenBtn{
        position:absolute;
        border-radius:50%;
        background-color:#00B294;
        width:30px;
        height:30px;
        bottom:-5px;
        left:79%;
        border:1px solid white;
    } .todoListPurpleBtn{
        position:absolute;
        border-radius:50%;
        background-color:#7678D1;
        width:30px;
        height:30px;
        bottom:-5px;
        left:91%;
        border:1px solid white;
    }
`

function TodoProgress(){
    const [todos, setTodos] = useState([]);
    const [todoDone, setDone] = useState([]);
    const [todoProgress, setProgress] = useState([]);
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        const savedDone = JSON.parse(localStorage.getItem('todoDone')) || [];
        const savedProgress = JSON.parse(localStorage.getItem('todoProgress')) || [];
        if(savedDone.length>0){
            setDone(savedDone)
        }
        if(savedProgress.length>0){
            setProgress(savedProgress)
        }
        if(savedTodos.length>0){
            setTodos(savedTodos);
        }
    }, [todoProgress]);

    const removeTodo = (index) => {
        const updatedProgress = [...todoProgress];
        updatedProgress.splice(index, 1);
        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);
    };
    const updateTodo = (index, updatedTitle, updatedContent) => {
        const updatedProgress = [...todoProgress];
        updatedProgress[index] = { title: updatedTitle, content: updatedContent ,isEdit:false};

        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);

    };
    const addTodo = () => {
        const newProgress = { title: '새로운 할일', content: '해야 할 일을 적어주세요' , isEdit:true};
        const updatedProgress = [...todoProgress, newProgress];

        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);

        
    };
    const moveToDone=(index)=>{
        const newDone = { title: todoProgress[index].title, content:todoProgress[index].content , isEdit:false};
        const updatedDone = [...todoDone, newDone];
        localStorage.setItem('todoDone', JSON.stringify(updatedDone));
        setDone(updatedDone);
        const updatedProgress = [...todoProgress];
        updatedProgress.splice(index, 1);
        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);
    };
    const moveToTodo=(index)=>{
        const newTodo = { title: todoProgress[index].title, content:todoProgress[index].content , isEdit:false};
        const updatedTodo = [...todos, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedTodo));
        setDone(updatedTodo);
        const updatedProgress = [...todoProgress];
        updatedProgress.splice(index, 1);
        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);

    };
    return(
        <TodoProgressSytle>
            <div className="todoProgressContainer">
                <div className="todoProgressTitle"> 
                    In Progress 🐥
                </div>
                {todoProgress.map((todo, index) => (
                    <TodoListItem key={index} title={todo.title} content={todo.content}
                        onRemove={() => removeTodo(index)}
                        onUpdate={(updatedTitle, updatedContent) => updateTodo(index, updatedTitle, updatedContent)
                        }isEdit={todo.isEdit}
                        onMoveTodo={()=>moveToTodo(index)}
                        onMoveDone={()=>moveToDone(index)} />
                ))}

            </div>
            <button className="todoListPlus" onClick={addTodo}> +</button>

        </TodoProgressSytle>
    )
}

export default TodoProgress;