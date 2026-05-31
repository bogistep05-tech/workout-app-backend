const express = require("express");
const cors = require("cors");

const workoutRoutes = require("./routes/workoutRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

const app = express();

app.use(cors());

app.use(express.json());

//
// TEST ROUTE
//
app.get("/", (req, res) => {
  res.send("Workout API is running");
});

//
// ROUTES
//
app.use("/api/workouts", workoutRoutes);

app.use("/api/exercises", exerciseRoutes);

//
// SERVER
//
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});