import React, { useState } from "react";
import { useTodoDispatch } from "../../context/TodoContext";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Card = styled.div`
  width: 90%;
  max-width: 320px;
  color: white;
  background-color: #b0bec5;
  border-radius: 8px;
  text-align: left;
  padding: 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  width: 25px;
  height: 25px;
  font-size: 15px;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  border-color: transparent;
  background-color: #4db6ac;
  cursor: pointer;
`;

const TextTitle = styled.input`
  font-size: 24px;
  font-weight: bold;
  width: 200px;
  max-height: 30px;
  color: white;
  background-color: transparent;
  border-color: transparent;
  resize: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const TextContents = styled.input`
  font-size: 15px;
  width: 320px;
  height: 60px;
  color: white;
  background-color: transparent;
  border-color: transparent;
  resize: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

function AddCard({ setTodoAdd }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useTodoDispatch();

  const handleSubmit = () => {
    const newTodo = {
      id: uuidv4(),
      inputTitle: title,
      inputContents: contents,
    };
    dispatch({
      type: "CREATE",
      todo: newTodo,
    });

    setTitle("");
    setContents("");
    setTodoAdd(false);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    }

    if (name === "contents") {
      setContents(value);
    }
  };

  return (
    <Card>
      <TextTitle
        placeholder="Add Title"
        name="title"
        onChange={onChange}
        value={title}
      />
      <TextContents
        placeholder="Add Content"
        name="contents"
        onChange={onChange}
        value={contents}
      />
      <SubmitButton onClick={handleSubmit}>+</SubmitButton>
    </Card>
  );
}

export default AddCard;
