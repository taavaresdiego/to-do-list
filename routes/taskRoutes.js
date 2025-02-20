const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController.js");

router.get("/tasks", taskController.getAllTasks); // Verifique se taskController.getTasks está definida
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.editTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
