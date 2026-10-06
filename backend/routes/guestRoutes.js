const express = require("express");
const router = express.Router();
const Guest = require("../models/Guest");

// GET all guests
router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new guest
router.post("/", async (req, res) => {
  try {
    const guest = new Guest(req.body);
    const savedGuest = await guest.save();

    res.status(201).json(savedGuest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE guest
router.delete("/:id", async (req, res) => {
  try {
    const guest = await Guest.findByIdAndDelete(req.params.id);

    if (!guest) {
      return res.status(404).json({
        message: "Guest not found"
      });
    }

    res.json({
      message: "Guest deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;