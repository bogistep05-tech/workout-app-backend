import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WorkoutDetailPage from "./pages/WorkoutDetailPage";
import CreateWorkoutPage from "./pages/CreateWorkoutPage";
import ExercisesPage from "./pages/ExercisesPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/workouts/:id"
        element={<WorkoutDetailPage />}
      />

      <Route
        path="/create-workout"
        element={<CreateWorkoutPage />}
      />

      <Route
        path="/exercises"
        element={<ExercisesPage />}
      />
    </Routes>
  );
}

export default App;