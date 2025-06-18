// // import SliderGroup from "./components/SliderGroup"

// // const part1Questions = [
// //   { id: "curious", label: "Curious" },
// //   { id: "imaginative", label: "Imaginative" },
// //   { id: "creative", label: "Creative (Idea-Maker)" },
// //   { id: "logical", label: "Logical" },
// //   { id: "focused", label: "Focused" },
// //   { id: "detailOriented", label: "Detail-Oriented" },
// //   { id: "adaptableThinking", label: "Adaptable in Thinking" },
// //   { id: "willingReconsider", label: "Willing to Reconsider" }
// // ]

// // export default function AssessmentPage() {
// //   return (
// //     <main className="max-w-2xl mx-auto py-10 px-4">
// //       <h1 className="text-3xl font-bold mb-6">Self Assessment</h1>
// //       <SliderGroup title="Part 1: How I Think & Imagine" questions={part1Questions} />
// //     </main>
// //   )
// // }

// "use client"

// import { useState } from "react"
// // import { StepPart1 } from "@/components/assessment/StepPart1"
// import { StepPart1 } from "@/components/assessment/StepPart1"
// // import { StepPart2 } from "@/components/assessment/StepPart2"
// // etc...

// export default function AssessmentPage() {
//   const [step, setStep] = useState(0)

//   const steps = [
//     <StepPart1 key="step1" />,
//     // <StepPart2 key="step2" />,
//     // ...
//   ]

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       {steps[step]}

//       <div className="flex justify-between mt-8">
//         <button
//           className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
//           disabled={step === 0}
//           onClick={() => setStep((prev) => prev - 1)}
//         >
//           Back
//         </button>

//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => {
//             if (step < steps.length - 1) {
//               setStep((prev) => prev + 1)
//             } else {
//               alert("Submit!") // replace with real submit later
//             }
//           }}
//         >
//           {step === steps.length - 1 ? "Submit" : "Next"}
//         </button>
//       </div>
//     </div>
//   )
// }
// src/app/assessment/page.tsx


// "use client";

// import { useState } from "react";
// // import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";
// // import StepPart3 ... etc.
// import type { FC } from "react";

// // const steps = [StepPart1, StepPart2]; // Add all your steps here
// const steps: FC[] = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

// export default function AssessmentPage() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const StepComponent = steps[currentStep];

//   return (
//     <div className="max-w-2xl mx-auto p-4 space-y-6">
      
//       {StepComponent ? <StepComponent /> : null}

//       <div className="flex justify-between pt-4">
//         <button
//           onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
//           disabled={currentStep === 0}
//           className="bg-gray-200 text-black px-4 py-2 rounded disabled:opacity-50"
//         >
//           Back
//         </button>

//         <button
//           onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
//           disabled={currentStep === steps.length - 1}
//           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//       {/* {StepComponent ? <StepComponent /> : null} */}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";

// export default function AssessmentPage() {
//   const [selectedPart, setSelectedPart] = useState<number | null>(null);

//   const handleSelect = (index: number) => {
//     setSelectedPart(index);
//   };

//   const handleBack = () => {
//     setSelectedPart(null);
//   };

//   const parts = [
//     { title: "Part 1: Think & Imagine", component: <StepPart1 /> },
//     { title: "Part 2: Emotions & Feelings", component: <StepPart2 /> },
//     { title: "Part 3: Act & Behave", component: <StepPart3 /> },
//     { title: "Part 4: Interactions", component: <StepPart4 /> },
//     { title: "Part 5: Adaptability", component: <StepPart5 /> },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {selectedPart === null ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {parts.map((part, index) => (
//             <button
//               key={index}
//               onClick={() => handleSelect(index)}
//               className="border border-blue-400 hover:bg-blue-100 transition rounded-xl p-6 text-left shadow-md"
//             >
//               <h2 className="text-xl font-semibold text-blue-600">{part.title}</h2>
//               <p className="text-sm text-gray-600 mt-2">Start this section</p>
//             </button>
//           ))}
//         </div>
//       ) : (
//         <div>
//           <div className="mb-4">
//             <button
//               onClick={handleBack}
//               className="text-sm text-blue-500 hover:underline"
//             >
//               ← Back to Parts
//             </button>
//           </div>
//           {/* {parts[selectedPart].component} */}
//           {selectedPart !== null && parts[selectedPart]?.component}
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";

// const partTitles = [
//   "How I Think & Imagine",
//   "How I Feel",
//   "How I Act",
//   "How I Work with Others",
//   "How I See Myself",
// ];

// const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

