const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const authRoute = require("./routes/auth"); //routing
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(console.log("mongodb online  connected"))
  .catch((err) => console.log(err));
// app.use("/", (req, res) => {
//   console.log("main url");
// });

//upload images into images folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); //from client
  },
});
const upload = multer({ storage: storage });
app.post("api/uplaod", upload.single("file"), (req, res) => {
  res.status(200).json("file uploaded");
});
app.use("/api/auth", authRoute); //use routing or we can add /api/auth
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.listen(5000, () => {
  console.log("backend connected");
});
