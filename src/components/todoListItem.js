import React, { useState } from 'react';

const TodoListItem = ({ title, content, onRemove, onUpdate,isEdit }) => {
  const [isEditing, setIsEditing] = useState(isEdit);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleRemove = () => {
    onRemove();
  };

  const handleUpdate = () => {
    // 수정된 내용을 상위 컴포넌트로 전달
    onUpdate(updatedTitle, updatedContent);

    // 수정 모드 종료
    setIsEditing(false);
  };

  return (
    <div className="todoListItem">
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