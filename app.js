const express = require("express");
const _ = require("lodash");
let log = console.log;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3100);

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/signup", (req, res) => {
  res.render("signup", { title: "main" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.get("/main", (req, res) => {
  res.render("main", { title: "main" });
});
