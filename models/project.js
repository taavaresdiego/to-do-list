let mongoose = require("mongoose");
const Task = require("../model/task.js");

let projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
});

module.exports = mongoose.model("Project", projectSchema);
