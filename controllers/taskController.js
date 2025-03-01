const Task = require("../models/Task.js");

const createTask = async (req, res) => {
  const { title } = req.body;
  const finished = false;
  const newTask = new Task({
    title,
    finished,
  });

  const savedTask = await newTask.save(); // Correção: newTask em vez de task

  // await newTask.save(); // Removido: já salvo na linha anterior
  res.json({
    message: "Tarefa criada com sucesso!",
    task: newTask,
  });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("person", "projects");
  res.json(tasks);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  await Task.deleteOne({ _id: id });
  res.json({ message: "Task removed successfully!" });
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const { title, finished } = req.body;

  let task = await Task.findByIdAndUpdate(id, { title, finished });

  res.json({
    message: "Tarefa atualizada com sucesso!",
    task,
  });
};

module.exports = { getAllTasks, createTask, editTask, deleteTask };
