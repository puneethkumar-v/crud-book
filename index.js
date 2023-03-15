const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// import express from "express";
// const Tasks = require("./routes/tasks");
// import Tasks from "./routes/tasks.js";
const books = require("./routes/router");
const connectDB = require("./db/connect");
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser());
app.use(express.json());
// app.use(express.static("public"));
app.use("/api/v1/books/", books);
// app.get("/", (req, res) => {
//   res.send("This is This is cool amazing and do this hello Hello World");
// });

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
