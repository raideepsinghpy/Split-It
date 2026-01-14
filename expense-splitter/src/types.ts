export type Member = {
  id: number;
  name: string;
  balance: number;
};

export type Expense = {
  id: number;
  title: string;
  amount: number;
  paidBy: number;
  splitAmong: number[];
  customSplit?: Record<number, number>;
};
