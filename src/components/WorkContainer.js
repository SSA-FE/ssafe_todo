import WorkItem from "./WorkItem";
import "../scss/WorkContainer.scss";
import { useState } from "react";
import NewItemForm from "./NewItemForm";
import EditItemForm from "./EditItemForm";
import jsonLocalStorage from "../utils/jsonLocalStorage";

const WorkContainer = ({ children, type, handleMoveTodoBtn }) => {
  const categories = ["todos", "progresses", "completes"];
  const [mode, setMode] = useState("");
  const [items, setItems] = useState(jsonLocalStorage.getItem(type) || []);
  const [id, setId] = useState(0);
  const [editedItem, setEditedItem] = useState(null);
  let itemForm = null;

  const handlePlusBtnClick = () => {
    return setMode("create");
  };

  const handleCancelBtnClick = () => {
    return setMode("read");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const _title = e.target.title.value;
    const _body = e.target.body.value;
    const newItem = { id: id, title: _title, body: _body };
    const nextItems = [...items, newItem];

    setItems(nextItems);
    jsonLocalStorage.setItem(type, nextItems);
    setId(id + 1);
  };

  const onUpdate = (_title, _body) => {
    const nextItems = [];
    for (let item of items) {
      if (item.id !== editedItem.id) nextItems.push(item);
    }
    const newItem = { id: editedItem.id, title: _title, body: _body };
    nextItems.push(newItem);

    setItems(nextItems);
    jsonLocalStorage.setItem(type, nextItems);
    setMode("read");
  };
  const handleCloseBtnClick = (itemId) => {
    let nextItems = [];
    for (let item of items) {
      if (item.id !== itemId) nextItems.push(item);
    }
    jsonLocalStorage.setItem(type, nextItems);
    setItems(nextItems);
  };
  const handleEditBtnClick = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setMode("edit");
    setEditedItem(selectedItem);
  };

  if (mode === "create") {
    itemForm = (
      <NewItemForm
        onCancelBtnClick={handleCancelBtnClick}
        onSubmit={handleFormSubmit}
      />
    );
  }
  if (mode === "edit") {
    itemForm = (
      <EditItemForm
        onCancelBtnClick={handleCancelBtnClick}
        editedItem={editedItem}
        onUpdate={onUpdate}
      />
    );
  }

  return (
    <div className="WorkContainer">
      <h2 className="containerTitle">{children}</h2>
      <div className="containerContent">
        {items.map((item) => (
          <WorkItem
            id={item.id}
            work={item}
            handleCloseBtnClick={handleCloseBtnClick}
            handleEditBtnClick={handleEditBtnClick}
            handleMoveTodoBtn={handleMoveTodoBtn}
          ></WorkItem>
        ))}
      </div>
      {itemForm}
      <button onClick={handlePlusBtnClick}>+</button>
    </div>
  );
};

export default WorkContainer;
