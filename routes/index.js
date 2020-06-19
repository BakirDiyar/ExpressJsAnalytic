const express = require("express");
const app = express()

app.use(require("./foo"))

module.exports = app