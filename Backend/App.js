require("dotenv").config();
require("./DB/connection");

const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;
require("./DB/connection");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
