const exerciseDao = require("../dao/exerciseDao");

async function getAll(req, res) {
  const exercises = await exerciseDao.getAll();

  res.json(exercises);
}

async function getById(req, res) {
  const exercise = await exerciseDao.getById(req.params.id);

  if (!exercise) {
    return res.status(404).json({
      error: "Exercise not found",
    });
  }

  res.json(exercise);
}

async function create(req, res) {
  const newExercise = await exerciseDao.create(req.body);

  res.status(201).json(newExercise);
}

async function update(req, res) {
  const updatedExercise = await exerciseDao.update(
    req.params.id,
    req.body
  );

  if (!updatedExercise) {
    return res.status(404).json({
      error: "Exercise not found",
    });
  }

  res.json(updatedExercise);
}

async function remove(req, res) {
  await exerciseDao.remove(req.params.id);

  res.json({
    message: "Exercise deleted",
  });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};