let mongoose = require("mongoose");

let profileSchema = new mongoose.Schema({
  occupation: String,
  phone: String,
  address: String,
});

module.exports = mongoose.model("Profile", profileSchema);
