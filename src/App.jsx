import "./App.css";

import AddButton from "./components/AddButton";
import AddCategoryForm from "./components/AddCategoryForm";
import AddExpenseForm from "./components/AddExpenseForm";
import Chart from "./components/Chart";
import ExpenseCard from "./components/ExpenseCard";
import axios from "axios";
import { subDays } from "date-fns";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const { currentUser, signout } = useAuth();

  useEffect(() => {
    const getAllExpenses = async () => {
      const response = await axios.get("http://localhost:3000/api/expenses", {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      if (response.status === 200) {
        setExpenses(response.data);
      }
    };

    getAllExpenses();
  }, [showAddExpenseForm, currentUser]);

  const summedExpenses = expenses.reduce((acc, expense) => {
    const date = expense.date.slice(0, 10);
    if (date in acc) {
      acc[date] += expense.amount;
    } else {
      acc[date] = expense.amount;
    }

    return acc;
  }, {});

  return (
    <>
      <div className="container position-relative">
        <div>
          <h1 className="text-center">Expense Tracker</h1>
          <button onClick={signout}>Signout</button>
        </div>

        <Chart
          data={{
            labels: Array(15)
              .fill(null)
              .map((_, i) => subDays(new Date(), i)),
            datasets: [
              {
                label: "Expenses",
                data: Array(15)
                  .fill(null)
                  .map((_, i) => {
                    const date = subDays(new Date(), i)
                      .toISOString()
                      .slice(0, 10);
                    if (date in summedExpenses) {
                      return summedExpenses[date];
                    }

                    return 0;
                  }),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                lineTension: 0.3,
              },
            ],
          }}
        />

        <div
          style={{ justifyContent: "center" }}
          className="mt-5 d-flex gap-3 flex-wrap"
        >
          {expenses.map((expense) => (
            <ExpenseCard key={expense._id} expense={expense} />
          ))}
        </div>

        {/* search bar */}
        <AddExpenseForm
          show={showAddExpenseForm}
          setShowAddExpenseForm={setShowAddExpenseForm}
        />
        <AddCategoryForm
          show={showAddCategoryForm}
          setShowAddCategoryForm={setShowAddCategoryForm}
        />
        <AddButton
          setShowAddCategoryForm={setShowAddCategoryForm}
          setShowAddExpenseForm={setShowAddExpenseForm}
        />
      </div>
    </>
  );
}

export default App;
