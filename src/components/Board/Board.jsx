import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import ReWriteForm from "../Form/ReWriteForm";
import AddForm from "../Form/AddForm";
import MoreViews from "../../assets/button/MoreViews.svg";

const Board = ({ category, forms }) => {
  const [more, setMore] = useState(false);
  const [rewrite, setRewrite] = useState("");
  const [retitle, setReTitle] = useState("");
  const [retext, setReText] = useState("");

  const handleMoreViewsButton = () => {
    setMore(true);
  };

  return (
    <StyleBoard>
      <BoardTitle>
        {category === "ToDo" ? "To Do 🎠" : null}
        {category === "InProgress" ? "In Progress 🎡" : null}
        {category === "Done" ? "Done 🎆" : null}
      </BoardTitle>
      {more && <AddForm category={category} setMore={setMore} />}
      <FormBox more={more}>
        <StyleForm>
          {forms.map((form, index) => (
            <Form
              key={index}
              formTitle={form.title}
              formText={form.text}
              color={form.color}
              id={form.id}
              setRewrite={setRewrite}
              setReTitle={setReTitle}
              setReText={setReText}
              category={category}
            ></Form>
          ))}
          {rewrite && (
            <ReWriteForm
              category={category}
              rewrite={rewrite}
              retitle={retitle}
              retext={retext}
              setRewrite={setRewrite}
            />
          )}
        </StyleForm>
      </FormBox>
      <MoreViewsButton
        src={MoreViews}
        onClick={handleMoreViewsButton}
      ></MoreViewsButton>
    </StyleBoard>
  );
};

const StyleBoard = styled.div`
  display: block;
  position: relative;
  width: 36.8rem;
  height: 100%;
  max-height: 62rem;
  margin: 0 3rem;
  padding-bottom: 1rem;
  background-color: #0a1626;
  border-radius: 1.6rem;
`;

const BoardTitle = styled.h2`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 5rem;
  top: 2.4rem;
  left: 2.4rem;

  font-size: 3.7rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #d9deea;
`;

const FormBox = styled.div`
  display: block;
  max-height: ${(props) => (props.more ? `28rem` : `49rem`)};
  overflow-y: auto;
`;

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreViewsButton = styled.img`
  position: relative;
  bottom: -3.7rem;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 2.6rem;
  height: 2.6rem;

  &:hover {
    cursor: pointer;
  }
`;

export default Board;
