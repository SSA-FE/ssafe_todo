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
`

function TodoProgress(){
    const [todoProgress, setProgress] = useState([]);
    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem('todoProgress')) || [];

        if (savedProgress.length === 0) {
            const todoProgress = [
                { title: '할일 1', content: '해야 할일 1' ,isEdit:false },
                { title: '할일 2', content: '해야 할일 2' ,isEdit:false },
                // 기본 데이터를 필요한 만큼 추가할 수 있습니다.
            ];
            console.log(todoProgress);

            // LocalStorage에 기본 데이터 저장
            localStorage.setItem('todoProgress', JSON.stringify(todoProgress));

            // 상태 업데이트
            setProgress(todoProgress);
        } else {
            // 가져온 데이터가 있다면 상태 업데이트
            setProgress(savedProgress);
        }
    }, []);

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
    return(
        <TodoProgressSytle>
            <div className="todoProgressContainer">
                <div className="todoProgressTitle"> 
                    In Progress
                </div>
                {todoProgress.map((todo, index) => (
                    <TodoListItem key={index} title={todo.title} content={todo.content}
                        onRemove={() => removeTodo(index)}
                        onUpdate={(updatedTitle, updatedContent) => updateTodo(index, updatedTitle, updatedContent)
                        }isEdit={todo.isEdit} />
                ))}
                <button className="todoListPlus" onClick={addTodo}> +</button>

            </div>
        </TodoProgressSytle>
    )
}

export default TodoProgress;