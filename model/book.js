const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
  isbn: {type: String, required: true},
  name: {type: String, required: true},
  author: {type: String, required: true},
  price: {type: String, required: true},
});

module.exports = mongoose.model("Book", BookSchema);
