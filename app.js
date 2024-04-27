const express = require("express");
const cors = require("cors");
const processRoute=  require("./src/routes/process.routes");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Route is working");
});

// Import and use process routes
app.use("/api/v1/process", processRoute);

module.exports = app;