const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
