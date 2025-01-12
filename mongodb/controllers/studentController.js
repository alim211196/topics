const Student = require("../models/Student");
const redisClient = require("../utils/redisClient");

exports.getAllStudents = async (req, res) => {
  try {
    const cachedStudents = await redisClient.get("students");
    if (cachedStudents) {
      console.log("Serving from Redis cache");
      return res.status(200).json(JSON.parse(cachedStudents));
    }
    const students = await Student.find();
    await redisClient.set("students", JSON.stringify(students));
    console.log("Serving from MongoDB");
    return res.status(200).json(students);
  } catch (err) {
    console.error("Error fetching students:", err.message);
    return res.status(500).json({ message: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    const allStudents = await Student.find();
    await redisClient.set("students", JSON.stringify(allStudents));
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const cachedStudent = await redisClient.get(`student:${req.params.id}`);
    if (cachedStudent) {
      console.log("Serving from Redis cache");
      return res.status(200).json(JSON.parse(cachedStudent));
    }
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    await redisClient.set(`student:${req.params.id}`, JSON.stringify(student));
    console.log("Serving from MongoDB");
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStudentById = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    const allStudents = await Student.find();
    await redisClient.set("students", JSON.stringify(allStudents));
    console.log("Cache updated after modifying a student");
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStudentById = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    const allStudents = await Student.find();
    await redisClient.set("students", JSON.stringify(allStudents));
    console.log("Cache updated after deleting a student");
    res.status(200).json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
