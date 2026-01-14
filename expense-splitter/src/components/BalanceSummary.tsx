import type { Member } from "../types";
import "./BalanceSummary.css";

type Props = {
  members: Member[];
};

function BalanceSummary({ members }: Props) {
  const debtors = members
    .filter((m) => m.balance < 0)
    .map((m) => ({ ...m }));

  const creditors = members
    .filter((m) => m.balance > 0)
    .map((m) => ({ ...m }));

  const settlements: string[] = [];

  debtors.forEach((debtor) => {
    creditors.forEach((creditor) => {
      if (debtor.balance === 0 || creditor.balance === 0) return;

      const amount = Math.min(
        Math.abs(debtor.balance),
        creditor.balance
      );

      debtor.balance += amount;     
      creditor.balance -= amount;   

      settlements.push(
        `${debtor.name} owes ${creditor.name} ₹${amount}`
      );
    });
  });
  if (members.length < 2) {
  return null;
}


  if (settlements.length === 0) {
    return <p>All settled 🎉</p>;
  }

  return (
     <div className="summary-card">
    <h3>Who owes whom</h3>

    <div className="summary-list">
      {settlements.map((text, i) => (
        <div className="summary-item" key={i}>
          {text}
        </div>
      ))}
    </div>
  </div>
);
}

export default BalanceSummary;
