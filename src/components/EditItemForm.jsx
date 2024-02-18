import { useState } from "react";
import "../scss/EditItemForm.scss";
const EditItemForm = ({ onSubmit, onCancelBtnClick, editedItem, onUpdate }) => {
  const [title, setTitle] = useState(editedItem.title);
  const [body, setBody] = useState(editedItem.body);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    onUpdate(title, body);
  };

  return (
    <form className="EditItemForm" onSubmit={handleSubmitBtn}>
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

export default EditItemForm;
