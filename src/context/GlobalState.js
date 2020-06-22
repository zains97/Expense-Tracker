import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Creating the initial State
const initialState = {
  transactions: [
    { id: 1, description: "First Income", transactionAmount: 5000 },
    { id: 2, description: "First Expense", transactionAmount: 500 },
    { id: 3, description: "Second Income", transactionAmount: 2000 },
    { id: 4, description: "Second Expense", transactionAmount: 3000 },
  ],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
