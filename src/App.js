import './App.css';

import React from 'react';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import IncomeAndExpense from './components/income-expenses/IncomeAndExpense'
import TransactionList from './components/transactions/TransactionList'
import AddTransaction from './components/transactions/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeAndExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
