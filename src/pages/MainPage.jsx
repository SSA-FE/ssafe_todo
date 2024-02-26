import React from "react";
import useFormStore from "../store/store";
import Board from "../components/Board/Board";
import styled from "styled-components";
import MoonIcon from "../assets/mode/Moon.svg";
// import Modal from '../components/Modal/Modal';
// import AddForm from "../components/AddForm";

const MainPage = () => {
  const { forms } = useFormStore();

  const boardForms = [
    {
      category: "ToDo",
      forms: forms.filter((form) => form.category === "ToDo"),
    },
    {
      category: "InProgress",
      forms: forms.filter((form) => form.category === "InProgress"),
    },
    {
      category: "Done",
      forms: forms.filter((form) => form.category === "Done"),
    },
  ];

  return (
    <FlexBox>
      <ContentsBox>
        <Title>Roadmap</Title>
        <Icon src={MoonIcon}></Icon>
        <BoardBox>
          {boardForms.map((board) => (
            <Board
              key={board.category}
              category={board.category}
              forms={board.forms}
            />
          ))}
        </BoardBox>
      </ContentsBox>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const ContentsBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 139.2rem;
  height: 75rem;
  background-color: #17233b;
  border-radius: 1.2rem;
`;

const BoardBox = styled.div`
  display: flex;
  position: absolute;
  max-height: 72.1rem;
  margin-top: 10rem;
`;

const Title = styled.h1`
  position: absolute;
  left: 0;
  padding-left: 4.1rem;
  padding-top: 2.5rem;
  font-size: 5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #d9deea;
`;

const Icon = styled.img`
  position: absolute;
  width: 3.2rem;
  height: 3.2rem;
  margin-top: 3rem;
  margin-right: 3.7rem;
  right: 0;
`;

export default MainPage;
