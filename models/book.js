const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String},
  description: String,
  synopsys: String,
  thumbnail: String,
  link: String,
  saveState: {type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;