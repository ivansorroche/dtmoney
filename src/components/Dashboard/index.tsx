import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./style";

export function DashBord() {
  return (
  <Container>
    <Summary />
    <TransactionTable />
  </Container>
  );
}