const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);