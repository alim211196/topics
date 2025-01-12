const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

// Routes for teacher operations
router.get("/", teacherController.getAllTeachers); // Fetch all teachers
router.post("/", teacherController.createTeacher); // Add a new teacher
router.get("/:id", teacherController.getTeacherById); // Fetch a teacher by ID
router.patch("/:id", teacherController.updateTeacherById); // Update a teacher by ID
router.delete("/:id", teacherController.deleteTeacherById); // Delete a teacher by ID

module.exports = router;
