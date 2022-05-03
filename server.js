const express = require("express");
const app = express();
const port = 3001; // can we move this over to a .env file (dotenv)
var cors = require("cors");
app.use(cors());
// app.use(express.json);

app.get("/", function (req, res) {
  console.log("hello world!");
  res.send("hello world!");
});

app.post("/users/authenticate", function (req, res) {
  console.log("authenticate.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
