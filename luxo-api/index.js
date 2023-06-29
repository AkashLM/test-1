const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const {dbConnection} = require("./DatabaseSetup/DBConnection");
// const __dirname = path.resolve();
require("dotenv").config();
//Setting Up CORS Policy
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.options("*", cors()); // preFlight
app.use("*", cors(corsOptions), function (req, res, next) {
  next();
});
//Connection with Database......
dbConnection();
const luxoRouter = require("./Routers/luxoRouter");

//Body Parsing Configuration
app.use(express.json());
//Cookie Parsing Configuration
app.use(cookieParser());

//Environmental file Configuration

const { PORT } = process.env;
//Working API
app.use("/api/v1", luxoRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
app.listen(PORT, (Error) => {
  console.log(`Application listening on PORT ${PORT}`);
});
