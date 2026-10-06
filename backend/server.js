const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const guestRoutes = require("./routes/guestRoutes");
const eventRoutes = require("./routes/eventRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/guests", guestRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/budget", budgetRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });

// Test route
app.get("/", (req, res) => {
  res.send("WedNova Backend is Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});