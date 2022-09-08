const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/add", taskController.addTask);
router.get("/list", taskController.getAllTasks);

module.exports = router;
