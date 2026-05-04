const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const pageRoutes = require("./routes/authRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", pageRoutes);
app.use("/auth", authRoutes);

module.exports = app;