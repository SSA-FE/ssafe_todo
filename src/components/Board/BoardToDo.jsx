import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import AddMenu from "../Edit/AddMenu.jsx";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Board = styled.div`
  display: inline-block;
  color: white;
  background-color: #242424;
  top: 146px;
  width: 368px;
  height: flexible;
  border-radius: 16px;
  padding: 10px 24px 10px 24px;
  margin: 10px 10px;
  gap: 16px;
`;

const Title = styled.h1`
  width: 320px;
  height: 44px;
  size: 37px;
  text-align: left;
`;

const AddButton = styled.button`
  width: 30px;
  border-radius: 40%;
`;

function BoardToDo() {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const useAppContext = useContext(AppContext);
  // const { list, setList } = useAppContext;   # 이거 같은 말인거 !
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
    <>
      <input
        placeholder="제목을 입력해주세요 !"
        name="title"
        onChange={onChange}
        value={title}
      />
      <input
        placeholder="내용을 입력해주세요 !"
        name="contents"
        onChange={onChange}
        value={contents}
      />
      <button onClick={handleSubmit}>+</button>
      {useAppContext.list.map(({ id, inputTitle, inputContents }) => {
        return (
          <div key={id}>
            <h1>{inputTitle}</h1>
            <div>{inputContents}</div>
          </div>
        );
      })}
    </>
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

export default BoardToDo;
