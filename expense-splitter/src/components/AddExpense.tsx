import { useState } from "react";
import type { Member, Expense } from "../types";
import "./AddExpense.css";


type Props = {
  members: Member[];
  onAdd: (expense: Expense) => void;
};

function AddExpense({ members, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [paidBy, setPaidBy] = useState<number | null>(null);
  const [splitMode, setSplitMode] = useState<"equal" | "custom">("equal");
  const [customSplit, setCustomSplit] = useState<Record<number, number>>({});

  const handleAddExpense = () => {
    if (!title || amount <= 0 || paidBy === null) return;
    if (members.length === 0) return;

    const splitAmong = members.map((m) => m.id);

    const expense: Expense = {
      id: Date.now(),
      title,
      amount,
      paidBy,
      splitAmong,
      customSplit: splitMode === "custom" ? customSplit : undefined,
    };

    onAdd(expense);

    setTitle("");
    setAmount(0);
    setPaidBy(null);
    setCustomSplit({});
  };

  return (
     <div className="expense-card">
        <h3>Add Expense</h3>

      <input
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <br /><br />

      <select
        value={paidBy ?? ""}
        onChange={(e) => setPaidBy(Number(e.target.value))}
      >
        <option value="">Paid by</option>
        {members.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>

      <br /><br />

     <div className="split-toggle">
  <button
    type="button"
    className={splitMode === "equal" ? "active" : ""}
    onClick={() => setSplitMode("equal")}
  >
    Equal Split
  </button>

  <button
    type="button"
    className={splitMode === "custom" ? "active" : ""}
    onClick={() => setSplitMode("custom")}
    
  >
    Custom Split
  </button>
</div>



      {splitMode === "custom" && (
        <div style={{ marginTop: "10px" }}>
          {members.map((m) => (
            <div key={m.id}>
              {m.name} ₹
              <input
                type="number"
                onChange={(e) =>
                  setCustomSplit({
                    ...customSplit,
                    [m.id]: Number(e.target.value),
                  })
                }
              />
            </div>
          ))}
        </div>
      )}

      <br />

      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
