import React, { useState } from 'react';

const TodoListItem = ({ title, content, onRemove, onUpdate,isEdit,onMoveProgress,onMoveDone,onMoveTodo }) => {
  const [isEditing, setIsEditing] = useState(isEdit);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [isHovered, setIsHovered] = useState(false);

  const handleRemove = () => {
    onRemove();
  };

  const handleUpdate = () => {
    onUpdate(updatedTitle, updatedContent);
    setIsEditing(false);
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
  return (
    <div className="todoListItem" 
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
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            className="todoListEditContent"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button className="todoListEditBtn" onClick={handleUpdate}>저장</button>
          <button className="todoListRedBtn"></button>
          <button className="todoListBlueBtn"></button>
          <button className="todoListGreenBtn"></button>
          <button className="todoListPurpleBtn"></button>

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