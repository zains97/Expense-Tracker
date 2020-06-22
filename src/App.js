import React from "react";
import "./App.css";
//Importing all the components.
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountInfo from "./components/AccountInfo";
import TransactionLog from "./components/TrancasctionLog";
import GenerateTraanscation from "./components/GenerateTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountInfo />
        <TransactionLog />
        <GenerateTraanscation />
      </div>
    </GlobalProvider>
  );
}

export default App;
