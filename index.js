require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/user", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).send("Name and email are required");
  }

  res.send("Hello, " + name + "!");
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send("User " + id + " profile");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});