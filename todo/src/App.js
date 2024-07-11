import React, { useState } from 'react';
import './App.css';
import Todo_input from './elements/listinput';
import Listing from './elements/listing';
import ThemeSwitcher from './elements/themeswitcher';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newItemId, setNewItemId] = useState(null);

  const additem = (inputText) => {
    if (inputText !== '') {
      const newItem = { id: Date.now(), text: inputText };
      setTodolist([newItem, ...todolist]);
      setNewItemId(newItem.id);
    }
  };

  const deleteListItem = (index) => {
    setTodolist(todolist.filter((_, i) => i !== index));
  };

  const clearList = () => {
    setTodolist([]);
  };

  return (
    <div className='fist_block'>
      <div className='sec_block'>
        <ThemeSwitcher />
        <p className='appname'>
          <b>~To-Do App~</b>
        </p>
        <Todo_input additem={additem} clearList={clearList} />
        <div className='listdiv'>
          {todolist.map((addeditem, i) => (
            <Listing
              key={addeditem.id}
              item={addeditem}
              index={i}
              deleteitem={deleteListItem}
              newItemId={newItemId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
