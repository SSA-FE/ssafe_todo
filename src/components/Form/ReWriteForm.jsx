import React, { useState } from "react";
import styled from "styled-components";
import useFormStore from "../../store/store";
import Exit from "../../assets/button/Exit.svg";

const ReWrite = ({ category, rewrite, retitle, retext, setRewrite }) => {
  const [title, setTitle] = useState(retitle);
  const [text, setText] = useState(retext);
  const [color, setColor] = useState("");

  const { addForm } = useFormStore();
  const { removeForm } = useFormStore();

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    removeForm(rewrite);
    addForm({ title, text, color, category });
    setTitle("");
    setText("");
    setColor("");
    setRewrite(false);
  };

  const handleColorClick = (color) => () => {
    setColor(color);
  };

  const handleExitButton = () => {
    setRewrite(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleAddForm>
        <AddFormButton>
          <ReWriteButton type="submit" disabled={!title && !text}>
            Go
          </ReWriteButton>
          <ExitButton type="button" onClick={handleExitButton} src={Exit} />
        </AddFormButton>

        <ColorChart>
          <Color1 type="button" onClick={handleColorClick("#c674ca")} />
          <Color2 type="button" onClick={handleColorClick("#9ac9c4")} />
          <Color3 type="button" onClick={handleColorClick("#94aaf8")} />
          <Color4 type="button" onClick={handleColorClick("#e06d68")} />
        </ColorChart>

        <AddFormInputTitle
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title here ヾ(•ω•`)o"
        />
        <AddFormInputText
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Please type here"
        />
        <AddFormTextBox />
      </StyleAddForm>
    </form>
  );
};

const StyleAddForm = styled.div`
  display: block;
  position: relative;
  width: 32rem;
  height: 18.4rem;
  margin: 0 2.4rem 1.6rem 2.4rem;

  background-color: #d4d4d4;
  border-radius: 0.8rem;
`;

const AddFormButton = styled.div`
  display: flex;
  position: absolute;
  left: 23.3rem;
  margin-top: 1rem;
`;

const ReWriteButton = styled.button`
  height: 1.8rem;
  border: 0.1rem solid #fff;
  border-radius: 0.8rem;
  margin-right: 1rem;

  font-size: 1.1rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    color: #17233b;
  }
`;

const ExitButton = styled.img`
  width: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`;

const ColorChart = styled.div`
  display: flex;
  padding: 1.2rem 0 1.2rem 2rem;
  background-color: #17233b;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const Color1 = styled.button`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #c674ca;
  border: 0.4rem outset #c59dc7;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0.4rem inset #b068b4;
    background-color: #905493;
  }
`;

const Color2 = styled.button`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #9ac9c4;
  border: 0.4rem outset #ccdad9;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0.4rem inset #b1c7c6;
    background-color: #769a96;
  }
`;

const Color3 = styled.button`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #94aaf8;
  border: 0.4rem outset #bcc8f5;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0.4rem inset #7f92d4;
    background-color: #6e7eb6;
  }
`;

const Color4 = styled.button`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: #e06d68;
  border: 0.4rem outset #db9794;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0.4rem inset #d36863;
    background-color: #c3615c;
  }
`;

const AddFormInputTitle = styled.input`
  margin: 0.3rem 0 0.6rem 2.4rem;
  width: 25.9rem;
  height: 4rem;
  max-width: 25.9rem;
  max-height: 4.2rem;
  background-color: #d4d4d4;
  border: 0.2rem solid #d4d4d4;
  border-bottom: 0.2rem dashed #bcbcbc;
  outline: none;

  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
  }
`;

const AddFormInputText = styled.textarea`
  position: relative;
  top: 0.6rem;
  margin-left: 2.4rem;
  width: 27.2rem;
  height: 6.4rem;
  background-color: #bcbcbc;
  border-color: #bcbcbc;
  max-width: 27.2rem;
  max-height: 6.4rem;
  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  color: #fff;
  line-height: 2rem;
  outline: none;
  resize: none;
  overflow-wrap: break-word;
  overflow: hidden;
  z-index: 1;

  &::placeholder {
    color: #ffffff;
  }
`;

const AddFormTextBox = styled.div`
  display: block;
  position: absolute;
  margin-left: 1.5rem;
  margin-bottom: 0.8rem;
  bottom: 0;
  width: 29rem;
  height: 7.4rem;
  background-color: #bcbcbc;
  border-radius: 0.8rem;
`;

export default ReWrite;
