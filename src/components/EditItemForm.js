import '../scss/EditItemForm.scss';
const EditItemForm = ({ onSubmit, onCancelBtnClick }) => {
    return (
      <form className="EditItemForm" onSubmit={onSubmit}>
        <div className="colors">
          <div></div>
        </div>
        <input
          className="editInputTitle"
          placeholder="해야할 일을 입력하세요."
          name="title"
        />
        <textarea
          className="editInputBody"
          placeholder="자세히 입력해주세요."
          name="body"
        />
        <button type="submit">수정완료</button>
        <button onClick={onCancelBtnClick}>취소</button>
      </form>
    );
  };
  
  export default EditItemForm;