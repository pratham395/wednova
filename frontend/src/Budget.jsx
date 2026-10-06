import React, { useEffect, useState } from "react";
import "./budget.css";

function Budget() {
  const [budgets, setBudgets] = useState([]);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // Fetch budget data
  useEffect(() => {
    fetch("http://localhost:5000/api/budget")
      .then((res) => res.json())
      .then((data) => {
        setBudgets(data);
      })
      .catch((error) => {
        console.error("Error fetching budget:", error);
      });
  }, []);

  // Add expense
  const handleAddBudget = async (e) => {
    e.preventDefault();

    if (!category || !description || !amount) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/budget",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category,
            description,
            amount: Number(amount),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to add expense");
        return;
      }

      setBudgets((prevBudgets) => [...prevBudgets, data]);

      setCategory("");
      setDescription("");
      setAmount("");

      alert("Expense added successfully!");
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Server error. Make sure backend is running.");
    }
  };

  // Delete expense
  const deleteBudget = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/budget/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        alert("Failed to delete expense");
        return;
      }

      setBudgets((prevBudgets) =>
        prevBudgets.filter((budget) => budget._id !== id)
      );
    } catch (error) {
      console.error("Error deleting expense:", error);
      alert("Server error.");
    }
  };

  // Calculate total
  const totalUsed = budgets.reduce(
    (total, budget) => total + Number(budget.amount),
    0
  );

  return (
    <div className="budget-page">

      <div className="budget-header">
        <h1>💰 Wedding Budget</h1>
        <p>Track and manage your wedding expenses</p>
      </div>

      {/* Total */}
      <div className="budget-summary">
        <div>
          <span>Total Budget Used</span>
          <h2>₹{totalUsed.toLocaleString("en-IN")}</h2>
        </div>

        <div className="budget-count">
          {budgets.length} Expenses
        </div>
      </div>

      {/* Add Expense */}
      <div className="budget-form-card">

        <h2>➕ Add Expense</h2>

        <form onSubmit={handleAddBudget}>

          <div className="budget-form-row">

            <div className="budget-form-group">
              <label>Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Venue">Venue</option>
                <option value="Catering">Catering</option>
                <option value="Photography">Photography</option>
                <option value="Decoration">Decoration</option>
                <option value="Music">Music</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="budget-form-group">
              <label>Amount</label>

              <input
                type="number"
                placeholder="e.g. 15000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

          </div>

          <div className="budget-form-group">
            <label>Description</label>

            <input
              type="text"
              placeholder="e.g. Wedding catering service"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit">
            Add Expense
          </button>

        </form>
      </div>

      {/* Expenses */}
      <div className="expenses-section">

        <h2>Your Expenses</h2>

        {budgets.length === 0 ? (
          <p className="no-expenses">
            No expenses added yet.
          </p>
        ) : (
          <div className="expense-grid">

            {budgets.map((budget) => (

              <div
                className="expense-card"
                key={budget._id}
              >

                <div className="expense-icon">
                  💰
                </div>

                <div className="expense-info">

                  <h3>{budget.category}</h3>

                  <p>{budget.description}</p>

                </div>

                <div className="expense-right">

                  <strong>
                    ₹{Number(budget.amount).toLocaleString("en-IN")}
                  </strong>

                  <button
                    onClick={() => deleteBudget(budget._id)}
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Budget;