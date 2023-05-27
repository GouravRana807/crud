import React, { useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addItem = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      text: inputValue
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setInputValue(items[index].text);
  };

  const updateItem = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const updatedItem = { ...items[editingIndex], text: inputValue };

    const updatedItems = [...items];
    updatedItems[editingIndex] = updatedItem;
    setItems(updatedItems);
    setEditingIndex(-1);
    setInputValue('');
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={addItem}>Add Item</button>
        ) : (
          <button onClick={updateItem}>Update Item</button>
        )}
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
