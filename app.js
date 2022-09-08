const express = require("express");
const morgan = require("morgan");
const taskRouter = require("./routes/taskRoutes");

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use("/", taskRouter);

//  START SERVER
module.exports = app;
