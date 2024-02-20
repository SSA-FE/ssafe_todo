import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const Card = ({ inputText, cardId }) => {
  const [clicked, setClicked] = useState(false);
  const useAppContext = useContext(AppContext);

  const handleClick = (e) => {
    setClicked(!clicked);
  };

  return;
};

export default Card;
