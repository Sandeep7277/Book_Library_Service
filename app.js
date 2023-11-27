const express = require("express");
const morgan = require("morgan");

let app = express();

//Middleware Calling
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

module.exports = app;
