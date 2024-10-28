const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

//Post API
router.post("/", createTask);

//Get All Tasks
router.get("/", getTasks);

//Get Particular Task
router.get("/:id", getTask);

//Delete Task
router.delete("/:id", deleteTask);

//Update Task
router.put("/:id", updateTask);

module.exports = router;
