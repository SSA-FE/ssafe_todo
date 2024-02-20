import '../scss/NewCardForm.scss';

const NewCardForm = ({ onCancelBtnClick,handleFormSubmit}) => {

  return (
    <form className="newCardForm" onSubmit={handleFormSubmit}>
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

export default NewCardForm;
