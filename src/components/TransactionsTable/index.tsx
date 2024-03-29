import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";



export function TransactionTable() {
  const {transactions} = useContext(TransactionsContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {/* Formata em moeda REAL */}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transaction.amount)}
              </td>
            <td>{transaction.category}</td>
            <td>
              {/* Formata no fuso brasileiro */}
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}