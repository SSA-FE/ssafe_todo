import WorkItem from './WorkItem';
import '../scss/WorkContainer.scss';
import { useState } from 'react';
import NewItemForm from './NewItemForm';
import jsonLocalStorage from '../utils/jsonLocalStorage';

const WorkContainer = ({ children, type }) => {
  const categories = ['todos', 'progresses', 'completes'];
  const [mode, setMode] = useState('');
  const [items, setItems] = useState(jsonLocalStorage.getItem(type) || []);
  const [id, setId] = useState(0);
  let newItemForm = null;

  const onPlusBtnClick = () => {
    return setMode('create');
  };

  const onCancelBtnClick = () => {
    return setMode('');
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const _title = e.target.title.value;
    const _body = e.target.body.value;
    const newItem = { id: id, title: _title, body: _body };
    const nextItems = [...items, newItem];
    setItems(nextItems);
    for (let category of categories) {
      if (category === type) jsonLocalStorage.setItem(type, items);
    }
    setId(id + 1);
    //등록시 초기화 기능 생성
    //setValue해야함
  };

  if (mode === 'create') {
    newItemForm = (
      <NewItemForm
        onCancelBtnClick={onCancelBtnClick}
        onSubmit={handleFormSubmit}
      />
    );
  }

  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <div className="containerContent">
        {items.map((item) => (
          <WorkItem work={item}></WorkItem>
        ))}
      </div>
      {newItemForm}
      <button onClick={onPlusBtnClick}>+</button>
    </div>
  );
};

export default WorkContainer;
