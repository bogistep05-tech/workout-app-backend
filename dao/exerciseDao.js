const fs = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/exercises.json");

async function getAll() {
  return await fs.readJson(filePath);
}

async function getById(id) {
  const exercises = await fs.readJson(filePath);

  return exercises.find((e) => e.id === id);
}

async function create(exerciseData) {
  const exercises = await fs.readJson(filePath);

  const newExercise = {
    id: uuidv4(),
    workoutId: exerciseData.workoutId,
    name: exerciseData.name,
    sets: exerciseData.sets,
    reps: exerciseData.reps,
    weight: exerciseData.weight,
  };

  exercises.push(newExercise);

  await fs.writeJson(filePath, exercises);

  return newExercise;
}

async function update(id, exerciseData) {
  const exercises = await fs.readJson(filePath);

  const index = exercises.findIndex((e) => e.id === id);

  if (index === -1) {
    return null;
  }

  exercises[index] = {
    ...exercises[index],
    ...exerciseData,
  };

  await fs.writeJson(filePath, exercises);

  return exercises[index];
}

async function remove(id) {
  const exercises = await fs.readJson(filePath);

  const filtered = exercises.filter((e) => e.id !== id);

  await fs.writeJson(filePath, filtered);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};