// export default function AssessmentPage() {
//   const [currentStep, setCurrentStep] = useState<number | null>(null);

//   const StepComponent = currentStep !== null ? steps[currentStep] : null;

//   const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});
//   const isPartComplete = (index: number) => {
//   const partAnswers = answers[index];
//   return partAnswers && Object.keys(partAnswers).length === 5; // 5 questions per part
// };


//   return (
//   <div className="max-w-3xl mx-auto p-4 space-y-6">
//     <AnimatePresence mode="wait">
//       {currentStep === null ? (
//         <motion.div
//           key="part-selection"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//         >
//           {partTitles.map((title, index) => (
//             <motion.button
//   key={index}
//   onClick={() => setCurrentStep(index)}
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.98 }}
//   className={`p-6 rounded-lg text-left border shadow-md ${
//     isPartComplete(index)
//       ? 'bg-green-100 border-green-500'
//       : 'bg-white border-gray-300'
//   }`}
// >
//               <h2 className="text-xl font-semibold">{`Part ${index + 1}`}</h2>
//               <p className="text-gray-600">{title}</p>
//             </motion.button>
//           ))}
//         </motion.div>
//       ) : (
//         <motion.div
//           key={`step-${currentStep}`}
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -30 }}
//           transition={{ duration: 0.3 }}
//         >
//           {StepComponent && (
//   <StepComponent
//     values={answers[currentStep] || {}}
//     onChange={(id: string, val: number) =>
//       setAnswers((prev) => ({
//         ...prev,
//         [currentStep]: {
//           ...prev[currentStep],
//           [id]: val,
//         },
//       }))
//     }
//   />
// )}

//           <div className="flex justify-between pt-6">
//             <button
//               onClick={() => setCurrentStep(null)}
//               className="bg-gray-200 text-black px-4 py-2 rounded"
//             >
//               Back to All Parts
//             </button>
//             <button
//               onClick={() =>
//                 setCurrentStep((prev) =>
//                   prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                 )
//               }
//               disabled={currentStep === steps.length - 1}
//               className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//             >
//               Next Part
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>
// );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepPart1 from "@/components/assessment/StepPart1";
import StepPart2 from "@/components/assessment/StepPart2";
import StepPart3 from "@/components/assessment/StepPart3";
import StepPart4 from "@/components/assessment/StepPart4";
import StepPart5 from "@/components/assessment/StepPart5";

const partTitles = [
  "How I Think & Imagine",
  "How I Feel",
  "How I Act",
  "How I Work with Others",
  "How I See Myself",
];

const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const StepComponent = currentStep !== null ? steps[currentStep] : null;
  const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

  const isPartComplete = (index: number) => {
    const partAnswers = answers[index];
    return partAnswers && Object.keys(partAnswers).length === 5; // 5 questions per part
  };

  return (
    // <div className="min-h-screen bg-[#f8e5b9] p-8 font-sans">
    <div className="min-h-screen p-8 font-sans bg-background">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-6">
  Choose a Part to Begin Your Self-Discovery 🌱
</h1>
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {currentStep === null ? (
            <motion.div
  key="part-selection"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10"
>
  {partTitles.map((title, index) => (
    <motion.button
      key={index}
      onClick={() => setCurrentStep(index)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col items-start gap-2 p-6 rounded-2xl shadow-md transition duration-300 ease-in-out transform ${
        isPartComplete(index)
          ? 'bg-[#f8e5b9] border-2 border-[#cb887c]'
          : 'bg-white border border-gray-300'
      } hover:shadow-lg hover:bg-[#fbeedb]`}
    >
      <span className="text-3xl">
        {["💭", "❤️", "🧠", "🤝", "👤"][index]}
      </span>
      <h2 className="text-xl font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2>
      <p className="text-gray-700 text-sm">{title}</p>
    </motion.button>
  ))}
</motion.div>
          ) : (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-[#e6c7a2]"
            >
              {StepComponent && (
                <StepComponent
                  values={answers[currentStep] || {}}
                  onChange={(id: string, val: number) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [currentStep]: {
                        ...prev[currentStep],
                        [id]: val,
                      },
                    }))
                  }
                />
              )}

              <div className="flex justify-between pt-8">
                <button
                  onClick={() => setCurrentStep(null)}
                  className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
                >
                  Back to All Parts
                </button>
                <button
                  onClick={() =>
                    setCurrentStep((prev) =>
                      prev !== null && prev < steps.length - 1 ? prev + 1 : prev
                    )
                  }
                  disabled={currentStep === steps.length - 1}
                  className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
                >
                  Next Part
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}