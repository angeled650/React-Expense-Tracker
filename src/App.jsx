import Balance from "./components/Balance";
import ExpenseChart from "./components/ExpenseChart";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center overflow-auto">
        <div className="container mx-auto my-auto py-5 w-3/6 ">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2 flex-col md:flex-row">
            <div>
              <h1 className="text-4xl font-bold">Registro Finanzas</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
