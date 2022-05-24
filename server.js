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
        res.status(401);
        res.send("error from server");
      }
    })
    .catch(() => {
      res.status(500);
      res.send("error from server");
    });
});

app.post("/accounts/create", async function (req, res) {
  const hash = await bcrypt.hash(req.body.password, 8);
  users[req.body.email] = hash;
  res.end();
});

app.post("/profiles/edit", function (req, res) {
  jwt.verify(req.body.token, "shhhhh", function (err, decoded) {
    profiles[decoded.email] = req.body;
  });
  res.end();
});

app.get("/profiles/:email", function (req, res) {
  console.log(req.params.email);
  res.json({
    ...profiles[req.params.email],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
