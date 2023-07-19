import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount >= 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  console.log(`Income: ${totalIncome}`);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
  console.log(`Expense: ${totalExpense}`);

  let totalExpensesPercentage =
    totalIncome > 0 ? Math.round((totalExpense / totalIncome) * 100) : 100;
  console.log(`Expense %: ${totalExpensesPercentage}`);

  let totalIncomePercentage =
    totalExpense > 0 ? 100 - totalExpensesPercentage : 100;
  console.log(`Income %: ${totalIncomePercentage}`);

  if (totalExpensesPercentage === 100 && totalIncomePercentage === 100) {
    totalExpensesPercentage = 50;
    totalIncomePercentage = 50;
  }

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
};

export default ExpenseChart;