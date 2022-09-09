const Task = require("../models/taskModel");

exports.getAllTasks = async (req, res) => {
  const allTask = await Task.find();
  res.status(200).json({
    status: "success",
    length: allTask.length,
    data: { tasks: allTask },
  });
};

exports.addTask = async (req, res) => {
  const tasks = await Task.create(req.body);
  res.status(201).json({
    status: "success",
    data: { data: tasks },
  });
};

exports.updateTask = async (req, res) => {
  await Task.deleteMany({
    $gt: [
      {
        $dateDiff: {
          startDate: "$createdAt",
          endDate: new Date(),
          unit: "second",
        },
      },
      "$duration",
    ],
  });

  res.status(201).json({ status: "success" });
};
