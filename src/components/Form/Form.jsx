import React from "react";
import styled from "styled-components";
import useFormStore from "../../store/store";
import ReWrite from "../../assets/button/ReWrite.svg";
import Exit from "../../assets/button/Exit.svg";

const Form = ({
  formTitle,
  formText,
  color,
  id,
  setRewrite,
  setReTitle,
  setReText,
  category,
}) => {
  const { removeForm } = useFormStore();

  const handleExitButton = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    removeForm(id);
  };

  const handleRewriteButton = () => {
    setRewrite(id);
    setReTitle(formTitle);
    setReText(formText);
  };

  // const handleCategoryButton = (button) => {
  //   if (button === "ToDo") {
  //   } else if (button === "InProgress") {
  //   } else {
  //   }
  // };

  return (
    <StyleForm color={color}>
      {/* {category === "ToDo" && (
        <>
          <button
            onClick={handleCategoryButton}
            button="InProgress"
          >
            🎡
          </button>
          <button
            onClick={handleCategoryButton}
            button="Done"
          >
            🎆
          </button>
        </>
      )}
      {category === "InProgress" && (
        <>
          <button
            onClick={handleCategoryButton}
            button="ToDo"
          >
            🎠
          </button>
          <button
            onClick={handleCategoryButton}
            button="Done"
          >
            🎆
          </button>
        </>
      )}
      {category === "Done" && (
        <>
          <button
            onClick={handleCategoryButton}
            button="ToDo"
            category={category}
          >
            🎠
          </button>
          <button
            onClick={handleCategoryButton}
            button="InProgress"
            category={category}
          >
            🎡
          </button>
        </>
      )} */}
      <FormButton>
        <ReWriteButton
          type="button"
          onClick={handleRewriteButton}
          src={ReWrite}
        />
        <ExitButton type="button" onClick={handleExitButton} src={Exit} />
      </FormButton>
      <FormTitle>{formTitle}</FormTitle>
      <FormText formText={formText}>{formText}</FormText>
    </StyleForm>
  );
};

const StyleForm = styled.div`
  display: block;
  width: 32rem;
  max-height: 14rem;
  margin: 0 2.4rem 1.6rem 2.4rem;

  background-color: ${(props) => props.color || "#c7c7c7"};
  border-radius: 0.8rem;
`;

const FormButton = styled.div`
  display: flex;
  position: relative;
  width: 4rem;
  left: 27rem;
  margin-top: 1rem;
`;

const ReWriteButton = styled.img`
  width: 1.2rem;
  padding-top: 0.28rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const ExitButton = styled.img`
  width: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`;

const FormTitle = styled.h3`
  padding-bottom: 0.7rem;
  margin-left: 2.4rem;
  height: 2.8rem;
  max-width: 22.9rem;
  max-height: 4.3rem;
  font-size: 1.7rem;
  font-family: "Inter", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FormText = styled.h3`
  position: relative;
  padding: 0 2.4rem;
  margin-bottom: 3.2rem;
  max-width: 32rem;
  max-height: 6.4rem;
  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  color: #ffffff;
  line-height: 2rem;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export default Form;
