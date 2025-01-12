const db = require("../db");

const getAllStudents = async () => {
  return await db.any("SELECT * FROM students");
};

const getStudentById = async (id) => {
  return await db.oneOrNone("SELECT * FROM students WHERE id = $1", [id]);
};

const createStudent = async (student) => {
  return await db.one(
    "INSERT INTO students (name, age, exp, fullTime) VALUES ($1, $2, $3, $4) RETURNING *",
    [student.name, student.age, student.exp, student.fullTime]
  );
};

const updateStudent = async (id, student) => {
  return await db.one(
    "UPDATE students SET name = $1, age = $2, exp = $3, fullTime = $4 WHERE id = $5 RETURNING *",
    [student.name, student.age, student.exp, student.fullTime, id]
  );
};

const deleteStudent = async (id) => {
  return await db.result("DELETE FROM students WHERE id = $1", [id]);
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
