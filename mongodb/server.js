const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./db");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
connectDB();

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

// Connect to MongoDB

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
