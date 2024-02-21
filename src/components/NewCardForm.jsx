import '../scss/NewCardForm.scss';
import '../scss/ColorOption.scss'
import jsonLocalStorage from '../utils/jsonLocalStorage';
import { useState } from 'react';

const NewCardForm = ({setIsCreate ,cardId,cards,setCards,updateCardId,type,boards,setBoards}) => {
  const btnColor = {
    mintBtn:"rgba(0, 178, 148, 1)",
    redBtn:"rgba(217, 53, 53, 1)",
    blueBtn:"rgba(48, 127, 226, 1)",
    purpleBtn:"rgba(118, 120, 209, 1)",
  };
  const [color, setColor] = useState(btnColor.mintBtn);
    //TODO: 클릭시 테두리
  const handleColorBtnClick = (col) =>{
          setColor(btnColor[col]);
  }

  const handleFormSubmit = (e) => {
  e.preventDefault();
  const nextCards = [...cards, { cardId: cardId.current, title: e.target.title.value, body: e.target.body.value, color:color}].sort((a, b) =>a.cardId - b.cardId);
  setCards(nextCards);
  
  updateCardId();
  jsonLocalStorage.setItem(type, nextCards);
  jsonLocalStorage.setItem("cardId",cardId.current);
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
          {Object.keys(btnColor).map((col,idx) => {return <button type="button" key={idx} className={col} onClick={()=>handleColorBtnClick(col)}></button>})}
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
