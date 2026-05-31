import { useState } from "react";

import Navbar from "../components/Navbar";

import { createWorkout } from "../services/api";

function CreateWorkoutPage() {
  const [name, setName] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  async function handleSubmit(
    event
  ) {
    event.preventDefault();

    await createWorkout({
      name,
      description,
    });

    alert(
      "Workout created!"
    );

    setName("");
    setDescription("");
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
          Create Workout
        </h1>

        <form
          onSubmit={handleSubmit}
        >
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Workout name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              style={{
                padding: "10px",
                width: "300px",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <textarea
              placeholder="Description"
              value={
                description
              }
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              style={{
                padding: "10px",
                width: "300px",
                height: "100px",
              }}
            />
          </div>

          <button type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default
  CreateWorkoutPage;