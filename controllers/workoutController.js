const workoutDao = require("../dao/workoutDao");

async function create(req, res) {
  const workout = await workoutDao.create({
    name: req.body.name,
    description: req.body.description || "",
    createdAt: new Date(),
  });

  res.status(201).json(workout);
}

async function getAll(req, res) {
  const workouts = await workoutDao.getAll();

  res.json(workouts);
}

async function getOne(req, res) {
  const workout = await workoutDao.getById(
    req.params.id
  );

  if (!workout) {
    return res.status(404).json({
      error: "Workout not found",
    });
  }

  res.json(workout);
}

async function update(req, res) {
  const updatedWorkout =
    await workoutDao.update(
      req.params.id,
      req.body
    );

  res.json(updatedWorkout);
}

async function remove(req, res) {
  await workoutDao.remove(req.params.id);

  res.json({
    message: "Workout deleted",
  });
}

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};