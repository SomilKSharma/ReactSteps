// Array
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // variable for steps
  const steps = 2
  // return the jsx
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps === 1 ? "active" : ""}`}>
          1
        </div>
        <div className={`${steps === 2 ? "active" : ""}`}>
          2
        </div>
        <div className={`${steps === 3 ? "active" : ""}`}>
          3
        </div>
      </div>

      <p className="message">
        Step {steps}: {messages[steps - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert('Previous')}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert('Next')}
          onMouseEnter={() => alert('Mouse hover')}
        >
          Next
        </button>
      </div>
    </div>
  )
}