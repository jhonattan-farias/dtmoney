import {createContext, useEffect, useState} from 'react'
import { api } from './services/api'


interface Transactions {
    id:number;
    title:string;
    amount:number;
    category:string;
    createdAt:string;
}

export const TransactionsContext = createContext<Transactions[]>([])

export const TransactionsProvider = () => {
      
    const [transactions,setTransactions] = useState<Transactions[]>([])

    useEffect(() =>{
        api.get('/transactions')
        .then(data => setTransactions(data.data.transactions))
    },[transactions])

    return(
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    )

}