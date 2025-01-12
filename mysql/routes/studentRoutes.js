const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents); // Get all students
router.get("/:id", studentController.getStudent); // Get student by ID
router.post("/", studentController.createStudent); // Create new student
router.patch("/:id", studentController.updateStudent); // Update student
router.delete("/:id", studentController.deleteStudent); // Delete student

module.exports = router;
