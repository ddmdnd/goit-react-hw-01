import React from "react";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.generalTable}>
      <thead className={css.tableHeader}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => {
        return (
          <tbody className={css.tableBody} key={item.id}>
            <tr>
              <td className={css.tableColumn}>{item.type}</td>
              <td className={css.tableColumn}>{item.amount}</td>
              <td className={css.tableColumn}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TransactionHistory;
