const express = require("express");
const app = express();

app.use(require("../src/modules/users/routes/users-routes"));

module.exports = app;
