import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext'

import { Container } from "./styles"

export const Sumary = () => {
    const {transactions} = useContext(TransactionsContext)

    const sumary = transactions.reduce((acc,transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        }
        else{
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    },
    
 {
        deposit:0,
        withdraw:0,
        total:0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>

                <strong>
                    {sumary.deposit}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>

                <strong>
                   -{sumary.withdraw}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>

                <strong>
                    {sumary.total}
                </strong>
            </div>
        </Container>
    )
}