import React, { useState } from "react";

const GenerateTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();

  return (
    <div>
      <h3>New Transaction</h3>
      <form>
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
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Trasaction</button>
      </form>
    </div>
  );
};

export default GenerateTransaction;
