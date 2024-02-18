import { useState } from "react";
import "../scss/EditCardForm.scss";
const EditCardForm = ({ onSubmit, onCancelBtnClick, editedCard, onUpdate }) => {
  const [title, setTitle] = useState(editedCard.title);
  const [body, setBody] = useState(editedCard.body);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    onUpdate(title, body);
  };

  return (
    <form className="editCardForm" onSubmit={handleSubmitBtn}>
      <div className="colors">
        <div></div>
      </div>
      <input
        className="editInputTitle"
        placeholder="해야할 일을 입력하세요."
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="editInputBody"
        placeholder="자세히 입력해주세요."
        name="body"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button type="submit">수정완료</button>
      <button onClick={onCancelBtnClick}>취소</button>
    </form>
  );
};

export default EditCardForm;
