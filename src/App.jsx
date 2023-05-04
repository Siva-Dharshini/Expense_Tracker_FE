import "./App.css";

import AddButton from "./components/AddButton";
import AddCategoryForm from "./components/AddCategoryForm";
import AddExpenseForm from "./components/AddExpenseForm";
import Chart from "./components/Chart";
import { useState } from "react";

function App() {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Expense Tracker</h1>

        <Chart />

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
