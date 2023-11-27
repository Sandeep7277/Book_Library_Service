const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required field"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required field!"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required field!"],
    trim: true,
  },
  edition: {
    type: String,
    required: [true, "Edition is required field!"],
    trim: true,
  },
  publication: {
    type: String,
    required: [true, "Publication is required field!"],
    trim: true,
  },
  publishedYear: {
    type: Number,
    required: [true, "published year is required field!"],
    trim: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
