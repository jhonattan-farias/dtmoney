import { Sumary } from "../Sumary"
import { TransactionsTable } from "../TransactionTable"
import { Container } from "./styles"

export const DashBoard = () => {
    return (
    <Container >
        <Sumary />
        <TransactionsTable />
    </Container>
    )
}