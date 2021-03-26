import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionContext'

import { Container } from "./styles"

export const Sumary = () => {
    const data = useContext(TransactionsContext)

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>

                <strong>
                    R$1000
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas"/>
                </header>

                <strong>
                   - R$500
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>

                <strong>
                    R$500
                </strong>
            </div>
        </Container>
    )
}