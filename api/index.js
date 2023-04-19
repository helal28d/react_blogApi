const express = require("express");
const app = express();
app.use("/", (req, res) => {
  console.log("browser 1 url");
});

app.listen(3000, () => {
  console.log("backend server connected");
});

const sqlite = require("sqlite3").verbose();
let db = new sqlite.Database("./blog.db", sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the  SQlite database.");
});
const bodyparser = require("body-parser");
// db.all(sql,params,(err, rows ) => {
//     // process rows here
// });
app.use(bodyparser.json());

app.post("/quote", (req, res) => {
  try {
    res.json({
      status: 200,
      success: true,
    });
  } catch (error) {
    return res.json({
      status: 400,
      success: false,
    });
  }
});
