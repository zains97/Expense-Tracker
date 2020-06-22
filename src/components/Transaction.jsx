import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.transactionAmount > 0 ? "plus" : "minus"}>
      {transaction.description}
      <span>{transaction.transactionAmount}</span>
      <button className="delete-btn">X</button>
    </li>
  );
};

export default Transaction;
