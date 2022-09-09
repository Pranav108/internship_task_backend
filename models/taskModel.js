const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "A task must have a name"],
    trim: true,
  },
  description: String,
  creator: String,
  // expire_at: { type: Date, default: Date.now(), expires: 0 },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  duration: {
    type: Number,
    default: 90,
  },
});

// taskSchema.index(
//   { createdAt: 1 },
//   { expireAfterSeconds: taskSchema.obj.duration }
//   // { expireAfterSeconds: 180 }
// );

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
