// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  fullTime: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", studentSchema);
