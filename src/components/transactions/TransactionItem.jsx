/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>
          {transaction.amount >= 0
            ? "$" + transaction.amount
            : "-$" + transaction.amount * -1}
        </span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="bg-indigo-700 text-white font-bold py-2 px-2 rounded-full ml-2"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
