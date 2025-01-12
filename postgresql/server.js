const express = require("express");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
