const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001; // can we move this over to a .env file (dotenv)
app.use(cors());
app.use(express.json());

let users = [];

app.post("/users/authenticate", async function (req, res) {
  bcrypt
    .compare(req.body.password, users[req.body.username])
    .then((result) => {
      if (result) {
        res.json({
          token: jwt.sign({ foo: "bar" }, "shhhhh"),
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post("/users/create", async function (req, res) {
  const hash = await bcrypt.hash(req.body.password, 8);
  users[req.body.username] = hash;
  res.end();
});

app.post("/profile/edit", function (req, res) {});

app.post("/profile", function (req, res) {});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
