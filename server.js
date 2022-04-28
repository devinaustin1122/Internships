const express = require("express");
const app = express();
const port = 3001; // can we move this over to a .env file (dotenv)

app.get("/", function (req, res) {
  res.send("howdy!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
