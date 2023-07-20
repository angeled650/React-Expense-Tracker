import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between gap-x-5">
      <h3>Tu Saldo</h3>
      <h1 className="text-2xl font-bold">
        {total >= 0 ? "$" + total : "-$" + total * -1}
      </h1>
    </div>
  );
};

export default Balance;
