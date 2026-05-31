import { Link }
from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111",
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration:
            "none",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>

      <Link
        to="/create-workout"
        style={{
          color: "white",
          textDecoration:
            "none",
          fontWeight: "bold",
        }}
      >
        Create Workout
      </Link>

      <Link
        to="/exercises"
        style={{
          color: "white",
          textDecoration:
            "none",
          fontWeight: "bold",
        }}
      >
        Exercises
      </Link>
    </nav>
  );
}

export default Navbar;