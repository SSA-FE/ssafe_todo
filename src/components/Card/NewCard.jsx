import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const NewCard = ({ inputText, cardId }) => {
  const [clicked, setClicked] = useState(false);
  const useAppContext = useContext(AppContext);

  const handleClick = (e) => {
    setClicked(!clicked);
  };

  return; // {title, contents}
  // 여기에 NewCard의 속성 자체를 정의해서(입력받은 내용이 들어간 카드) Add Card에 props로 보내기?
};

export default NewCard;
