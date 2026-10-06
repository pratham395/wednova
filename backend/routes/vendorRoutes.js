const express = require("express");
const router = express.Router();

const Vendor = require("../models/Vendor");

// GET all vendors
router.get("/", async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD vendor
router.post("/", async (req, res) => {
  try {
    const { name, type, location, price } = req.body;

    const newVendor = new Vendor({
      name,
      type,
      location,
      price,
    });

    const savedVendor = await newVendor.save();

    res.status(201).json(savedVendor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE vendor
router.delete("/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);

    if (!vendor) {
      return res.status(404).json({
        message: "Vendor not found",
      });
    }

    res.json({
      message: "Vendor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;