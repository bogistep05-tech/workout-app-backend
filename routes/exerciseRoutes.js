const validateExercise = require(
  "../validation/exerciseValidation"
);

const express = require("express");

const router = express.Router();

const exerciseController = require(
  "../controllers/exerciseController"
);

router.get("/", exerciseController.getAll);

router.get("/:id", exerciseController.getById);

router.post(
  "/",
  validateExercise,
  exerciseController.create
);

router.put("/:id", exerciseController.update);

router.delete("/:id", exerciseController.remove);

module.exports = router;