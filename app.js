//Basic config Import
const express = require("express");
const router = require("./src/routes/api");

const app = new express();
const bodyParser = require("body-parser");
//Security middleware import
const rateLimit = require("express-rate-Limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database Library Import
const mongoose = require("mongoose");
mongoose.set("strictQuery", true); // Add this line

//Implement Security Middleware

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
//Implement Body Parser Middleware to work with json
app.use(bodyParser.json());
//Set Request rate Limit
const Limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(Limiter);

//Mongo Db database Connection
let URL = "mongodb://127.0.0.1:27017/Todo";
let OPTION = { user: "", pass: "", autoIndex: true };
mongoose.connect(URL, OPTION, (error) => {
  console.log("Connection Success");
  console.log(error);
});

// mongoose.connect(URL, OPTION)
//   .then(() => {
//     console.log("✅ MongoDB connection successful");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err);
//   });

//routing implement
app.use("/api/v1", router);

//undefined route implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
