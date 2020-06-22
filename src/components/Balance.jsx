import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h3>Your Balance</h3>
      <h1>{`$${total}`}</h1>
    </div>
  );
};

export default Balance;
