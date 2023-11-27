const asyncErrorHandler = require("./../utils/asyncErrorHandler");
const CustomError = require("../utils/CustomError");
const Book = require("./../models/booksModel");

// Get All Books
exports.getAllBooks = asyncErrorHandler(async (req, res, next) => {
  const books = await Book.find();

  if (!books.length) {
    const error = new CustomError("No books available in Record", 404);
    return next(error);
  }
  //Sending Response
  res.status(200).json({
    Status: "Success",
    Length: books.length,
    Data: {
      books,
    },
  });
});

//Add Book
exports.addBook = asyncErrorHandler(async (req, res, next) => {
  const book = await Book.create(req.body);

  //Sending Response
  res.status(201).json({
    Status: "Success",
    Data: {
      book,
    },
  });
});

//Get Single Book
exports.getBook = asyncErrorHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    const error = new CustomError("Book with that ID is not found!", 404);
    return next(error);
  }

  //Sending Response
  res.status(200).json({
    Status: "Success",
    Data: {
      book,
    },
  });
});

//Update book
exports.updateBook = asyncErrorHandler(async (req, res, next) => {
  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updateBook) {
    const error = new CustomError("Book with that ID is not found!", 404);
    return next(error);
  }

  //Sending Response
  res.status(200).json({
    Status: "Success",
    Data: {
      Book: updateBook,
    },
  });
});

//Delete Book
exports.deleteBook = asyncErrorHandler(async (req, res, next) => {
  const deleteBook = await Book.findByIdAndDelete(req.params.id);

  if (!deleteBook) {
    const error = new CustomError("Book with that ID is not found!", 404);
    return next(error);
  }

  //Sending Response
  res.status(204).json({
    Status: "Success",
    Data: null,
  });
});
