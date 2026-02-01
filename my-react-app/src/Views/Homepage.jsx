import React, { useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [isBlue, setIsBlue] = useState(true);

  const toggleColor = () => {
    setIsBlue((prev) => !prev);
  };

  return (
    <div className="cafe-homepage">
      <h1>Welcome to the Webcafe</h1>
      <p>Your go-to solution for AI-driven web applications</p>
      <div
        className="blue-button"
        onClick={toggleColor}
        style={{ backgroundColor: isBlue ? "#2f7cff" : "#ff3b3b" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleColor();
        }}
      >
        {isBlue ? "Blue" : "Red"}
      </div>
    </div>
  );
};

export default Homepage;
