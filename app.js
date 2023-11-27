const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/booksRoutes");

let app = express();

//Middleware Calling
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

//Routes Endpoint
app.use("/api/v1/books", bookRouter);

module.exports = app;
