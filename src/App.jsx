import "./App.css";

import AddButton from "./components/AddButton";
import AddCategoryForm from "./components/AddCategoryForm";
import AddExpenseForm from "./components/AddExpenseForm";
import Chart from "./components/Chart";
import ExpenseCard from "./components/ExpenseCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getAllExpenses = async () => {
      const response = await axios.get("http://localhost:3000/api/expenses", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2hhdmluIFNoYW5rYXIiLCJ1c2VybmFtZSI6ImtoYXZpbnNoYW5rYXIiLCJpZCI6IjY0NTNkOGZiZWJkMjEzNjRmNGI0ZDNjNiIsImlhdCI6MTY4MzIxNjY0NH0.8oz5FrGbA0_wseGqIMh0JWfIxbx89TUqMScz5u30YfM",
        },
      });
      if (response.status === 200) {
        setExpenses(response.data);
      }
    };

    getAllExpenses();
  }, [showAddExpenseForm]);

  return (
    <>
      <div className="container position-relative">
        <h1 className="text-center">Expense Tracker</h1>

        <Chart />

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
