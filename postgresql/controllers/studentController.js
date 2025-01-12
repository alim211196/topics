const studentModel = require("../models/studentModel");
const redisClient = require("../utils/redisClient");

const getAllStudents = async (req, res) => {
  try {
    const cachedStudents = await redisClient.get("pgsql-students");
    if (cachedStudents) {
      console.log("Fetched students from cache");
      return res.status(200).json(JSON.parse(cachedStudents));
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("pgsql-students", JSON.stringify(students));
    console.log("Serving from MySQL");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = await studentModel.createStudent(req.body);
    const students = await studentModel.getAllStudents();
    await redisClient.set("pgsql-students", JSON.stringify(students));
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const cachedStudent = await redisClient.get(`pgsql-student:${id}`);
    if (cachedStudent) {
      console.log("Fetched students from cache");
      return res.status(200).json(JSON.parse(cachedStudent));
    }
    const student = await studentModel.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    await redisClient.set(`pgsql-student:${id}`, JSON.stringify(student));
    console.log("Serving from MySQL");
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await studentModel.updateStudent(id, req.body);
    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("pgsql-students", JSON.stringify(students));
    console.log("Cache updated after modifying a student");
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await studentModel.deleteStudent(id);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    const students = await studentModel.getAllStudents();
    await redisClient.set("pgsql-students", JSON.stringify(students));
    console.log("Cache updated after deleting a student");
    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
