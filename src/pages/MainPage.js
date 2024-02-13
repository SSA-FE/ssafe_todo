import React from "react";
// import useStore from "../store/store";
import Board from "../components/Board/Board";
import styled from "styled-components";
import MoonIcon from "../assets/svg/mode/Moon.svg";
// import Modal from '../components/Modal/Modal';
// import AddForm from "../components/AddForm";

const MainPage = () => {
  const boardForms = [
    {
      category: "To do",
      forms: [
        { title: "Tablet view", text: "", color: "#D93535" },
        {
          title: "Audio recording in note ",
          text: "Show audio in a note and playback UI",
          color: "#7678D1",
        },
        {
          title: "Bookmark in note",
          text: "Show rich link UI in a note, and feature to render website screenshot.",
          color: "#7678D1",
        },
        {
          title: "Image viewer",
          text: "Opens when clicking on the thumbnail in the list or on the image in the note",
          color: "#7678D1",
        },
      ],
    },
    {
      category: "In progress",
      forms: [
        {
          title: "Mobile view",
          text: "Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons. ",
          color: "#D93535",
        },
        {
          title: "Desktop view",
          text: "PWA for website and native apps. Note: Windows and Mac will need unique share icons.",
          color: "#D93535",
        },
        {
          title: "Formatting options",
          text: "Mobile formatting bar expands and collapses when tapping the format icon.",
          color: "#307FE2",
        },
        {
          title: "Media in note",
          text: "Image & video with player UI",
          color: "#7678D1",
        },
      ],
    },
    {
      category: "Done",
      forms: [
        {
          title: "Audio recording",
          text: "Interface for when recording a new audio note",
          color: "#00B294",
        },
        {
          title: "Bookmarking",
          text: "Interface for when creating a new link note.",
          color: "#00B294",
        },
        {
          title: "Mobile home screen",
          text: "Folders, tags, and notes lists are sorted by recent.",
          color: "#307FE2",
        },
      ],
    },
  ];

  return (
    <FlexBox>
      <ContentsBox>
        <Title>Roadmap</Title>
        <Icon src={MoonIcon}></Icon>
      </ContentsBox>
      <BoardBox>
        {boardForms.map((board) => (
          <Board
            key={board.category}
            category={board.category}
            forms={board.forms}
          />
        ))}
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
  height: 75rem;
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
  padding-top: 2.5rem;
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
