import '../scss/NewItemForm.scss';

const NewItemForm = ({ onSubmit, onCancelBtnClick }) => {
  return (
    <form className="newItemForm" onSubmit={onSubmit}>
      <div className="colors">
        <div></div>
      </div>
      <input
        className="inputTitle"
        placeholder="해야할 일을 입력하세요."
        name="title"
      />
      <textarea
        className="inputBody"
        placeholder="자세히 입력해주세요."
        name="body"
      />
      <button type="submit">등록</button>
      <button onClick={onCancelBtnClick}>취소</button>
    </form>
  );
};

export default NewItemForm;
