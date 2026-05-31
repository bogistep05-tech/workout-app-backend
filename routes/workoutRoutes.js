const express = require("express");

const router = express.Router();

const workoutController = require(
  "../controllers/workoutController"
);

const validateWorkout = require(
  "../validation/workoutValidation"
);

router.post(
  "/",
  validateWorkout,
  workoutController.create
);

router.get(
  "/",
  workoutController.getAll
);

router.get(
  "/:id",
  workoutController.getOne
);

router.put(
  "/:id",
  validateWorkout,
  workoutController.update
);

router.delete(
  "/:id",
  workoutController.remove
);

module.exports = router;