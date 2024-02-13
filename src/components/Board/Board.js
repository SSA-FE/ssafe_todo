import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import MoreViews from "../../assets/svg/button/MoreViews.svg";

const Board = ({ category, forms }) => {
  return (
    <StyleBoard>
      <BoardTitle>{category}</BoardTitle>
      <FormBox>
        {forms.map((form, index) => (
          <Form
            key={index}
            formTitle={form.title}
            formText={form.text}
            color={form.color}
          ></Form>
        ))}
      </FormBox>
      <MoreViewsButton src={MoreViews}></MoreViewsButton>
    </StyleBoard>
  );
};

const StyleBoard = styled.div`
  display: block;
  position: relative;
  width: 36.8rem;
  height: 100%;
  max-height: 62rem;
  margin: 6rem 6rem 0 0;
  padding-bottom: 1rem;
  background-color: #262626;
  border-radius: 1.6rem;
`;

const BoardTitle = styled.h2`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 8rem;
  top: 2.4rem;
  left: 2.4rem;

  font-size: 3.7rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #ffffff;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreViewsButton = styled.img`
  position: absolute;
  bottom: -1.4rem;
  left: 48%;

  width: 2.6rem;
  height: 2.6rem;
`;

export default Board;