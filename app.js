const express = require("express");
const morgan = require("morgan");
const cron = require("node-cron");

const taskRouter = require("./routes/taskRoutes");
const taskController = require("./controllers/taskController");

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

cron.schedule(" * * * * *", taskController.updateTask);

app.use(express.json());

app.use("/api/v1/", taskRouter);

//  START SERVER
module.exports = app;
