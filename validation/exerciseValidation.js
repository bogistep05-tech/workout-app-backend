function validateExercise(req, res, next) {
  const {
    name,
    sets,
    reps,
    weight,
  } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      error: "Exercise name is required",
    });
  }

  if (sets < 1) {
    return res.status(400).json({
      error: "Sets must be greater than 0",
    });
  }

  if (reps < 1) {
    return res.status(400).json({
      error: "Reps must be greater than 0",
    });
  }

  if (weight < 0) {
    return res.status(400).json({
      error: "Weight cannot be negative",
    });
  }

  next();
}

module.exports = validateExercise;