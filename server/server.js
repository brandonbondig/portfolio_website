const express = require("express");
const app = express();

// Port
const PORT = 3000;

// Package Imports
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

// Frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
  

// Routes

app.listen(PORT, () => {
  console.log("Server Port: " + PORT);
});
