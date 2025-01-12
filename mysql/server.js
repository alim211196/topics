const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const studentRoutes = require("./routes/studentRoutes");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/students", studentRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
