import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(data => setTransaction(data))
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;