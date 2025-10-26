const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Add expense
router.post("/", auth, async (req, res) => {
  const expense = new Expense({ ...req.body, user: req.user._id });
  await expense.save();
  res.status(201).json(expense);
});

// List expenses (with optional category filter)
router.get("/", auth, async (req, res) => {
  const { category } = req.query;
  const filter = { user: req.user._id };
  if (category) filter.category = category;
  const expenses = await Expense.find(filter).sort({ date: -1 });
  res.json(expenses);
});

// Edit expense
router.put("/:id", auth, async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  if (!expense) return res.status(404).json({ message: "Expense not found" });
  res.json(expense);
});

// Delete expense
router.delete("/:id", auth, async (req, res) => {
  const expense = await Expense.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!expense) return res.status(404).json({ message: "Expense not found" });
  res.json({ message: "Expense deleted" });
});

module.exports = router;
// Monthly summary
router.get('/summary/monthly', auth, async (req, res) => {
  const { year, month } = req.query;  // e.g., year=2023, month=10
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);

  const summary = await Expense.aggregate([
    { $match: { user: req.user._id, date: { $gte: start, $lt: end } } },
    { $group: { _id: '$category', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } }
  ]);
  res.json(summary);
});
