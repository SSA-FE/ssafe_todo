import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoListItem from './todoListItem';

const TodoDoneSytle=styled.div`
    .todoDoneContainer{
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
    .todoDoneTitle{
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

`

function TodoDone(){
    const [todoDone, setDone] = useState([]);
    useEffect(() => {
        const savedDones = JSON.parse(localStorage.getItem('todoDone')) || [];

        if (savedDones.length === 0) {
            const defaultTodos = [
                { title: '할일 1', content: '해야 할일 1' ,isEdit:false },
                { title: '할일 1 2', content: '해야 할일 2' ,isEdit:false },
            ];
            console.log(defaultTodos);
            localStorage.setItem('todoDone', JSON.stringify(defaultTodos));
            setDone(defaultTodos);
        } else {
            setDone(savedDones);
        }
    }, []);

    const removeTodo = (index) => {
        const updatedTodos = [...todoDone];
        updatedTodos.splice(index, 1);
        localStorage.setItem('todoDone', JSON.stringify(updatedTodos));
        setDone(updatedTodos);
    };
    const updateTodo = (index, updatedTitle, updatedContent) => {
        const updatedTodos = [...todoDone];
        updatedTodos[index] = { title: updatedTitle, content: updatedContent ,isEdit:false};

        localStorage.setItem('todoDone', JSON.stringify(updatedTodos));
        setDone(updatedTodos);
    };
    const addTodo = () => {
        const newTodo = { title: '새로운 할일', content: '해야 할 일을 적어주세요' , isEdit:true};
        const updatedTodos = [...todoDone, newTodo];

        localStorage.setItem('todoDone', JSON.stringify(updatedTodos));
        setDone(updatedTodos);
        
    };
    return(
        <TodoDoneSytle>
            <div className="todoDoneContainer">
                <div className="todoDoneTitle"> 
                    Done
                </div>
                {todoDone.map((todo, index) => (
                    <TodoListItem key={index} title={todo.title} content={todo.content}
                        onRemove={() => removeTodo(index)}
                        onUpdate={(updatedTitle, updatedContent) => updateTodo(index, updatedTitle, updatedContent)
                        }isEdit={todo.isEdit} />
                ))}
                <button className="todoListPlus" onClick={addTodo}> +</button>

            </div>
        </TodoDoneSytle>
    )
}
export default TodoDone;