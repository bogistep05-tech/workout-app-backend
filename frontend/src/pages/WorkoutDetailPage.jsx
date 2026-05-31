import {
  useEffect,
  useState,
} from "react";

import { useParams }
from "react-router-dom";

import Navbar from
"../components/Navbar";

import {
  getWorkouts,
  getExercises,
  createExercise,
  deleteExercise,
} from "../services/api";

function WorkoutDetailPage() {
  const { id } = useParams();

  const [workout,
    setWorkout] =
    useState(null);

  const [exercises,
    setExercises] =
    useState([]);

  const [name, setName] =
    useState("");

  const [sets, setSets] =
    useState("");

  const [reps, setReps] =
    useState("");

  useEffect(() => {
    loadWorkout();
    loadExercises();
  }, []);

  async function loadWorkout() {
    const workouts =
      await getWorkouts();

    const foundWorkout =
      workouts.find(
        (w) => w.id === id
      );

    setWorkout(foundWorkout);
  }

  async function loadExercises() {
    const allExercises =
      await getExercises();

    const filtered =
      allExercises.filter(
        (exercise) =>
          exercise.workoutId ===
          id
      );

    setExercises(filtered);
  }

  async function handleAddExercise(
    event
  ) {
    event.preventDefault();

    await createExercise({
      workoutId: id,
      name,
      sets,
      reps,
    });

    setName("");
    setSets("");
    setReps("");

    loadExercises();
  }

  async function handleDeleteExercise(
    id
  ) {
    await deleteExercise(id);

    loadExercises();
  }

  if (!workout) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
          background: "#f4f4f4",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background:
              "white",
            borderRadius:
              "12px",
            padding: "30px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom:
              "30px",
          }}
        >
          <h1>
            {workout.name}
          </h1>

          <p
            style={{
              color: "#555",
            }}
          >
            {
              workout.description
            }
          </p>
        </div>

        <div
          style={{
            background:
              "white",
            borderRadius:
              "12px",
            padding: "30px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom:
              "30px",
          }}
        >
          <h2>
            Add Exercise
          </h2>

          <form
            onSubmit={
              handleAddExercise
            }
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Exercise name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              style={{
                padding:
                  "12px",
                borderRadius:
                  "8px",
                border:
                  "1px solid #ccc",
              }}
            />

            <input
              type="number"
              placeholder="Sets"
              value={sets}
              onChange={(e) =>
                setSets(
                  e.target.value
                )
              }
              style={{
                padding:
                  "12px",
                borderRadius:
                  "8px",
                border:
                  "1px solid #ccc",
              }}
            />

            <input
              type="number"
              placeholder="Reps"
              value={reps}
              onChange={(e) =>
                setReps(
                  e.target.value
                )
              }
              style={{
                padding:
                  "12px",
                borderRadius:
                  "8px",
                border:
                  "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                padding:
                  "12px",
                background:
                  "#111",
                color: "white",
                border: "none",
                borderRadius:
                  "8px",
                cursor:
                  "pointer",
              }}
            >
              Add Exercise
            </button>
          </form>
        </div>

        <div>
          <h2>
            Exercises
          </h2>

          {exercises.length === 0 ? (
            <p>
              No exercises yet.
            </p>
          ) : (
            exercises.map(
              (exercise) => (
                <div
                  key={exercise.id}
                  style={{
                    background:
                      "white",
                    borderRadius:
                      "12px",
                    padding:
                      "20px",
                    marginBottom:
                      "20px",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3>
                    {exercise.name}
                  </h3>

                  <p>
                    Sets:
                    {
                      exercise.sets
                    }
                  </p>

                  <p>
                    Reps:
                    {
                      exercise.reps
                    }
                  </p>

                  <button
                    onClick={() =>
                      handleDeleteExercise(
                        exercise.id
                      )
                    }
                    style={{
                      padding:
                        "10px",
                      background:
                        "#cc0000",
                      color:
                        "white",
                      border:
                        "none",
                      borderRadius:
                        "8px",
                      cursor:
                        "pointer",
                      marginTop:
                        "10px",
                    }}
                  >
                    Delete Exercise
                  </button>
                </div>
              )
            )
          )}
        </div>
      </div>
    </>
  );
}

export default
  WorkoutDetailPage;