const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file.path);
  res.send(req.file.filename); //to save img name when update user setting
});

module.exports = router;
