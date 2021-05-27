const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

//middleware
app.use(logger("dev"));
app.use(express.json());

// these need to be defined for the below to work
const todoRouter = require("./router/todoRouter");
const indexRouter = require("./router/indexRouter");

// app is exported, so these files directly handle these URL paths
app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}!`)
})

module.exports = app