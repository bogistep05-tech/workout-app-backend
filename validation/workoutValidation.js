function validateWorkout(req, res, next) {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      error: "Workout name is required",
    });
  }

  next();
}

module.exports = validateWorkout;