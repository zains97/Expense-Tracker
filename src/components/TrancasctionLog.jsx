import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TrancasctionLog = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction Log</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transaction key={transactions.id} transaction={transactions} />
        ))}
      </ul>
    </div>
  );
};

export default TrancasctionLog;
