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

// Declarations
const website = path.join(__dirname, "../client/dist", "index.html")

// Frontend
app.get("/", (req, res) =>
  res.sendFile(website)
);
app.get("/apps", (req, res) =>
  res.sendFile(website)
);
app.get("/work", (req, res) =>
  res.sendFile(website)
);
app.get("/about", (req, res) =>
  res.sendFile(website))
);
app.get("/contact", (req, res) =>
  res.sendFile(website)
);

// Routes
const test = require("./api/test.js");

// Endpoints
app.use("/api/test", test);

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found</h1>")
});

// Listener
app.listen(PORT, () => {
  console.log("Server Port: " + PORT);
});
