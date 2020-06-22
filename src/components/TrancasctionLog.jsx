import React from "react";

const TrancasctionLog = () => {
  return (
    <div>
      <h3>Transaction Log</h3>
      <ul className="list">
        <li className="plus">
          Project 1 Income
          <span>$500</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Office Expenses
          <span>-$300</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </div>
  );
};

export default TrancasctionLog;
