import '../scss/NewCardForm.scss';
import jsonLocalStorage from '../utils/jsonLocalStorage';

const NewCardForm = ({setIsCreate ,cardId,cards,setCards,updateCardId,type,boards,setBoards}) => {

   const handleFormSubmit = (e) => {
    e.preventDefault();
    const nextCards = [...cards, { cardId: cardId.current, title: e.target.title.value, body: e.target.body.value}];
    setCards(nextCards);
    
    updateCardId();
    jsonLocalStorage.setItem(type, nextCards);

    const board = boards.find((e)=>e.type===type);
    board.cards=nextCards;
    const nextBoards = boards.filter((e)=>e.type!==type);
    setBoards([...nextBoards,board]);

    e.target.title.value="";
    e.target.body.value="";
  };

  const handleCancelBtnClick = () => {
    setIsCreate(false);
  }; 

  return (
    <form className="newCardForm" onSubmit={handleFormSubmit}>
      <div className="colors">
        <div class="mintBtn"></div>
        <div class="redBtn"></div>
        <div class="blueBtn"></div>
        <div class="purpleBtn"></div>
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
      <button onClick={handleCancelBtnClick}>취소</button>
    </form>
  );
};

export default NewCardForm;
