import React from "react";
import styled from "styled-components";
import ReWrite from "../../assets/svg/button/ReWrite.svg";
import Exit from "../../assets/svg/button/Exit.svg";

const Form = ({ formTitle, formText, color }) => {
  return (
    <StyleForm color={color}>
      <FormButton>
        <ReWriteButton src={ReWrite}></ReWriteButton>
        <ExitButton src={Exit}></ExitButton>
      </FormButton>

      <FormTitle>{formTitle} </FormTitle>
      <FormText formText={formText}>{formText}</FormText>
    </StyleForm>
  );
};

const StyleForm = styled.div`
  display: block;
  width: 32rem;
  max-height: 14rem;
  margin: 0 2.4rem 1.6rem 2.4rem;

  background-color: ${(props) => props.color || "#7678d1"};
  border-radius: 0.8rem;
`;

const FormButton = styled.div`
  display: flex;
  position: absolute;
  left: 29rem;
  margin-top: 1rem;
`;

const ReWriteButton = styled.img`
  width: 1.2rem;
  padding-top: 0.28rem;
  margin-right: 1rem;
`;

const ExitButton = styled.img`
  width: 1.8rem;
`;

const FormTitle = styled.h3`
  padding: 2.4rem 2.4rem 0 2.4rem;
  max-width: 32rem;
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #ffffff;
  overflow-wrap: break-word;
`;

const FormText = styled.h3`
  position: relative;
  top: 0.8rem;
  padding: 0 2.4rem;
  padding-bottom: ${(props) => (props.formText ? `3.2rem` : `2.4rem`)};
  max-width: 32rem;
  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 2rem;
  overflow-wrap: break-word;
`;

export default Form;
