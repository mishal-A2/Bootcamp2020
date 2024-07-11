import React, { useState } from 'react';

function Todo_input(props) {
  const [inputText, setInputText] = useState('');

  const enterkeyhandle = (e) => {
    if (e.keyCode === 13) {
      props.additem(inputText);
      setInputText('');
    }
  };

  const handleclearlist = () => {
    const listDiv = document.querySelector('.listdiv');
    listDiv.classList.add('zoom-in');

    setTimeout(() => {
      props.clearList();
      listDiv.classList.remove('zoom-in');
      listDiv.classList.add('zoom-out');

      setTimeout(() => {
        listDiv.classList.remove('zoom-out');
      }, 300);
    }, 300);
  };

  return (
    <div className="input1">
      <input
        type="text"
        className="inputbox"
        placeholder="What is your next pending task?"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={enterkeyhandle}
      />

      <button className="addbutton" onClick={() => { props.additem(inputText); setInputText(''); }}>
        +
      </button>

      <div className="undolist">
        <button className="emptylist" onClick={handleclearlist}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default Todo_input;
