const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "A task must have a name"],
    trim: true,
  },
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    required: [true, "A task must have a createdAt"],
  },
  Duration: {
    type: Number,
    required: [true, "A task must have a Duration"],
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
