const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const Task = require("../models/taskModel");

dotenv.config({ path: path.resolve(__dirname, "../config.env") });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));

//READ JSON FILE

const tasks = JSON.parse(
  fs.readFileSync(path.join(__dirname, `tasks-data.json`), "utf-8")
);

for (let i = 0; i < 10; i += 1) tasks[i].duration += i;

// for (let i = 0, j = 50; i < 10; i += 1, j += 50) {
//   tasks[i].expire_at += j;
//   console.log(tasks[i]);
// }

//WRITE DATA
const addData = async () => {
  try {
    await Task.create(tasks, { validateBeforeSave: false });
    console.log("User Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//DELETE DATA
const deleteData = async () => {
  try {
    await Task.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") addData();
else if (process.argv[2] === "--delete") deleteData();
else console.log(`Can't find what are you looking for`);
