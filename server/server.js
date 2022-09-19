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

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found</h1>")
});

// Frontend
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
);
app.get("/apps", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
);
app.get("/work", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
);
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
);
app.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"))
);

// Routes
const test = require("./api/test.js");

// Endpoints
app.use("/api/test", test);
// Listener
app.listen(PORT, () => {
  console.log("Server Port: " + PORT);
});
