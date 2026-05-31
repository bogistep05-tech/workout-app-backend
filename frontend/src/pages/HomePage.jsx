import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} from "../services/api";

function HomePage() {
  const [workouts, setWorkouts] =
    useState([]);

  useEffect(() => {
    loadWorkouts();
  }, []);

  async function loadWorkouts() {
    const data =
      await getWorkouts();

    setWorkouts(data);
  }

  async function handleDelete(
    id
  ) {
    await deleteWorkout(id);

    loadWorkouts();
  }

  async function handleEdit(
    workout
  ) {
    const newName = prompt(
      "New workout name:",
      workout.name
    );

    if (!newName) return;

    await updateWorkout(
      workout.id,
      {
        ...workout,
        name: newName,
      }
    );

    loadWorkouts();
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
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Workout App 💪
        </h1>

        <Link to="/create-workout">
          <button
            style={{
              padding:
                "12px 24px",
              border: "none",
              background:
                "#111",
              color: "white",
              borderRadius:
                "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Workout
          </button>
        </Link>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              marginBottom:
                "20px",
            }}
          >
            Workout List
          </h2>

          {workouts.length === 0 ? (
            <p>
              No workouts found.
            </p>
          ) : (
            workouts.map((workout) => (
              <div
                key={workout.id}
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
                <Link
                  to={`/workouts/${workout.id}`}
                  style={{
                    textDecoration:
                      "none",
                    color: "#111",
                  }}
                >
                  <h3
                    style={{
                      marginBottom:
                        "10px",
                    }}
                  >
                    {workout.name}
                  </h3>
                </Link>

                <p
                  style={{
                    color:
                      "#555",
                  }}
                >
                  {
                    workout.description
                  }
                </p>

                <div
                  style={{
                    marginTop:
                      "15px",
                  }}
                >
                  <button
                    onClick={() =>
                      handleEdit(
                        workout
                      )
                    }
                    style={{
                      padding:
                        "10px 18px",
                      border:
                        "none",
                      background:
                        "#222",
                      color:
                        "white",
                      borderRadius:
                        "8px",
                      marginRight:
                        "10px",
                      cursor:
                        "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        workout.id
                      )
                    }
                    style={{
                      padding:
                        "10px 18px",
                      border:
                        "none",
                      background:
                        "#cc0000",
                      color:
                        "white",
                      borderRadius:
                        "8px",
                      cursor:
                        "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;