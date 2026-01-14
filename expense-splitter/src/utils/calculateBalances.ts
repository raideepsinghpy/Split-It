import type { Member, Expense } from "../types";

export function calculateBalances(
  members: Member[],
  expenses: Expense[]
): Member[] {
  const updatedMembers = members.map((m) => ({
    ...m,
    balance: 0,
  }));

  expenses.forEach((expense) => {
    const paidByMember = updatedMembers.find(
      (m) => m.id === expense.paidBy
    );
    if (!paidByMember) return;

    if (expense.customSplit) {
      Object.entries(expense.customSplit).forEach(
        ([memberId, share]) => {
          const member = updatedMembers.find(
            (m) => m.id === Number(memberId)
          );
          if (!member) return;

          member.balance -= share;
        }
      );

      paidByMember.balance += expense.amount;
    } else {
      const share = expense.amount / expense.splitAmong.length;

      expense.splitAmong.forEach((id) => {
        const member = updatedMembers.find((m) => m.id === id);
        if (!member) return;

        member.balance -= share;
      });

      paidByMember.balance += expense.amount;
    }
  });

  return updatedMembers;
}
