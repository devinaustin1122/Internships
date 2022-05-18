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
    .compare(req.body.password, users[req.body.email])
    .then((result) => {
      if (result) {
        res.json({
          token: jwt.sign({ email: req.body.email }, "shhhhh"),
          email: req.body.email,
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
  users[req.body.email] = hash;
  res.end();
});

app.post("/profiles/edit", function (req, res) {
  jwt.verify(req.body.token, "shhhhh", function (err, decoded) {
    console.log(decoded.email);
    profiles[decoded.email] = req.body;
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
