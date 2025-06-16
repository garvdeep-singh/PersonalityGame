// import SliderGroup from "./components/SliderGroup"

// const part1Questions = [
//   { id: "curious", label: "Curious" },
//   { id: "imaginative", label: "Imaginative" },
//   { id: "creative", label: "Creative (Idea-Maker)" },
//   { id: "logical", label: "Logical" },
//   { id: "focused", label: "Focused" },
//   { id: "detailOriented", label: "Detail-Oriented" },
//   { id: "adaptableThinking", label: "Adaptable in Thinking" },
//   { id: "willingReconsider", label: "Willing to Reconsider" }
// ]

// export default function AssessmentPage() {
//   return (
//     <main className="max-w-2xl mx-auto py-10 px-4">
//       <h1 className="text-3xl font-bold mb-6">Self Assessment</h1>
//       <SliderGroup title="Part 1: How I Think & Imagine" questions={part1Questions} />
//     </main>
//   )
// }

"use client"

import { useState } from "react"
// import { StepPart1 } from "@/components/assessment/StepPart1"
import { StepPart1 } from "@/components/assessment/StepPart1"
// import { StepPart2 } from "@/components/assessment/StepPart2"
// etc...

export default function AssessmentPage() {
  const [step, setStep] = useState(0)

  const steps = [
    <StepPart1 key="step1" />,
    // <StepPart2 key="step2" />,
    // ...
  ]

  return (
    <div className="max-w-3xl mx-auto p-6">
      {steps[step]}

      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          disabled={step === 0}
          onClick={() => setStep((prev) => prev - 1)}
        >
          Back
        </button>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            if (step < steps.length - 1) {
              setStep((prev) => prev + 1)
            } else {
              alert("Submit!") // replace with real submit later
            }
          }}
        >
          {step === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  )
}