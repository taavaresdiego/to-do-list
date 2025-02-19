const Project = require("../models/project.js");
const Task = require("../models/Task.js");

const createProject = async (req, res) => {
  const { name, description, startDate, endDate } = req.body;

  const newProject = new Project({
    name,
    description,
    startDate,
    endDate,
  });

  await newProject.save();
};

const getAllProjects = async (req, res) => {
  const projects = await Project.find().populate();
  res.json(projects);
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  await Project.deleteOne({ _id: id });
  res.json({ message: "Project removed successfully!" });
};

const editProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, endDate, tasks } = req.body;

  let project = await Task.findByIdAndUpdate(id, {
    name,
    description,
    startDate,
    endDate,
    tasks,
  });
  res.status(200).json({
    message: "Projeto atualizado com sucesso!",
    project,
  });
};

module.exports = { createProject, getAllProjects, deleteProject, editProject };
