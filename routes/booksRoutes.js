const express = require("express");
const booksController = require("./../controllers/booksController");

const router = express.Router();

router
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.addBook);

router
  .route("/:id")
  .get(booksController.getBook)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = router;
