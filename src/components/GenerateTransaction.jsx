import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const GenerateTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);

  // const [text, setText] = useState("");
  // const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>New Transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            placeholder="Transcation Details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transaction-amount">Transaction Amount</label>
          <input
            type="number"
            placeholder="Enter transaction amount"
            id="transaction-amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(parseInt(e.target.value))}
          />
        </div>
        <button className="btn">Add Trasaction</button>
      </form>
    </div>
  );
};

export default GenerateTransaction;
