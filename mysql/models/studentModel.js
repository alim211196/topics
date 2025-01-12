const pool = require("../db");

const getAllStudents = async () => {
  const [students] = await pool.query(`CALL GetAllStudents()`);
  return students[0];
};

const getStudentById = async (id) => {
  const [student] = await pool.query(`CALL GetStudentById(?)`, [id]);
  return student[0][0];
};

const createStudent = async (name, age, exp, fullTime) => {
  const result = await pool.query(
    `CALL CreateStudent(?,?,?,?)`,

    [name, age, exp, fullTime]
  );
  return result[0];
};

const updateStudent = async (id, name, age, exp, fullTime) => {
  const result = await pool.query(`CALL UpdateStudent(?,?,?,?,?)`, [
    id,
    name,
    age,
    exp,
    fullTime,
  ]);
  return result[0];
};

const deleteStudent = async (id) => {
  const result = await pool.query(`CALL DeleteStudent(?)`, [id]);
  return result[0];
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
