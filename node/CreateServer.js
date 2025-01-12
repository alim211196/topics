const https = require("https");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});
app.listen(3000);
fs.writeFile("file.txt", "Content", (error) => {
  if (error) {
    console.error("Error writing file:", error);
    return;
  }
});

const stream = fs.createReadStream("file.txt");
// console.log(stream);

https
  .createServer((req, res) => {
    res.end("Hello, world!");
  })
  .listen(3000);

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const token = jwt.sign({ id: "user.id", secret: "secret" });

console.log("Server is listening on port 3000");
