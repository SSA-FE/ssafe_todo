import React, { useState } from "react";
import { useTodoState, useTodoDispatch } from "../../context/TodoContext";

import styled from "styled-components";
import editIcon from "../../assets/Icon/edit.png";
import deleteIcon from "../../assets/Icon/delete.png";
import { v4 as uuidv4 } from "uuid";

const Card = styled.div`
  width: 90%;
  max-width: 320px;
  color: white;
  background-color: #90caf9;
  border-radius: 8px;
  text-align: left;
  padding: 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const CardHeader = styled.div`
  witdh: 100%;
  display: flex;
  align-items: center;
`;

const CardIcons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.h1`
  width: 80%;
  font-size: 24px;
  margin: 0;
`;

const CardContents = styled.p`
  font-size: 15px;
  margin: 30px 0 0 0;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 100%;
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

export default function CardList() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const todos = useTodoState();
  const dispatch = useTodoDispatch();

  const handleRemove = (e) => {
    dispatch({
      type: "REMOVE",
      id: e.target.id,
    });
  };

  const handleEdit = (id, inputTitle, inputContents) => {
    dispatch({
      type: "EDIT",
      id: id,
    });
    setTitle(inputTitle);
    setContents(inputContents);
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

  const handleSubmit = (e) => {
    const newTodo = {
      id: uuidv4(),
      inputTitle: title,
      inputContents: contents,
    };
    dispatch({
      type: "UPDATE",
      id: e.target.value,
      todo: newTodo,
    });

    setTitle("");
    setContents("");
  };

  return (
    <>
      {todos.map(({ id, inputTitle, inputContents, edit }) => {
        return (
          <>
            {edit ? (
              <Card key={id}>
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
                <SubmitButton onClick={handleSubmit} value={id}>
                  +
                </SubmitButton>
              </Card>
            ) : (
              <Card key={id}>
                <CardHeader>
                  <CardTitle>{inputTitle}</CardTitle>
                  <CardIcons>
                    <Button
                      onClick={() => handleEdit(id, inputTitle, inputContents)}
                    >
                      <ButtonImg src={editIcon} alt="edit" id={id} />
                    </Button>
                    <Button onClick={handleRemove}>
                      <ButtonImg src={deleteIcon} alt="delete" id={id} />
                    </Button>
                  </CardIcons>
                </CardHeader>
                <CardContents>{inputContents}</CardContents>
              </Card>
            )}
          </>
        );
      })}
    </>
  );
}
