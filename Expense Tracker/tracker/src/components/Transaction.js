import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
   
    setShouldAnimate(true);
  }, []);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`${transaction.amount < 0 ? 'minus' : 'plus'} ${shouldAnimate ? 'slide-in' : ''}`}>
      {transaction.text} <span>{sign}{moneyFormatter(Math.abs(transaction.amount))}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};
