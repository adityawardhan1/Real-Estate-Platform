const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const propertyRoutes = require("./routes/propertyRoutes"); // ✅ Import your property routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/properties", propertyRoutes); // ✅ Mount property API route

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server started on port 5000"));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
