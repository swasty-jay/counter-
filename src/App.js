import React, { useState } from "react";
import "./App.css"; // Importing the CSS file

const Counter = () => {
  // Initialize the counter state
  const [counter, setCounter] = useState(0);

  // Function to increase counter (max 100)
  const increaseCounter = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  // Function to decrease counter (min 0)
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Function to reset counter to 0
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <h1
        className={`counter ${
          counter === 0 ? "low" : counter === 100 ? "high" : ""
        }`}
      >
        Counter: {counter}
      </h1>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(counter / 100) * 100}%` }}
        ></div>
      </div>

      <div className="button-group">
        {/* Disable buttons based on counter value */}
        <button onClick={increaseCounter} disabled={counter === 100}>
          Increase
        </button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <button onClick={decreaseCounter} disabled={counter === 0}>
        Decrease
      </button>

      {/* Feedback when counter reaches limit */}
      {counter === 0 && (
        <p className="feedback">Counter is at the minimum value!</p>
      )}
      {counter === 100 && (
        <p className="feedback">Counter is at the maximum value!</p>
      )}
    </div>
  );
};

export default Counter;
