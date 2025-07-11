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
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5; // 5 questions per part
//   };

//   return (
//     // <div className="min-h-screen bg-[#f8e5b9] p-8 font-sans">
//     <div className="min-h-screen p-8 font-sans bg-background">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-6">
//   Choose a Part to Begin Your Self-Discovery 🌱
// </h1>
//       <div className="max-w-5xl mx-auto">
//         <AnimatePresence mode="wait">
//           {currentStep === null ? (
//             <motion.div
//   key="part-selection"
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   exit={{ opacity: 0, y: -10 }}
//   transition={{ duration: 0.3 }}
//   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10"
// >
//   {partTitles.map((title, index) => (
//     <motion.button
//       key={index}
//       onClick={() => setCurrentStep(index)}
//       whileHover={{ scale: 1.06 }}
//       whileTap={{ scale: 0.98 }}
//       className={`flex flex-col items-start gap-2 p-6 rounded-2xl shadow-md transition duration-300 ease-in-out transform ${
//         isPartComplete(index)
//           ? 'bg-[#f8e5b9] border-2 border-[#cb887c]'
//           : 'bg-white border border-gray-300'
//       } hover:shadow-lg hover:bg-[#fbeedb]`}
//     >
//       <span className="text-3xl">
//         {["💭", "❤️", "🧠", "🤝", "👤"][index]}
//       </span>
//       <h2 className="text-xl font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2>
//       <p className="text-gray-700 text-sm">{title}</p>
//     </motion.button>
//   ))}
// </motion.div>
//           ) : (
//             <motion.div
//               key={`step-${currentStep}`}
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -30 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white rounded-3xl p-8 shadow-2xl border border-[#e6c7a2]"
//             >
//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//                 <button
//                   onClick={() => setCurrentStep(null)}
//                   className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                 >
//                   Back to All Parts
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentStep((prev) =>
//                       prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                     )
//                   }
//                   disabled={currentStep === steps.length - 1}
//                   className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                 >
//                   Next Part
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
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
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   return (
//     <div className="min-h-screen p-8 font-sans bg-background overflow-hidden">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-6">
//         Choose a Part to Begin Your Self-Discovery 🌱
//       </h1>

//       <div className="flex items-center justify-center h-[500px] relative">
//         <motion.div
//           className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//         >
//           {partTitles.map((title, index) => {
//             const angle = (360 / partTitles.length) * index;
//             const radius = 160;
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//   <motion.div
//     key={index}
//     className="absolute"
//     style={{
//       top: `calc(50% + ${y}px)`,
//       left: `calc(50% + ${x}px)`,
//       transform: `translate(-50%, -50%) rotate(${-angle}deg)`, // keeps it upright
//     }}
//   >
//     <motion.button
//       onClick={() => setCurrentStep(index)}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       className={`p-4 rounded-2xl w-36 h-36 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer ${
//         isPartComplete(index)
//           ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//           : "bg-white border border-gray-300"
//       } hover:shadow-lg hover:bg-[#fbeedb]`}
//       style={{ transform: `rotate(${angle}deg)` }} // rotates it back to look upright
//     >
//       <span className="text-2xl mb-1">
//         {["💭", "❤️", "🧠", "🤝", "👤"][index]}
//       </span>
//       <h2 className="text-sm font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2>
//       <p className="text-xs text-gray-700 leading-tight">{title}</p>
//     </motion.button>
//   </motion.div>
// );
//           })}
//         </motion.div>
//       </div>

//       {/* Modal for selected part */}
//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {/* Step Component */}
//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               {/* Controls */}
//               <div className="flex justify-between pt-8">
//                 <button
//                   onClick={() => setCurrentStep(null)}
//                   className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                 >
//                   Back to All Parts
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentStep((prev) =>
//                       prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                     )
//                   }
//                   disabled={currentStep === steps.length - 1}
//                   className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                 >
//                   Next Part
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
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
//   const [rotation, setRotation] = useState(0);

//   const isPartComplete = (index: number) => {
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   // rotate continuously using requestAnimationFrame
//   useEffect(() => {
//     let animationFrameId: number;
//     const rotate = () => {
//       setRotation((prev) => (prev + 0.05) % 360); // slow smooth rotation
//       animationFrameId = requestAnimationFrame(rotate);
//     };
//     animationFrameId = requestAnimationFrame(rotate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div className="min-h-screen p-8 font-sans bg-background overflow-x-visible overflow-y-auto">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-6">
//         Choose a Part to Begin Your Self-Discovery 🌱
//       </h1>

//       <div className="flex items-center justify-center min-h-[600px] relative overflow-visible">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
//           {partTitles.map((title, index) => {
//             const baseAngle = (360 / partTitles.length) * index;
//             const angle = baseAngle + rotation;
//             const radius = 200;
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             return (
//               <motion.div
//                 key={index}
//                 className="absolute"
//                 style={{
//                   top: `calc(50% + ${y}px)`,
//                   left: `calc(50% + ${x}px)`,
//                   transform: `translate(-50%, -50%)`,
//                 }}
//                 animate={{
//                   y: [0, -4, 0, 4, 0], // subtle floating
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   delay: index * 0.2,
//                 }}
//               >
//                 <motion.button
//                   onClick={() => setCurrentStep(index)}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`p-4 rounded-2xl w-44 h-44 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer ${
//                     isPartComplete(index)
//                       ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//                       : "bg-white border border-gray-300"
//                   } hover:shadow-lg hover:bg-[#fbeedb]`}
//                 >
//                   <span className="text-2xl mb-1">
//                     {["💭", "❤️", "🧠", "🤝", "👤"][index]}
//                   </span>
//                   <h2 className="text-sm font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2>
//                   <p className="text-xs text-gray-700 leading-tight">{title}</p>
//                 </motion.button>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//                 <button
//                   onClick={() => setCurrentStep(null)}
//                   className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                 >
//                   Back to All Parts
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentStep((prev) =>
//                       prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                     )
//                   }
//                   disabled={currentStep === steps.length - 1}
//                   className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                 >
//                   Next Part
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// //grid
// "use client";

// import { useState, useEffect } from "react";
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
//   const [floatOffset, setFloatOffset] = useState(0);

//   const isPartComplete = (index: number) => {
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   // subtle floating animation trigger
//   useEffect(() => {
//     let animationFrameId: number;
//     const float = () => {
//       setFloatOffset((prev) => (prev + 0.05) % (2 * Math.PI));
//       animationFrameId = requestAnimationFrame(float);
//     };
//     animationFrameId = requestAnimationFrame(float);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div className="min-h-screen p-8 font-sans bg-background flex flex-col items-center justify-start">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-10">
//         Choose a Part to Begin Your Self-Discovery 🌱
//       </h1>

//       {/* Grid Layout for Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full justify-items-center">
//         {partTitles.map((title, index) => (
//           <motion.div
//             key={index}
//             animate={{
//               y: Math.sin(floatOffset + index) * 4, // subtle floating
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//           >
//             <motion.button
//               onClick={() => setCurrentStep(index)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-4 rounded-2xl w-44 h-44 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer ${
//                 isPartComplete(index)
//                   ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//                   : "bg-white border border-gray-300"
//               } hover:shadow-lg hover:bg-[#fbeedb]`}
//             >
//               <span className="text-2xl mb-1">
//                 {["💭", "❤️", "🧠", "🤝", "👤"][index]}
//               </span>
//               <h2 className="text-sm font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2>
//               <p className="text-xs text-gray-700 leading-tight">{title}</p>
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//                 <button
//                   onClick={() => setCurrentStep(null)}
//                   className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                 >
//                   Back to All Parts
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentStep((prev) =>
//                       prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                     )
//                   }
//                   disabled={currentStep === steps.length - 1}
//                   className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                 >
//                   Next Part
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";

// const partTitles = [
//   "How I Think & Imagine",
//   "How I Feel",
//   "How I Am With Other People & My Values in Interaction",
//   "How I Act and Get Things Done",
//   "How I See Myself",
// ];

// const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

// export default function AssessmentPage() {
//   const [currentStep, setCurrentStep] = useState<number | null>(null);
//   const StepComponent = currentStep !== null ? steps[currentStep] : null;
//   const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

//   const isPartComplete = (index: number) => {
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem("self-assessment-answers");
//     if (saved) {
//       setAnswers(JSON.parse(saved));
//     }
//   }, []);

//   // ✅ Save answers whenever they change
//   useEffect(() => {
//     localStorage.setItem("self-assessment-answers", JSON.stringify(answers));
//   }, [answers]);

//   const downloadAnswers = () => {
//   const blob = new Blob([JSON.stringify(answers, null, 2)], {
//     type: "application/json",
//   });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "self-assessment-responses.json";
//   a.click();
//   URL.revokeObjectURL(url);
// };

//   return (
//     <div className="min-h-screen w-full font-sans bg-background flex flex-col items-center px-4 py-10">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-10">
//         Know More About Your Self 🌱
//       </h1>
//       <button
//   onClick={downloadAnswers}
//   className="mb-8 px-6 py-2 bg-[#cb887c] text-white rounded-xl hover:bg-[#b86c5e] transition"
// >
//   Download Responses
// </button>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {partTitles.map((title, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentStep(index)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer w-full
//               ${
//                 isPartComplete(index)
//                   ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//                   : "bg-white border border-gray-300"
//               } hover:shadow-lg hover:bg-[#fbeedb]`}
//           >
//             <span className="text-3xl mb-2">{["💭", "❤️", "🧠", "🤝", "👤"][index]}</span>
//             {/* <h2 className="text-lg font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2> */}
//             {/* <p className="text-sm text-gray-700 mt-1 leading-tight">{title}</p> */}
//             <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
//   {partTitles[index]}
// </p>
//           </motion.button>
//         ))}
//       </div>

//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//   {currentStep !== 0 ? (
//     <button
//       onClick={() =>
//         setCurrentStep((prev) =>
//           prev !== null && prev > 0 ? prev - 1 : prev
//         )
//       }
//       className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//     >
//       Previous
//     </button>
//   ) : (
//     <div /> // keeps spacing consistent when there's no button
//   )}

//   <button
//     onClick={() =>
//       setCurrentStep((prev) =>
//         prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//       )
//     }
//     disabled={currentStep === steps.length - 1}
//     className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//   >
//     Next
//   </button>
// </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";

// const partTitles = [
//   "How I Think & Imagine",
//   "How I Feel",
//   "How I Am With Other People & My Values in Interaction",
//   "How I Act and Get Things Done",
//   "How I See Myself",
// ];

// const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

// export default function AssessmentPage() {
//   const [currentStep, setCurrentStep] = useState<number | null>(null);
//   const StepComponent = currentStep !== null ? steps[currentStep] : null;
//   const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

//   const isPartComplete = (index: number) => {
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem("self-assessment-answers");
//     if (saved) {
//       setAnswers(JSON.parse(saved));
//     }
//   }, []);

//   // ✅ Save answers whenever they change
//   useEffect(() => {
//     localStorage.setItem("self-assessment-answers", JSON.stringify(answers));
//   }, [answers]);

//   const downloadAnswers = () => {
//     const blob = new Blob([JSON.stringify(answers, null, 2)], {
//       type: "application/json",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "self-assessment-responses.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen w-full font-sans bg-background flex flex-col items-center px-4 py-10">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-10">
//         Know More About Your Self 🌱
//       </h1>
//       <button
//         onClick={downloadAnswers}
//         className="mb-8 px-6 py-2 bg-[#cb887c] text-white rounded-xl hover:bg-[#b86c5e] transition"
//       >
//         Download Responses
//       </button>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {partTitles.map((title, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentStep(index)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer w-full
//               ${
//                 isPartComplete(index)
//                   ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//                   : "bg-white border border-gray-300"
//               } hover:shadow-lg hover:bg-[#fbeedb]`}
//           >
//             <span className="text-3xl mb-2">{["💭", "❤️", "🧠", "🤝", "👤"][index]}</span>
//             {/* <h2 className="text-lg font-semibold text-[#cb887c]">{`Part ${index + 1}`}</h2> */}
//             {/* <p className="text-sm text-gray-700 mt-1 leading-tight">{title}</p> */}
//             <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
//               {partTitles[index]}
//             </p>
//           </motion.button>
//         ))}
//       </div>

//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//                 {currentStep !== 0 ? (
//                   <button
//                     onClick={() =>
//                       setCurrentStep((prev) =>
//                         prev !== null && prev > 0 ? prev - 1 : prev
//                       )
//                     }
//                     className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                   >
//                     Previous
//                   </button>
//                 ) : (
//                   <div /> // keeps spacing consistent when there's no button
//                 )}

//                 {currentStep === steps.length - 1 ? (
//                   <button
//                     onClick={() => {
//                       alert("Thank you for submitting your responses!");
//                       setCurrentStep(null);
//                     }}
//                     className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700"
//                   >
//                     Submit
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() =>
//                       setCurrentStep((prev) =>
//                         prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                       )
//                     }
//                     className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import StepPart1 from "@/components/assessment/StepPart1";
// import StepPart2 from "@/components/assessment/StepPart2";
// import StepPart3 from "@/components/assessment/StepPart3";
// import StepPart4 from "@/components/assessment/StepPart4";
// import StepPart5 from "@/components/assessment/StepPart5";

// const partTitles = [
//   "How I Think & Imagine",
//   "How I Feel",
//   "How I Am With Other People & My Values in Interaction",
//   "How I Act and Get Things Done",
//   "How I See Myself",
// ];

// const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

// export default function AssessmentPage() {
//   const [currentStep, setCurrentStep] = useState<number | null>(null);
//   const StepComponent = currentStep !== null ? steps[currentStep] : null;
//   const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

//   const isPartComplete = (index: number) => {
//     const partAnswers = answers[index];
//     return partAnswers && Object.keys(partAnswers).length === 5;
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem("self-assessment-answers");
//     if (saved) {
//       setAnswers(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("self-assessment-answers", JSON.stringify(answers));
//   }, [answers]);

//   const downloadAnswers = () => {
//     const blob = new Blob([JSON.stringify(answers, null, 2)], {
//       type: "application/json",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "self-assessment-responses.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen w-full font-sans bg-background flex flex-col items-center px-4 py-10">
//       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-10">
//         Know More About Your Self 🌱
//       </h1>
//       <button
//         onClick={downloadAnswers}
//         className="mb-8 px-6 py-2 bg-[#cb887c] text-white rounded-xl hover:bg-[#b86c5e] transition"
//       >
//         Download Responses
//       </button>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {partTitles.map((title, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentStep(index)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer w-full
//               ${
//                 isPartComplete(index)
//                   ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
//                   : "bg-white border border-gray-300"
//               } hover:shadow-lg hover:bg-[#fbeedb]`}
//           >
//             <span className="text-3xl mb-2">{["💭", "❤️", "🧠", "🤝", "👤"][index]}</span>
//             <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
//               {partTitles[index]}
//             </p>
//           </motion.button>
//         ))}
//       </div>

//       <AnimatePresence>
//         {currentStep !== null && (
//           <motion.div
//             key={`modal-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 10 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 10 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
//             >
//               <button
//                 onClick={() => setCurrentStep(null)}
//                 className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
//               >
//                 ×
//               </button>

//               {StepComponent && (
//                 <StepComponent
//                   values={answers[currentStep] || {}}
//                   onChange={(id: string, val: number) =>
//                     setAnswers((prev) => ({
//                       ...prev,
//                       [currentStep]: {
//                         ...prev[currentStep],
//                         [id]: val,
//                       },
//                     }))
//                   }
//                 />
//               )}

//               <div className="flex justify-between pt-8">
//                 {currentStep !== 0 ? (
//                   <button
//                     onClick={() =>
//                       setCurrentStep((prev) =>
//                         prev !== null && prev > 0 ? prev - 1 : prev
//                       )
//                     }
//                     className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
//                   >
//                     Previous
//                   </button>
//                 ) : (
//                   <div />
//                 )}

//                 {currentStep === steps.length - 1 ? (
//                   <button
//                     onClick={() => {
//                       const allPartsComplete = steps.every((_, idx) =>
//                         isPartComplete(idx)
//                       );
//                       if (!allPartsComplete) {
//                         window.alert("Can't submit without clicking all parameters");
//                         return;
//                       }
//                       window.alert("Thank you for submitting your responses!");
//                       setCurrentStep(null);
//                     }}
//                     className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700"
//                   >
//                     Submit
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       if (!isPartComplete(currentStep)) {
//                         window.alert("Please rate all parameters");
//                         return;
//                       }
//                       setCurrentStep((prev) =>
//                         prev !== null && prev < steps.length - 1 ? prev + 1 : prev
//                       );
//                     }}
//                     className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepPart1 from "@/components/assessment/StepPart1";
import StepPart2 from "@/components/assessment/StepPart2";
import StepPart3 from "@/components/assessment/StepPart3";
import StepPart4 from "@/components/assessment/StepPart4";
import StepPart5 from "@/components/assessment/StepPart5";

import { part1Traits } from "@/lib/data/part1Traits";
import { part2Traits } from "@/lib/data/part2Traits";
import { part3Traits } from "@/lib/data/part3Traits";
import { part4Traits } from "@/lib/data/part4Traits";
import { part5Traits } from "@/lib/data/part5Traits";

const partTitles = [
  "How I Think & Imagine",
  "How I Feel",
  "How I Am With Other People & My Values in Interaction",
  "How I Act and Get Things Done",
  "How I See Myself",
];

const steps = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];
const expectedKeys = ["q1", "q2", "q3", "q4", "q5"];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const StepComponent = currentStep !== null ? steps[currentStep] : null;
  const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

const isPartComplete = (index: number) => {
  const partAnswers = answers[index];
  if (!partAnswers) return false;

  const allTraits = [part1Traits, part2Traits, part3Traits, part4Traits, part5Traits];
  const currentTraits = allTraits[index];

  if (!currentTraits) return false; // safety check for undefined access

  const expectedCount = currentTraits.length;
  const answeredKeys = Object.keys(partAnswers);

  return (
    answeredKeys.length === expectedCount &&
    Object.values(partAnswers).every((v) => typeof v === "number")
  );
};

  useEffect(() => {
    const saved = localStorage.getItem("self-assessment-answers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("self-assessment-answers", JSON.stringify(answers));
  }, [answers]);

  const downloadAnswers = () => {
    const blob = new Blob([JSON.stringify(answers, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "self-assessment-responses.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full font-sans bg-background flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#cb887c] mb-6">
  Know More About Your Self 🌱
</h1>

<div className="bg-[#fff5ec] border border-[#eac7b2] text-gray-800 rounded-xl p-4 max-w-3xl text-sm sm:text-base mb-10 shadow-sm">
  <h2 className="font-semibold mb-2 text-[#cb887c]">Instructions for You:</h2>
  <p>
    Think about how you are most naturally, without a lot of effort or thinking about it – like your <strong>“default settings.”</strong>
    For each word below, rate how much it describes your natural self on a scale of <strong>1 (Not really me at all)</strong> to <strong>10 (Very much me)</strong>.
  </p>
</div>

      <button
        onClick={downloadAnswers}
        className="mb-8 px-6 py-2 bg-[#cb887c] text-white rounded-xl hover:bg-[#b86c5e] transition"
      >
        Download Responses
      </button>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {partTitles.map((title, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentStep(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer w-full
              ${
                isPartComplete(index)
                  ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
                  : "bg-white border border-gray-300"
              } hover:shadow-lg hover:bg-[#fbeedb]`}
          >
            <span className="text-3xl mb-2">{["💭", "❤️", "🧠", "🤝", "👤"][index]}</span>
            <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
              {partTitles[index]}
            </p>
          </motion.button>
        ))}
      </div> */}
      <div className="grid grid-cols-6 gap-6 w-full max-w-6xl">
  {/* Row 1: Box 1, Box 2, Box 3 */}
  {partTitles.slice(0, 3).map((title, index) => (
    <motion.button
      key={index}
      onClick={() => setCurrentStep(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`col-span-2 p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer
        ${
          isPartComplete(index)
            ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
            : "bg-white border border-gray-300"
        } hover:shadow-lg hover:bg-[#fbeedb]`}
    >
      <span className="text-3xl mb-2">{["💭", "❤️", "🧠"][index]}</span>
      <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
        {title}
      </p>
    </motion.button>
  ))}

  {/* Row 2: Empty placeholder, Box 4, Box 5, Empty placeholder */}
  <div className="col-span-1" />
  {[3, 4].map((index) => (
    <motion.button
      key={index}
      onClick={() => setCurrentStep(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`col-span-2 p-6 rounded-2xl h-52 flex flex-col items-center justify-center shadow-md transition-all duration-300 text-center cursor-pointer
        ${
          isPartComplete(index)
            ? "bg-[#f8e5b9] border-2 border-[#cb887c]"
            : "bg-white border border-gray-300"
        } hover:shadow-lg hover:bg-[#fbeedb]`}
    >
      <span className="text-3xl mb-2">{["🤝", "👤"][index - 3]}</span>
      <p className="text-base font-medium text-gray-800 mt-1 text-center leading-snug">
        {partTitles[index]}
      </p>
    </motion.button>
  ))}
  <div className="col-span-1" />
</div>

      <AnimatePresence>
        {currentStep !== null && (
          <motion.div
            key={`modal-${currentStep}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full border border-[#e6c7a2] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setCurrentStep(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                ×
              </button>

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
                {currentStep !== 0 ? (
                  <button
                    onClick={() =>
                      setCurrentStep((prev) =>
                        prev !== null && prev > 0 ? prev - 1 : prev
                      )
                    }
                    className="bg-[#fce3cf] text-[#cb887c] px-5 py-2 rounded-xl font-medium hover:bg-[#fbd1b5]"
                  >
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {currentStep === steps.length - 1 ? (
                  <button
                    onClick={() => {
                      const allPartsComplete = steps.every((_, idx) =>
                        isPartComplete(idx)
                      );
                      if (!allPartsComplete) {
                        alert("Can't submit without clicking all parameters");
                        return;
                      }
                      alert("Thank you for submitting your responses!");
                      setCurrentStep(null);
                    }}
                    className="bg-green-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-green-700"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (!isPartComplete(currentStep)) {
                        alert("Please rate all parameters");
                        return;
                      }
                      setCurrentStep((prev) =>
                        prev !== null && prev < steps.length - 1 ? prev + 1 : prev
                      );
                    }}
                    className="bg-[#cb887c] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#b86c5e] disabled:opacity-50"
                  >
                    Next
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}