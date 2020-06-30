const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongooseConnect = require("./databases/mongoose");
const app = express();
const env = require("./environments/env");

//middlewares of express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/index")); //call route single

async function server() {
  await mongooseConnect();
  await app.listen(env.portLocal);
  console.log("server running");
}

//init server async
server();
