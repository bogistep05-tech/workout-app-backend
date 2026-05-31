const API_URL =
  "http://localhost:3000/api";

export async function getWorkouts() {
  const response = await fetch(
    `${API_URL}/workouts`
  );

  return response.json();
}

export async function createWorkout(
  workoutData
) {
  const response = await fetch(
    `${API_URL}/workouts`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        workoutData
      ),
    }
  );

  return response.json();
}

export async function deleteWorkout(
  id
) {
  await fetch(
    `${API_URL}/workouts/${id}`,
    {
      method: "DELETE",
    }
  );
}
export async function getExercises() {
  const response = await fetch(
    `${API_URL}/exercises`
  );

  return response.json();
}
export async function updateWorkout(
  id,
  workoutData
) {
  const response = await fetch(
    `${API_URL}/workouts/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        workoutData
      ),
    }
  );

  return response.json();
}
export async function createExercise(
  exerciseData
) {
  const response = await fetch(
    `${API_URL}/exercises`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        exerciseData
      ),
    }
  );

  return response.json();
}
export async function deleteExercise(
  id
) {
  await fetch(
    `${API_URL}/exercises/${id}`,
    {
      method: "DELETE",
    }
  );
}