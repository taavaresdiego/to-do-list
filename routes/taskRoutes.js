const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/tasks", taskController.getTasks); // Verifique se taskController.getTasks está definida
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
