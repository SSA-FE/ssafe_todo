import React from "react";
import styled from "styled-components";

// useState 사용
// 1. 버튼 만들고
// 누르면 작성창 뜨게 (useState False->True , , 조건부 렌더링(버튼누르면))

// 2. 작성창은 title, contents
// 3. 작성한 내용이 useState에 담기게 . (typing할 때마다 )
// 4. useState [title, settitle]
// 5. useState [contents, setcontents]

const Menus = styled.div`
  max-width: 320px;
  color: white;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const MenuMod = styled(Menus)`
  height: 112px;
  background-color: #b0bec5;
  &:hover {
    background-color: #607d8b;
  }
`;

const Header = styled.div`
  height: 90px;
`;

function Menu() {
  return (
    <MenuMod>
      <Header>
        <h3>Add Element</h3>
        Opens when clicking on the thumbnail in the list or on the image in the
        note
      </Header>
    </MenuMod>
  );
}

export default Menu;
