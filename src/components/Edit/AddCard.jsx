import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import CardEx from "../Card/Card.jsx";

const Card = styled.div`
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
`;

const TextTitle = styled.input`
  font-size: 19px;
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

function AddCard() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const useAppContext = useContext(AppContext);
  // const { list, setList } = useAppContext;   // 같은 말

  const handleSubmit = () => {
    useAppContext.setList([
      ...useAppContext.list,
      { id: uuidv4(), inputTitle: title, inputContents: contents },
    ]);
    setTitle("");
    setContents("");
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
      {useAppContext.list.map(({ id, inputTitle, inputContents }) => {
        return (
          <div key={id}>
            <h1>{inputTitle}</h1>
            <div>{inputContents}</div>
          </div>
        );
      })}
    </Card>
  );
}

//   return (
//
//
//       <CardEx />

//       {/* <AddMenu /> */}
//       {/* {isClicked ? <AddMenu /> : null} */}
//       <AddButton onClick={() => setIsClicked(true)}>+</AddButton>
//
//   );
// }

export default AddCard;
