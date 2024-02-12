import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoListItem from './todoListItem';


const TodoListSytle = styled.div`
    .todoListContainer{
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
    .todoListTitle{
        color:white;
        font-size:37px;
        text-align: left;
        width:90%;
    }
    .todoListPlus{
        position:absolute;
        width:26px;
        height:26px;
        background-color:white;
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
        display:none;
        border-radius:8px;
        backgroud-color:white;
    }
    .hoverMoveProgressBtn{
        border-radius:8px;
        backgroud-color:white;
    }  .hoverMoveDoneBtn{
        border-radius:8px;
        backgroud-color:white;
    }
`

function TodoList() {
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
    }, []);

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };
    const updateTodo = (index, updatedTitle, updatedContent) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = { title: updatedTitle, content: updatedContent ,isEdit:false};

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };
    const addTodo = () => {
        const newTodo = { title: '새로운 할일', content: '해야 할 일을 적어주세요' , isEdit:true};
        const updatedTodos = [...todos, newTodo];

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
        
    };
    const moveToProgress=(index)=>{
        const newProgress = { title: todos[index].title, content:todos[index].content , isEdit:false};
        const updatedProgress = [...todoProgress, newProgress];
        localStorage.setItem('todoProgress', JSON.stringify(updatedProgress));
        setProgress(updatedProgress);
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };
    const moveToDone=(index)=>{
        const newDone = { title: todos[index].title, content:todos[index].content , isEdit:false};
        const updatedDone = [...todoDone, newDone];
        localStorage.setItem('todoDone', JSON.stringify(updatedDone));
        setDone(updatedDone);
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodos(updatedTodos);

    };
    return (
        <TodoListSytle>
            <div className="todoListContainer">
                <div className="todoListTitle">
                    To Do 🐣
                </div>

                {todos.map((todo, index) => (
                    <TodoListItem key={index} title={todo.title} content={todo.content}
                        onRemove={() => removeTodo(index)}
                        onUpdate={(updatedTitle, updatedContent) => updateTodo(index, updatedTitle, updatedContent)
                        }isEdit={todo.isEdit}
                        onMoveProgress={()=>moveToProgress(index)}
                        onMoveDone={()=>moveToDone(index)} />
                ))}
                <button className="todoListPlus" onClick={addTodo}> +</button>
            </div>
                            
        </TodoListSytle>
    )
}


export default TodoList;