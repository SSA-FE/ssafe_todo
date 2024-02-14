import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Menus = styled.div`
  max-width: 320px;
  color: white;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const MenuAdd = styled(Menus)`
  width: 320px;
  height: 112px;
  background-color: #b0bec5;
  padding-top: 25px;
`;

const TextTitle = styled.textarea`
  font-size: 19px;
  font-weight: bold;
  width: 320px;
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

const TextContents = styled.textarea`
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

const StoreButton = styled.button`
  width: 100px;
  font-size: 15px;
`;

// 로컬 스토리지에 저장

/////// ///////


function AddMenu() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    }

    if (name === "contents") {
      setContents(value);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const storeText = () => {
    localStorage.setItem("title", title);
    localStorage.setItem("contents", contents);
  };

  return (
    <>
      <MenuAdd>
        <TextTitle
          name="title"
          onChange={onChange}
          value={title}
          placeholder="Add Element"
        />
        <TextContents
          name="contents"
          onChange={onChange}
          value={contents}
          placeholder="input text"
        />
        <StoreButton onClick={storeText}>저장</StoreButton>
      </MenuAdd>
    </>
  );
}

export default AddMenu;
