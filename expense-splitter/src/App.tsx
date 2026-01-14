import { useState } from "react";
import type { Member, Expense } from "./types";
import "./app.css";
import Footer from "./components/Footer";

import AddMember from "./components/AddMember";
import MemberList from "./components/MemberList";
import AddExpense from "./components/AddExpense";
import { calculateBalances } from "./utils/calculateBalances";
import BalanceSummary from "./components/BalanceSummary";



function App() {
  const [members, setMembers] = useState<Member[]>([]);

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addMember = (member: Member) => {
    setMembers((prev) => [...prev, member]);
  };

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  const membersWithBalances = calculateBalances(members, expenses);
  <MemberList members={membersWithBalances} />

  



 return (
  <div className="app-container">
    <div className="app-card">
      <h1>Split It!</h1>
      <p style={{ marginTop: "-8px" }}>
      Splitting made easy and fair!! 
      </p>




      <AddMember onAdd={addMember} />

      <MemberList members={membersWithBalances} />
      <BalanceSummary members={membersWithBalances} />

      <hr />

      <AddExpense members={members} onAdd={addExpense} />
      <p className="TE">Total Expenses: {expenses.length}</p>
      < Footer />

    </div>
  </div>
);

}

export default App;
