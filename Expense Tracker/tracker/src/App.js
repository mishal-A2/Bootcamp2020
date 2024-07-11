import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import ThemeSwitcher from './components/ThemeSwitcher.js';

import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <ThemeSwitcher/>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;