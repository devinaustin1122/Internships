const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001; // can we move this over to a .env file (dotenv)
app.use(cors());
app.use(express.json());

let users = [];
let profiles = [];

app.post("/accounts/authenticate", async function (req, res) {
  bcrypt
    .compare(req.body.password, users[req.body.username])
    .then((result) => {
      if (result) {
        res.json({
          token: jwt.sign({ username: req.body.username }, "shhhhh"),
          username: req.body.username,
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post("/accounts/create", async function (req, res) {
  const hash = await bcrypt.hash(req.body.password, 8);
  users[req.body.username] = hash;
  res.end();
});

app.post("/profiles/edit", function (req, res) {
  jwt.verify(req.body.token, "shhhhh", function (err, decoded) {
    console.log(decoded.username);
    profiles[decoded.username] = req.body;
  });
  profiles["yo"] = "yoooooo";
  console.log("users");
  console.log(users);
  console.log("profiles");
  console.log(profiles);
});

app.get("/profiles", function (req, res) {});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
