// const book = require("../model/book");
const Book = require("../model/book");
const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json({ book });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }
};
const createBook = async (req, res) => {
  //   res.send("This is post all tasks");
  //   res.send("ehh");
  // res.send("helllo");
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }

  // res.send(res.json(req.body));
  // res.json(req.body);
  // console.log(req.body);
  //   console.log(task);
};
const getOneBook = async (req, res) => {
  try {
    const { id: isbn } = req.params;
    const book = await Book.findOne({ isbn: isbn });
    if (!book) {
      return res
        .status(404)
        .json({ mssg: `No book found with an ID: ${isbn}` });
    }
    res.status(200).json({ book });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
const updateOneBook = async (req, res) => {
  try {
    const { id: isbn } = req.params;
    const book = await Book.findOneAndUpdate({ isbn: isbn }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res
        .status(404)
        .json({ mssg: `No book found with an ID: ${isbn}` });
    }
    res.status(200).json({ book });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
const deleteOneBook = async (req, res) => {
  try {
    const { id: isbn } = req.params;
    const book = await Book.findOneAndDelete({ isbn: isbn });
    if (!book) {
      return res
        .status(404)
        .json({ mssg: `No book found with an ID: ${isbn}` });
    }
    res.status(200).json({ isbn });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
module.exports = {
  getAllBooks,
  createBook,
  getOneBook,
  updateOneBook,
  deleteOneBook,
};
