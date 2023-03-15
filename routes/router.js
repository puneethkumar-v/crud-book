const express = require("express");
const {
  getAllBooks,
  createBook,
  getOneBook,
  updateOneBook,
  deleteOneBook,
} = require("./books");
// import express from "express";
const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getOneBook).put(updateOneBook).delete(deleteOneBook);

module.exports = router;
