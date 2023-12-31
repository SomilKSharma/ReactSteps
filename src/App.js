import { useState } from "react";

// Array
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // create a state variable / hook
  const [steps, setSteps] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  // create event handler functions
  function handlePrevious() {
    // check for range
    if (steps > 1) {
      setSteps((steps) => steps - 1)
    }
  }
  function handleNext() {
    // update the state
    if (steps < 3) {
      setSteps((steps) => steps + 1)
    }
  }
  // return the jsx
  return (
    <>
      {/* a button */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;
      </button>

      {/* The box of the view page */}
      {
        (isOpen) && (
          <div className="steps">
            <div className="numbers">
              <div className={steps === 1 ? "active" : ""}>
                1
              </div>
              <div className={steps === 2 ? "active" : ""}>
                2
              </div>
              <div className={steps === 3 ? "active" : ""}>
                3
              </div>
            </div>

            <p className="message">
              Step {steps}: {messages[steps - 1]}
            </p>

            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}