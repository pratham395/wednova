const express = require("express");
const router = express.Router();

const Budget = require("../models/Budget");

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find().sort({ createdAt: -1 });

    res.json(budgets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD expense
router.post("/", async (req, res) => {
  try {
    const { category, description, amount } = req.body;

    if (!category || !description || amount === undefined) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const newBudget = new Budget({
      category,
      description,
      amount,
    });

    const savedBudget = await newBudget.save();

    res.status(201).json(savedBudget);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE expense
router.delete("/:id", async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);

    if (!budget) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;