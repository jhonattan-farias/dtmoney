import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { TransactionsContext } from "../../TransactionContext"
import { Container } from "./styles"

interface Transactions {
    id:number;
    title:string;
    amount:number;
    category:string;
    createdAt:string;
}

export const TransactionsTable = () => {
    
    const data = useContext(TransactionsContext)
  
    return(
     <Container>
         <table>
             <thead>
                 <tr>
                     <th>Titulo</th>
                     <th>Valor</th>
                     <th>Categoria</th>
                     <th>Data</th>
                 </tr>
             </thead>

             <tbody>
                 {transactions.map(transaction => (
                      <tr key={transaction.id}>
                      <td >
                        {transaction.title}
                      </td>
                      <td>{new Intl.NumberFormat('pt-BR',{
                          style:'currency',
                          currency:'BRL'
                      }).format(transaction.amount)}</td>
                      <td>{transaction.category}</td>
                      <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                  </tr>
                 ))}
             </tbody>
         </table>

     </Container>   

    )

}