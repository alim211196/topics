const studentModel = require("../models/studentModel");
const redisClient = require("../utils/redisClient");

const getStudents = async (req, res) => {
  try {
    const cachedStudents = await redisClient.get("sql-students");
    if (cachedStudents) {
      console.log("Fetched students from cache");
      return res.status(200).json(JSON.parse(cachedStudents));
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("sql-students", JSON.stringify(students));
    console.log("Serving from MySQL");
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, age, exp, fullTime } = req.body;
    const newStudent = await studentModel.createStudent(
      name,
      age,
      exp,
      fullTime
    );
    const students = await studentModel.getAllStudents();
    await redisClient.set("sql-students", JSON.stringify(students));
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const cachedStudent = await redisClient.get(`sql-student:${id}`);
    if (cachedStudent) {
      console.log("Fetched students from cache");
      return res.status(200).json(JSON.parse(cachedStudent));
    }
    const student = await studentModel.getStudentById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    await redisClient.set(`sql-student:${id}`, JSON.stringify(student));
    console.log("Serving from MySQL");
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { name, age, exp, fullTime } = req.body;
    const { id } = req.params;
    const updatedStudent = await studentModel.updateStudent(
      id,
      name,
      age,
      exp,
      fullTime
    );
    if (updatedStudent.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("sql-students", JSON.stringify(students));
    console.log("Cache updated after modifying a student");
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentModel.deleteStudent(id);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Student not found" });
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("sql-students", JSON.stringify(students));
    console.log("Cache updated after deleting a student");
    res.status(200).json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
