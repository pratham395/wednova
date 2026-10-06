const express = require("express");
const router = express.Router();

const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD event
router.post("/", async (req, res) => {
  try {
    const { name, date, time, venue } = req.body;

    const newEvent = new Event({
      name,
      date,
      time,
      venue,
    });

    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE event
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;