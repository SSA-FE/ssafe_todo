import WorkItem from './WorkItem';
import '../scss/WorkContainer.scss';
import { useState } from 'react';
import NewItemForm from './NewItemForm';

const WorkContainer = ({ children, works }) => {
  const [mode, setMode] = useState('');

  let newItemForm = null;

  const onPlusBtnClick = () => {
    return setMode('create');
  };

  const onCancelBtnClick = () => {
    return setMode('');
  };

  if (mode === 'create') {
    newItemForm = <NewItemForm onCancelBtnClick={onCancelBtnClick} />;
  }

  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <div className="containerContent">
        {works.map((work) => (
          <WorkItem work={work}></WorkItem>
        ))}
      </div>
      {newItemForm}
      <button onClick={onPlusBtnClick}>+</button>
    </div>
  );
};

export default WorkContainer;
