const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const mongooseConnect = require("./databases/mongoose");
const app = express();
//middlewares of express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/index")); //call route single




module.exports = app;