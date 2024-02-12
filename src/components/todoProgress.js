import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoListItem from './todoListItem';

const TodoProgressSytle=styled.div`
    .todoProgressContainer{
        position:relative;
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
    .todoListPlus{
        position:absolute;
        width:26px;
        height:26px;
        backgroud-color:white;
        left:50%;
        bottom:-13px;
        border-radius:50%;

    }
    .todoListItem{
        position:relative;
        display:flex;
        flex-direction:column;
        margin:10px;
        padding:10px;
        border-radius:8px;
        background-color: rgb(114, 55, 55);
        width:90%;
        
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
    }
    .todoListEditTitle{
        border-radius:8px;
        background-color: rgb(200, 200, 200);
        margin:2px;

    }
    .todoListEditContent{
        border-radius:8px;
        background-color: rgb(200, 200, 200);
        margin:2px;
    }
    .todoListEditBtn{
        border-radius:8px;
        background-color: rgb(200, 200, 200);
        margin:2px;

    }
    .hoverMoveTodoBtn{
        
        border-radius:8px;
        backgroud-color:white;
    }
    .hoverMoveProgressBtn{
        display:none;
        border-radius:8px;
        backgroud-color:white;
    }  
    .hoverMoveDoneBtn{
        border-radius:8px;
        backgroud-color:white;
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
                <button className="todoListPlus" onClick={addTodo}> +</button>

            </div>
        </TodoProgressSytle>
    )
}

export default TodoProgress;