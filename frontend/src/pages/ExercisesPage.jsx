import { useEffect, useState }
from "react";

import Navbar from
"../components/Navbar";

import { getExercises }
from "../services/api";

function ExercisesPage() {
  const [exercises,
    setExercises] =
    useState([]);

  useEffect(() => {
    loadExercises();
  }, []);

  async function loadExercises() {
    const data =
      await getExercises();

    setExercises(data);
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          fontFamily: "Arial",
        }}
      >
        <h1>
          Exercises
        </h1>

        {exercises.length === 0 ? (
          <p>
            No exercises found.
          </p>
        ) : (
          exercises.map(
            (exercise) => (
              <div
                key={exercise.id}
                style={{
                  border:
                    "1px solid gray",
                  padding: "15px",
                  marginBottom:
                    "10px",
                }}
              >
                <h3>
                  {exercise.name}
                </h3>

                <p>
                  {
                    exercise.description
                  }
                </p>
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default
  ExercisesPage;