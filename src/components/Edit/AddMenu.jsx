import React, { useState } from "react";
import styled from "styled-components";

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

// useState 사용
// 1. 버튼 만들고
// 누르면 작성창 뜨게 (useState False->True , , 조건부 렌더링(버튼누르면))

// 2. 작성창은 title, contents
// 3. 작성한 내용이 useState에 담기게 . (typing할 때마다 )
// 4. useState [title, settitle]
// 5. useState [contents, setcontents]

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

  // const [isClicked, setIsClicked] = useState(false);

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
