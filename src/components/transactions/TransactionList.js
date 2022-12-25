import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

   const { transactions } = useContext(GlobalContext);


   return (
      <div>
         <ul className="list">
            {transactions.map(item => (<Transaction key={item.id} transaction={item}/>))}
         </ul>
      </div>
   )
}

export default TransactionList