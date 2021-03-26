import {createContext, useEffect, useState} from 'react'

export const TransactionsContext = createContext([])



export const TransactionsProvider = () => {
      
    const [transactions,setTransactions] = useState<Transactions[]>([])

    useEffect(() =>{
        api.get('/transactions')
        .then(data => setTransactions(data.data.transactions))
    },[transactions])

}