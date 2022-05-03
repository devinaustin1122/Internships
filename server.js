const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
const port = 3001; // can we move this over to a .env file (dotenv)
app.use(cors());
app.use(express.json());

let users = [];

app.get("/", function (req, res) {
  res.send("hello world!");
});

app.post("/users/authenticate", async function (req, res) {
  if (
    users[req.body.username] &&
    bcrypt.compare(req.body.password, users[req.body.username])
  ) {
    res.json({
      username: req.body.username,
    });
  } else {
    res.sendStatus(401);
  }
});

app.post("/users/create", async function (req, res) {
  const hash = await bcrypt.hash(req.body.password, 8);
  users[req.body.username] = hash;
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
