import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');  
  const [amount, setAmount] = useState(''); 

  const { addTransaction } = useContext(GlobalContext); 

 
  const onSubmit = e => {
    e.preventDefault(); 

   
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), //random id generation
      text, 
      amount: +amount 
    };

   
    addTransaction(newTransaction);
    
    
    setText('');    
    setAmount('');   
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
       
        <div className="form-control">
          <label htmlFor="text"><h4>Reason</h4></label>
          <input type="text" 
                 value={text} 
                 onChange={(e) => setText(e.target.value)} 
                 placeholder="Enter text..." />
        </div>
      
        <div className="form-control">
          <label htmlFor="amount">
            <h4>Transaction Amount</h4>
            <br />
            (expense - , income +)
          </label>
          <input type="number" 
                 value={amount} 
                 onChange={(e) => setAmount(e.target.value)} 
                 placeholder="Enter amount..." />
        </div>
        
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
