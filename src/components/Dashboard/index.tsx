import { TransactionsContext } from "../../TransactionContext"
import { Sumary } from "../Sumary"
import { TransactionsTable } from "../TransactionTable"
import { Container } from "./styles"

export const DashBoard = () => {
    return (
        <TransactionsContext.Provider value={[]}>
    <Container >
        <Sumary />
        <TransactionsTable />
    </Container>
        </TransactionsContext.Provider>
    )
}