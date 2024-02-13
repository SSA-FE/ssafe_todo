import React from "react";
// import useStore from "../store/store";
import Board from "../components/Board/Board";
import styled from "styled-components";
import MoonIcon from "../assets/svg/mode/Moon.svg";
// import Modal from '../components/Modal/Modal';
// import AddForm from "../components/AddForm";

const MainPage = () => {
  return (
    <FlexBox>
      <ContentsBox>
        <Title>Roadmap</Title>
        <Icon src={MoonIcon}></Icon>
      </ContentsBox>
      <BoardBox>
        <Board category="To do" />
        <Board category="In progress" />
        <Board category="Done" />
      </BoardBox>
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
  position: absolute;
  justify-content: center;

  width: 139.2rem;
  height: 80rem;
  background-color: #d9d9d9;
  border-radius: 1.2rem;
`;

const BoardBox = styled.div`
  display: flex;
  max-height: 72.1rem;
`;

const Title = styled.h1`
  position: absolute;
  left: 0;
  padding-left: 4.1rem;
  padding-top: 3rem;
  font-size: 5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #6f6f6f;
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
