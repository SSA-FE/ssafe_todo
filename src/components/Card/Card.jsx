import React, { useState } from "react";
import styled from "styled-components";

const CardBye = styled.div`
  max-width: 320px;
  height: 120px;
  color: white;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  background-color: #b0bec5;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-left: 250px;
`;
const Button = styled.button`
  width: 25px;
  height: 25px;
  font-size: 15px;
  color: white;
  display: flex;
  text-align: center;
  align-itmes: center;
  border-color: transparent;
  background-color: #4db6ac;
`;

const Header = styled.div`
  height: 90px;
`;

// const [isOff, setIsOff] = useState(true);

// 삭제 기능 구현 -> App.js에서 ? -> Board에서 Card의 상태를 다뤄야하기 때문
// set 상태와 위치, value 연결 확인 .. .

function CardEx() {
  const [bye, setBye] = useState("Soon be deleted . . .");
  const [hello, setHello] = useState("Welcome");

  const byeCard = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      setBye("");
      setHello("");
    }
    // const newList = bye.filter((item) => item.id !== "bye1");
  };
  const onChange = (event) => {
    const { id, value } = event.target;
    if (id === "bye2") {
      setHello(value);
    }
  };

  return (
    <CardBye>
      <Header>
        <h3>Add Element</h3>
        <input
          id="bye1"
          value={bye}
          placeholder="bye1"
          // onChange={onChange}
        ></input>
        <input
          id="bye2"
          value={hello}
          placeholder="bye2"
          onChange={onChange}
        ></input>
        <input id="bye2" placeholder="bye3"></input>
      </Header>
      <ButtonArea>
        {/* <button onClick={() => setIsoff(!isOff)}>{isoff ? "ON" : "OFF"}</button> */}
        <Button>+</Button>
        <Button onClick={byeCard}>-</Button>
      </ButtonArea>
    </CardBye>
  );
}

export default CardEx;
