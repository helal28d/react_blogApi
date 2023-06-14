require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth"); //routing
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     // ssl: true,
//     useUnifiedTopology: true,
//   })
//   .then(console.log("mongodb online  connected"))
//   .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("image"), (req, res) => {
  console.log(req.file.filename);
  res.send(req.file.filename); //to save img name when update user setting
});

app.get("/", (req, res) => {
  res.send({ title: "home" });
});
app.use("/api/auth", authRoute); //use routing or we can add /api/auth
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// app.listen(5000, () => {
//   console.log("backend connected");
// });
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
