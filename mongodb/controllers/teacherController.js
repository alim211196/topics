const Teacher = require("../models/Teacher");
const redisClient = require("../../mysql/utils/redisClient");

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const cachedTeachers = await redisClient.get("teachers");
    if (cachedTeachers) {
      console.log("Serving teachers from Redis cache");
      return res.status(200).json(JSON.parse(cachedTeachers));
    }
    const teachers = await Teacher.find();
    await redisClient.set("teachers", JSON.stringify(teachers));
    console.log("Serving teachers from MongoDB");
    return res.status(200).json(teachers);
  } catch (err) {
    console.error("Error fetching teachers:", err.message);
    return res.status(500).json({ message: err.message });
  }
};

// Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    const allTeachers = await Teacher.find();
    await redisClient.set("teachers", JSON.stringify(allTeachers));
    res.status(201).json(newTeacher);
  } catch (err) {
    console.error("Error creating teacher:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const cachedTeacher = await redisClient.get(`teacher:${req.params.id}`);
    if (cachedTeacher) {
      console.log("Serving teacher from Redis cache");
      return res.status(200).json(JSON.parse(cachedTeacher));
    }
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    await redisClient.set(`teacher:${req.params.id}`, JSON.stringify(teacher));
    res.status(200).json(teacher);
  } catch (err) {
    console.error("Error fetching teacher:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Update a teacher by ID
exports.updateTeacherById = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    const allTeachers = await Teacher.find();
    await redisClient.set("teachers", JSON.stringify(allTeachers));
    console.log("Teacher updated and cache refreshed");
    res.status(200).json(updatedTeacher);
  } catch (err) {
    console.error("Error updating teacher:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Delete a teacher by ID
exports.deleteTeacherById = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    const allTeachers = await Teacher.find();
    await redisClient.set("teachers", JSON.stringify(allTeachers));
    console.log("Teacher deleted and cache refreshed");
    res.status(200).json({ message: "Teacher deleted" });
  } catch (err) {
    console.error("Error deleting teacher:", err.message);
    res.status(500).json({ message: err.message });
  }
};
