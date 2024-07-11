import React, { useEffect, useState } from 'react';

function Listing({ item, newItemId, index, deleteitem }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (item.id === newItemId) {
      setShouldAnimate(true);
      setTimeout(() => {
        setShouldAnimate(false);
      }, 300);
    }
  }, [item.id, newItemId]);

  return (
    <li className={`listitems ${shouldAnimate ? 'slide-in' : ''}`}>
      {item.text}
      <span className='icons'>
        <input type='date' className='calendar' />
        <i
          className="fa-solid fa-person-circle-minus"
          onClick={() => deleteitem(index)}
        ></i>
      </span>
    </li>
  );
}

export default Listing;
