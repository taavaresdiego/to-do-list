let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, require: true, min: 15, max: 99 },
});

module.exports = mongoose.model("Person", personSchema);
