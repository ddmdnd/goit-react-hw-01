import React from "react";
import css from "./TransactionHistory.module.css";
import transactions from "../../transactions.json";

const TransactionHistory = () => {
  return (
    <table className={css.generalTable}>
      <thead className={css.tableHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction) => {
        return (
          <tbody className={css.tableBody}>
            <tr key={transaction.id}>
              <td className={css.tableColumn}>{transaction.type}</td>
              <td className={css.tableColumn}>{transaction.amount}</td>
              <td className={css.tableColumn}>{transaction.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;
