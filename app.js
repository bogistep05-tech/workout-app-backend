const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

let workouts = [];
let exercises = [];

//
// TEST ROUTE
//
app.get("/", (req, res) => {
  res.send("Workout API is running");
});

//
// WORKOUT CRUD
//

// CREATE WORKOUT
app.post("/api/workouts", (req, res) => {
  const workout = {
    id: uuidv4(),
    name: req.body.name,
    description: req.body.description,
  };

  workouts.push(workout);

  res.json(workout);
});

// GET ALL WORKOUTS
app.get("/api/workouts", (req, res) => {
  res.json(workouts);
});

// GET ONE WORKOUT
app.get("/api/workouts/:id", (req, res) => {
  const workout = workouts.find(
    (w) => w.id === req.params.id
  );

  if (!workout) {
    return res.status(404).json({
      error: "Workout not found",
    });
  }

  res.json(workout);
});

// UPDATE WORKOUT
app.put("/api/workouts/:id", (req, res) => {
  const workout = workouts.find(
    (w) => w.id === req.params.id
  );

  if (!workout) {
    return res.status(404).json({
      error: "Workout not found",
    });
  }

  workout.name =
    req.body.name || workout.name;

  workout.description =
    req.body.description ||
    workout.description;

  res.json(workout);
});

// DELETE WORKOUT
app.delete("/api/workouts/:id", (req, res) => {
  workouts = workouts.filter(
    (w) => w.id !== req.params.id
  );

  res.json({
    message: "Workout deleted",
  });
});

//
// EXERCISE CRUD
//

// CREATE EXERCISE
app.post("/api/exercises", (req, res) => {
  const exercise = {
    id: uuidv4(),
    workoutId: req.body.workoutId,
    name: req.body.name,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
  };

  exercises.push(exercise);

  res.json(exercise);
});

// GET ALL EXERCISES
app.get("/api/exercises", (req, res) => {
  res.json(exercises);
});

// GET ONE EXERCISE
app.get("/api/exercises/:id", (req, res) => {
  const exercise = exercises.find(
    (e) => e.id === req.params.id
  );

  if (!exercise) {
    return res.status(404).json({
      error: "Exercise not found",
    });
  }

  res.json(exercise);
});

// UPDATE EXERCISE
app.put("/api/exercises/:id", (req, res) => {
  const exercise = exercises.find(
    (e) => e.id === req.params.id
  );

  if (!exercise) {
    return res.status(404).json({
      error: "Exercise not found",
    });
  }

  exercise.name =
    req.body.name || exercise.name;

  exercise.sets =
    req.body.sets || exercise.sets;

  exercise.reps =
    req.body.reps || exercise.reps;

  exercise.weight =
    req.body.weight || exercise.weight;

  res.json(exercise);
});

// DELETE EXERCISE
app.delete("/api/exercises/:id", (req, res) => {
  exercises = exercises.filter(
    (e) => e.id !== req.params.id
  );

  res.json({
    message: "Exercise deleted",
  });
});

//
// SERVER
//
app.listen(3000, () => {
  console.log("Server running on port 3000");
});