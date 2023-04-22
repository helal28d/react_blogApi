const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("mongo db connected"))
  .catch((err) => console.log(err));
app.use("/", (req, res) => {
  console.log("main url");
});
app.listen(5000, () => {
  console.log("backend connected");
});
