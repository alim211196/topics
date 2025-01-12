const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Routes for student operations
router.get("/", studentController.getAllStudents); // Fetch all students
router.post("/", studentController.createStudent); // Add a new student
router.get("/:id", studentController.getStudentById); // Fetch a student by ID
router.patch("/:id", studentController.updateStudentById); // Update a student by ID
router.delete("/:id", studentController.deleteStudentById); // Delete a student by ID

module.exports = router;
