const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


//middlewares of express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(require("./routes/index")); //call route single

//middleware express for all routes
app.use("*", (req, res, next) => {
  req.user = "Diyar Bakir";
  next();
});

async function server() {
  await app.listen("3000");
  console.log("server running");
}

server();
