import React from "react";
import styled from "styled-components";


const Card = styled.div`
  max-width: 320px;
  height: 112px;
  color: white;
  background-color: #b0bec5;
  border-radius: 8px;
  text-align: left;
  padding: 2% 5% 7% 7%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Header = styled.div`
  height: 90px;
`;

function CardEx() {
  return (
    <Card>
      <Header>
        <h3>Edit and Delete</h3>
        handle
      </Header>
    </Card>
  );
}

export default CardEx;
