import React from "react";
import styled from "styled-components";

const TodoDoneSytle=styled.div`
    .todoDoneContainer{
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
    

`

function TodoDone(){
    return(
        <TodoDoneSytle>
            <div className="todoDoneContainer">
                <div className="todoDoneTitle"> 
                    Done
                </div>
            </div>
        </TodoDoneSytle>
    )
}
export default TodoDone;