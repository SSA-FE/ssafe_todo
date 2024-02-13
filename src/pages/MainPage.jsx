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
      category: "To do 🐣",
      forms: [
        { title: "Tablet view", text: "", color: "#E06D68" },
        {
          title: "Audio recording in note ",
          text: "Show audio in a note and playback UI",
          color: "#C674CA",
        },
        {
          title: "Bookmark in note",
          text: "Show rich link UI in a note, and feature to render website screenshot.",
          color: "#C674CA",
        },
        {
          title: "Image viewer",
          text: "Opens when clicking on the thumbnail in the list or on the image in the note",
          color: "#C674CA",
        },
      ],
    },
    {
      category: "In progress 🐥",
      forms: [
        {
          title: "Mobile view",
          text: "Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons. ",
          color: "#C674CA",
        },
        {
          title: "Desktop view",
          text: "PWA for website and native apps. Note: Windows and Mac will need unique share icons.",
          color: "#94AAF8",
        },
        {
          title: "Formatting options",
          text: "Mobile formatting bar expands and collapses when tapping the format icon.",
          color: "#9AC9C4",
        },
        {
          title: "Media in note",
          text: "Image & video with player UI",
          color: "#E06D68",
        },
      ],
    },
    {
      category: "Done 🐔",
      forms: [
        {
          title: "Audio recording",
          text: "Interface for when recording a new audio note",
          color: "#9AC9C4",
        },
        {
          title: "Bookmarking",
          text: "Interface for when creating a new link note.",
          color: "#9AC9C4",
        },
        {
          title: "Mobile home screen",
          text: "Folders, tags, and notes lists are sorted by recent.",
          color: "#94AAF8",
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
  background-color: #17233b;
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
