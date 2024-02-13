import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyleForm>
      {/* <FormTitle>{props.formTitle} </FormTitle>
            <FormText>{props.formText}</FormText> */}
    </StyleForm>
  );
};

const StyleForm = styled.div`
  display: block;
  width: 32rem;
  height: 7.2rem;
  max-height: 14rem;
  margin: 0 2.4rem 1.6rem 2.4rem;

  background-color: #7678d1;
  border-radius: 0.8rem;
`;

export default Form;
