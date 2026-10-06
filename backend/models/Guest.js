const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    relation: {
      type: String
    },

    rsvp: {
      type: String,
      enum: ["Pending", "Accepted", "Declined"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Guest", guestSchema);