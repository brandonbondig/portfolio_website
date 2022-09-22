const express = require("express");
const app = express();

// Port
const PORT = 8080;

// Package Imports
const cors = require("cors");

// Middleware
app.use(cors());

// Router
const test = require("./endpoints/test.js")

// Endpoints 
app.use("/test", test)


// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send({ message: "error" })
});

// Listener
app.listen(PORT, () => {
    console.log("Server Port: " + PORT);
});
