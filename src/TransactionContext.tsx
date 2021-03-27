import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api'


interface Transactions {
    id:number;
    title:string;
    amount:number;
    category:string;
    createdAt:string;
}

interface TransactionChildrenProps {
    children:ReactNode;
}

export const TransactionsContext = createContext<Transactions[]>([])

export const TransactionsProvider = ({children}:TransactionChildrenProps) => {
      
    const [transactions,setTransactions] = useState<Transactions[]>([])

    useEffect(() =>{
        api.get('/transactions')
        .then(data => setTransactions(data.data.transactions))
    },[])

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )

}