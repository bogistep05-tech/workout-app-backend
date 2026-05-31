const fs = require("fs-extra");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/workouts.json");

async function getAll() {
  return await fs.readJson(filePath);
}

async function getById(id) {
  const workouts = await fs.readJson(filePath);

  return workouts.find((w) => w.id === id);
}

async function create(workoutData) {
  const workouts = await fs.readJson(filePath);

  const newWorkout = {
    id: uuidv4(),
    name: workoutData.name,
    description: workoutData.description || "",
    createdAt: new Date(),
  };

  workouts.push(newWorkout);

  await fs.writeJson(filePath, workouts);

  return newWorkout;
}

async function update(id, workoutData) {
  const workouts = await fs.readJson(filePath);

  const index = workouts.findIndex((w) => w.id === id);

  if (index === -1) {
    return null;
  }

  workouts[index] = {
    ...workouts[index],
    ...workoutData,
  };

  await fs.writeJson(filePath, workouts);

  return workouts[index];
}

async function remove(id) {
  const workouts = await fs.readJson(filePath);

  const filtered = workouts.filter((w) => w.id !== id);

  await fs.writeJson(filePath, filtered);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};