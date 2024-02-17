import React, { useState,useEffect  } from 'react';

const TodoListItem = ({ title, content, onRemove, onUpdate,isEdit,onMoveProgress,onMoveDone,onMoveTodo }) => {
  const [isEditing, setIsEditing] = useState(isEdit);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

 
  const handleRemove = () => {
    onRemove();
  }; 

  const handleUpdate = () => {
    onUpdate(updatedTitle, updatedContent);
    setIsEditing(false);
    setIsHovered(false);
    
  };
  const handleMoveProgress=()=>{
    onMoveProgress();
  }
  const handleMoveDone=()=>{
    onMoveDone();
  }
  const handleMoveTodo=()=>{
    onMoveTodo();
  }
  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className={`todoListItem${selectedColor ? ` ${selectedColor}` : ''}`} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      {isHovered && !isEditing && (
        <div className="hoverButtons">
          <button className="hoverMoveTodoBtn" onClick={handleMoveTodo}>Move To do 🐣</button>
          <button className="hoverMoveProgressBtn" onClick={handleMoveProgress}>Move Progress 🐥</button>
          <button className="hoverMoveDoneBtn" onClick={handleMoveDone}>Move Done 🕊</button>
        </div>
      )}
      {isEditing ? (
        // 수정 모드일 때
        <div className="todoListEditContainer">
          <input
            className="todoListEditTitle"
            placeholder="Edit Title"
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            className="todoListEditContent"
            placeholder="Edit Content"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
           <img
            className="todoListItemXBtn"
            src="res/iconX.png"
            alt="X Button"
            onClick={handleRemove}
          />
          <button className="todoListEditBtn" onClick={handleUpdate}>저장</button>
          <button className="todoListRedBtn" onClick={() => handleColorButtonClick('red')}></button>
          <button className="todoListBlueBtn" onClick={() => handleColorButtonClick('blue')}></button>
          <button className="todoListGreenBtn" onClick={() => handleColorButtonClick('green')}></button>
          <button className="todoListPurpleBtn" onClick={() => handleColorButtonClick('purple')}></button>

        </div>
      ) : (
        // 일반 모드일 때
        <div>
          <div className="todoListItemTitle">{title}</div>
          <div className="todoListItemContent">{content}</div>
          <img
            className="todoListItemWriteBtn"
            src="res/iconWrite.svg"
            alt="Write Button"
            onClick={() => setIsEditing(true)}
          />
          <img
            className="todoListItemXBtn"
            src="res/iconX.png"
            alt="X Button"
            onClick={handleRemove}
          />
        </div>
      )}
    </div>
  );
};

export default TodoListItem;