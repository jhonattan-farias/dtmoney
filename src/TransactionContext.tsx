import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api'


interface Transaction {
    id:number;
    title:string;
    amount:number;
    category:string;
    createdAt:number;
}

interface TransactionChildrenProps {
    children:ReactNode;
}


type CreateTransaction = Omit<Transaction,'id'| 'createdAt'>;

interface CreateNewTransactionData{
    transactions:Transaction[];
    createTransaction: (transaction:CreateTransaction) => Promise<void>;  
} 


export const TransactionsContext = createContext<CreateNewTransactionData>(
    {} as CreateNewTransactionData
    )

export const TransactionsProvider = ({children}:TransactionChildrenProps) => {
      
    const [transactions,setTransactions] = useState<Transaction[]>([])

    useEffect(() =>{
        api.get('/transactions')
        .then(data => setTransactions(data.data.transactions))
    },[])

    const createTransaction = async (transactionInput:CreateTransaction) => {
      const response = await api.post('/transactions',transactionInput)

      const {transaction} = response.data

      setTransactions([...transactions,transaction])

    }

    return(
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}