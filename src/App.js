import "Assets/tailwind.css"
import { useState } from "react"

const messages = [
  "Learn ReactJS",
  "Learn NodeJS",
  "Learn MongoDB"
]

function App() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function previousStep() {
    if (step > 1) {
      setStep(s => s - 1)
    }
  }

  function nextStep() {
    if (step < 3) {
      setStep(s => s + 1)
    }
  }

  return (
    <div className="w-[30rem] mx-auto my-20 flex flex-col items-end">
      <div onClick={() => setIsOpen(!isOpen)} className="w-min h-min mr-2 text-4xl cursor-pointer">×</div>
      {isOpen ? (
        <div className="bg-gray-200 rounded-lg w-[30rem] h-52 flex flex-col justify-evenly">
          <div className="flex justify-evenly">
            <span className={`number ${step >= 1 ? "!bg-[#7950f2]" : ""}`}>1</span>
            <span className={`number ${step >= 2 ? "!bg-[#7950f2]" : ""}`}>2</span>
            <span className={`number ${step >= 3 ? "!bg-[#7950f2]" : ""}`}>3</span>
          </div>

          <p className="text-center">Step {step}: {messages[step - 1]}</p>

          <div className="flex justify-around">
            <button onClick={previousStep} className="button">Previous</button>
            <button onClick={nextStep} className="button">Next</button>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export default App