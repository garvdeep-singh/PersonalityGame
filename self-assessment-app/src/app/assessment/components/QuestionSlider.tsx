// import { useState } from "react";
// import { motion } from "framer-motion";

// interface QuestionSliderProps {
//   question: string;
//   description: string;
//   value: number;
//   onChange: (value: number) => void;
// }

// export default function QuestionSlider({
//   question,
//   description,
//   value,
//   onChange,
// }: QuestionSliderProps) {
//   const [hoveredValue, setHoveredValue] = useState<number | null>(null);

//   return (
//     <div className="mb-8">
//       <h2 className="text-lg font-semibold mb-2">{question}</h2>
//       <p className="text-sm text-gray-500 mb-4">{description}</p>

//       <div className="relative">
//         <input
//           type="range"
//           min={1}
//           max={10}
//           value={value}
//           onChange={(e) => onChange(parseInt(e.target.value))}
//           className="w-full cursor-pointer appearance-none bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-2 rounded-full outline-none"
//         />

//         <div className="flex justify-between text-xs mt-1 text-gray-500">
//           <span>1</span>
//           <span>10</span>
//         </div>

//         <motion.div
//           className="absolute top-[-30px] left-0"
//           animate={{ left: `${((value - 1) / 9) * 100}%` }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         >
//           <div className="px-2 py-1 text-xs bg-blue-500 text-white rounded shadow">
//             {value}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// src/app/assessment/components/QuestionSlider.tsx

// import { useState } from "react";
// import { motion } from "framer-motion";

// interface QuestionSliderProps {
//   id: string;
//   label: string;
//   description: string;
//   value: number;
//   onChange: (value: number) => void;
// }

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: QuestionSliderProps) {
//   const [hoveredValue, setHoveredValue] = useState<number | null>(null);

//   return (
//     <div className="mb-8">
//       <h2 className="text-lg font-semibold mb-2">{label}</h2>
//       <p className="text-sm text-gray-500 mb-4">{description}</p>

//       <div className="relative">
//         <input
//           id={id}
//           type="range"
//           min={1}
//           max={10}
//           value={value}
//           onChange={(e) => onChange(parseInt(e.target.value))}
//           className="w-full cursor-pointer appearance-none bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-2 rounded-full outline-none"
//           onMouseMove={(e) =>
//             setHoveredValue(parseInt((e.nativeEvent.offsetX / e.currentTarget.clientWidth * 9 + 1).toFixed(0)))
//           }
//           onMouseLeave={() => setHoveredValue(null)}
//         />

//         <div className="flex justify-between text-xs mt-1 text-gray-500">
//           <span>1</span>
//           <span>10</span>
//         </div>

//         <motion.div
//           className="absolute top-[-30px] left-0"
//           animate={{ left: `${((value - 1) / 9) * 100}%` }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         >
//           <div className="px-2 py-1 text-xs bg-blue-500 text-white rounded shadow">
//             {value}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (value: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
//       <div className="mb-3">
//         <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
//         {description && (
//           <p className="text-sm text-gray-500 mt-1">{description}</p>
//         )}
//       </div>
//       <div className="flex items-center space-x-4">
//         <span className="text-sm text-gray-600">1</span>
//         <input
//           type="range"
//           min={1}
//           max={10}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
//         />
//         <span className="text-sm text-gray-600">10</span>
//         <span className="text-blue-600 font-semibold ml-4">{value}</span>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (value: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   return (
//     <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-6 mb-8 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
//       <h3 className="text-xl font-bold text-gray-800 mb-1">{label}</h3>
//       {description && (
//         <p className="text-sm text-gray-600 mb-4">{description}</p>
//       )}
//       <div className="flex items-center gap-4">
//         <span className="text-xs text-gray-500 font-medium">1</span>
//         <input
//           type="range"
//           min={1}
//           max={10}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           className="w-full h-3 appearance-none bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full outline-none cursor-pointer"
//         />
//         <span className="text-xs text-gray-500 font-medium">10</span>
//         <span className="text-sm font-semibold text-purple-700">{value}</span>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (val: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   const [isDragging, setIsDragging] = useState(false);

//   // Calculate gradient based on value (1 to 10)
//   const getSliderColor = (val: number) => {
//     if (val <= 3) return "bg-red-400";
//     if (val <= 6) return "bg-yellow-400";
//     return "bg-green-500";
//   };

//   return (
//     <div className="mb-8 px-4 py-10 bg-white rounded-xl shadow-md border border-gray-200">
//       <div className="flex items-start justify-between mb-2">
//         <label htmlFor={id} className="text-[#cb887c] font-medium text-base">
//           {label}
//         </label>
//         {description && (
//           <span className="text-sm text-gray-500 max-w-[60%] text-right">
//             {description}
//           </span>
//         )}
//       </div>

//       <div className="relative w-full">
//         {/* Value bubble */}
//         {isDragging && (
//           <motion.div
//             className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-bold text-[#cb887c]"
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             {value}
//           </motion.div>
//         )}

//         {/* Track */}
//         <input
//           type="range"
//           id={id}
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className={`
//             w-full h-2 rounded-full appearance-none cursor-pointer
//             ${getSliderColor(value)} transition-colors duration-300
//           `}
//         />

//         {/* Custom Thumb Style */}
//         <style jsx>{`
//           input[type='range']::-webkit-slider-thumb {
//             appearance: none;
//             height: 20px;
//             width: 20px;
//             background: #cb887c;
//             border-radius: 50%;
//             cursor: pointer;
//             transition: background 0.3s ease;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//             margin-top: -9px;
//           }

//           input[type='range']::-moz-range-thumb {
//             background: #cb887c;
//             height: 20px;
//             width: 20px;
//             border-radius: 50%;
//             cursor: pointer;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//           }

//           input[type='range']::-webkit-slider-runnable-track {
//             height: 2px;
//             background: transparent;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (val: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   const [isDragging, setIsDragging] = useState(false);

//   return (
//     <div className="mb-8 px-4 py-10 bg-white rounded-xl shadow-md border border-gray-200">
//       <div className="flex items-start justify-between mb-2">
//         <label htmlFor={id} className="text-[#cb887c] font-medium text-base">
//           {label}
//         </label>
//         {description && (
//           <span className="text-sm text-gray-500 max-w-[60%] text-right">
//             {description}
//           </span>
//         )}
//       </div>

//       <div className="relative w-full">
//         {isDragging && (
//           <motion.div
//             className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-bold text-[#cb887c]"
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             {value}
//           </motion.div>
//         )}

//         <input
//           type="range"
//           id={id}
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className={`
//             w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-300
//             focus:outline-none
//           `}
//         />

//         {/* Custom Thumb Style */}
//         <style jsx>{`
//           input[type='range']::-webkit-slider-thumb {
//             appearance: none;
//             height: 18px;
//             width: 18px;
//             background: #cb887c;
//             border-radius: 50%;
//             cursor: pointer;
//             transition: background 0.3s ease;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//             margin-top: -8px;
//           }

//           input[type='range']::-moz-range-thumb {
//             background: #cb887c;
//             height: 18px;
//             width: 18px;
//             border-radius: 50%;
//             cursor: pointer;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//           }

//           input[type='range']::-webkit-slider-runnable-track {
//             height: 2px;
//             background: #d1d5db; /* gray-300 */
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (val: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   const [isDragging, setIsDragging] = useState(false);
//   const [touched, setTouched] = useState(false); // Track if user has interacted

//   const handleInteraction = () => {
//     setIsDragging(true);
//     if (!touched) setTouched(true);
//   };

//   const stopInteraction = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div className="mb-8 px-4 py-10 bg-white rounded-xl shadow-md border border-gray-200">
//       <div className="flex items-start justify-between mb-2">
//         <label htmlFor={id} className="text-[#cb887c] font-medium text-base">
//           {label}
//         </label>
//         {description && (
//           <span className="text-sm text-gray-500 max-w-[60%] text-right">
//             {description}
//           </span>
//         )}
//       </div>

//       <div className="relative w-full">
//         {/* Value bubble */}
//         {isDragging && (
//           <motion.div
//             className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-bold text-[#cb887c]"
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             {value}
//           </motion.div>
//         )}

//         {/* Slider */}
//         <input
//           type="range"
//           id={id}
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => {
//             onChange(Number(e.target.value));
//             setTouched(true);
//           }}
//           onMouseDown={handleInteraction}
//           onMouseUp={stopInteraction}
//           onTouchStart={handleInteraction}
//           onTouchEnd={stopInteraction}
//           className={`
//             w-full h-2 rounded-full appearance-none cursor-pointer
//             ${touched ? "bg-blue-500" : "bg-gray-300"}
//             transition-colors duration-300
//           `}
//         />

//         {/* Custom Thumb Style */}
//         <style jsx>{`
//           input[type='range']::-webkit-slider-thumb {
//             appearance: none;
//             height: 20px;
//             width: 20px;
//             background: #cb887c;
//             border-radius: 50%;
//             cursor: pointer;
//             transition: background 0.3s ease;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//             margin-top: -9px;
//           }

//           input[type='range']::-moz-range-thumb {
//             background: #cb887c;
//             height: 20px;
//             width: 20px;
//             border-radius: 50%;
//             cursor: pointer;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//           }

//           input[type='range']::-webkit-slider-runnable-track {
//             height: 2px;
//             background: transparent;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (val: number) => void;
// };

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange,
// }: Props) {
//   const [isDragging, setIsDragging] = useState(false);
//   const [hasInteracted, setHasInteracted] = useState(false);

//   useEffect(() => {
//     if (value !== 0) setHasInteracted(true);
//   }, [value]);

//   const handleChange = (val: number) => {
//     if (!hasInteracted) setHasInteracted(true);
//     onChange(val);
//   };

//   return (
//     <div className="mb-8 px-4 py-10 bg-white rounded-xl shadow-md border border-gray-200">
//       <div className="flex items-start justify-between mb-2">
//         <label htmlFor={id} className="text-[#cb887c] font-medium text-base">
//           {label}
//         </label>
//       </div>

//       {/* Description under the question */}
//       {description && (
//         <p className="text-sm text-gray-500 mb-4">{description}</p>
//       )}

//       <div className="relative w-full">
//         {/* Boat emoji */}
//         <motion.div
//           className="absolute -top-8 left-0 text-xl"
//           animate={{ left: `${((value - 1) / 9) * 100}%` }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         >
//           🛶
//         </motion.div>

//         {/* Value bubble when dragging */}
//         {isDragging && (
//           <motion.div
//             className="absolute -top-14 left-1/2 -translate-x-1/2 text-sm font-bold text-[#cb887c]"
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.2 }}
//           >
//             {value}
//           </motion.div>
//         )}

//         <input
//           type="range"
//           id={id}
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => handleChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className={`
//             w-full h-2 rounded-full appearance-none cursor-pointer
//             ${hasInteracted ? "bg-blue-500" : "bg-gray-300"}
//             transition-colors duration-300
//           `}
//         />

//         {/* Range labels */}
//         <div className="flex justify-between text-xs text-gray-500 mt-2">
//           <span>1</span>
//           <span>10</span>
//         </div>

//         {/* Custom thumb styles */}
//         <style jsx>{`
//           input[type="range"]::-webkit-slider-thumb {
//             appearance: none;
//             height: 20px;
//             width: 20px;
//             background: #cb887c;
//             border-radius: 50%;
//             cursor: pointer;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//             margin-top: -9px;
//           }

//           input[type="range"]::-moz-range-thumb {
//             background: #cb887c;
//             height: 20px;
//             width: 20px;
//             border-radius: 50%;
//             cursor: pointer;
//             box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
//           }

//           input[type="range"]::-webkit-slider-runnable-track {
//             height: 2px;
//             background: transparent;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }



// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// type Props = {
//   id: string
//   label: string
//   description?: string
//   value: number
//   onChange: (val: number) => void
// }

// export default function QuestionSlider({
//   id,
//   label,
//   description,
//   value,
//   onChange
// }: Props) {
//   const [interacted, setInteracted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!interacted) setInteracted(true)
//     onChange(Number(e.target.value))
//   }

//   return (
//     <div className="mb-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200 relative">
//       <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
//       {description && (
//         <p className="text-sm text-gray-500 mb-2">{description}</p>
//       )}
//       <div className="text-xs text-gray-500 mb-2 flex justify-between">
//         <span>1 = Rarely</span>
//         <span>10 = Always</span>
//       </div>

//       <div className="relative">
//         {/* Boat */}
//         <AnimatePresence>
//           {interacted && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{
//                 left: `${((value - 1) / 9) * 100}%`,
//                 opacity: 1
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="absolute -top-8 -translate-x-1/2 text-xl z-10"
//             >
//               ⛵
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Slider Input */}
//         <input
//           type="range"
//           id={id}
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={handleChange}
//           className={`
//             w-full h-3 rounded-full appearance-none cursor-pointer outline-none
//             ${interacted ? "bg-[linear-gradient(-45deg,#3b82f6,#60a5fa,#3b82f6,#60a5fa)] bg-[length:300%_100%] animate-wave" : "bg-gray-300"}
//           `}
//         />

//         {/* Labels */}
//         <div className="flex justify-between text-sm text-gray-400 mt-1">
//           <span>1</span>
//           <span>10</span>
//         </div>

//         <div className="absolute right-0 top-2 text-sm font-bold text-blue-500">
//           {value}
//         </div>
//       </div>

//       {/* Slider Thumb Styles */}
//       <style jsx>{`
//         input[type="range"]::-webkit-slider-thumb {
//           appearance: none;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           background: #3b82f6;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
//           cursor: pointer;
//           margin-top: -8px;
//         }

//         input[type="range"]::-moz-range-thumb {
//           background: #3b82f6;
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           cursor: pointer;
//           border: none;
//         }

//         @keyframes wave {
//           0% {
//             background-position: 0% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }

//         .animate-wave {
//           animation: wave 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   )
// }



// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// type Props = {
//   id: string;
//   label: string;
//   description?: string;
//   value: number;
//   onChange: (val: number) => void;
// };

// export default function WaveSlider({ id, label, value, onChange }: Props) {
//   const [isDragging, setIsDragging] = useState(false);

//   return (
//     <div className="mb-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
//       <label className="block mb-2 text-lg font-bold text-gray-800">{label}</label>

//       <div className="relative w-full h-10 mt-6">
//         {/* Background wave track */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 bg-blue-100 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-blue-400 transition-all duration-300"
//             style={{ width: `${((value - 1) / 9) * 100}%` }}
//           />
//         </div>

//         {/* Boat Emoji (Thumb) */}
//         <motion.div
//           className="absolute -top-4 text-2xl"
//           animate={{
//             left: `${((value - 1) / 9) * 100}%`,
//             x: "-50%", // Center the emoji
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           🚤
//         </motion.div>

//         {/* Invisible range input to handle interaction */}
//         <input
//           type="range"
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className="absolute top-0 w-full h-10 opacity-0 cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// }

// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// type Props = {
//   id: string
//   label: string
//   description?: string
//   value: number
//   onChange: (val: number) => void
// }

// export default function WaveSlider({ id, label, description, value, onChange }: Props) {
//   const [isDragging, setIsDragging] = useState(false)

//   return (
//     <div className="mb-10 p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
//       {/* Label */}
//       <label htmlFor={id} className="block mb-1 text-lg font-semibold text-gray-800">
//         {label}
//       </label>

//       {/* Description */}
//       <p className="text-sm text-gray-500 mb-4">
//         1 = Rarely wonder about things; 10 = Always asking 'why' and wanting to know more
//       </p>

//       <div className="relative w-full h-10">
//         {/* Wave Track */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 bg-blue-100 rounded-full overflow-hidden">
//           <motion.div
//             className="h-full bg-blue-400 rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: `${((value - 1) / 9) * 100}%` }}
//             transition={{ duration: 0.3 }}
//           />
//         </div>

//         {/* Boat Emoji (Floating & Sliding) */}
//         <motion.div
//           className="absolute -top-6 text-2xl"
//           animate={{
//             left: `${((value - 1) / 9) * 100}%`,
//             x: "-50%",
//             y: [0, -2, 0, 2, 0], // bobbing effect
//           }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         >
//           ⛵
//         </motion.div>

//         {/* Invisible Range Input */}
//         <input
//           id={id}
//           type="range"
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className="absolute top-0 w-full h-10 opacity-0 cursor-pointer"
//         />
//       </div>

//       {/* Value Label */}
//       <div className="mt-3 text-right text-sm text-blue-500 font-semibold">
//         Selected: {value}
//       </div>
//     </div>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// type Props = {
//   id: string
//   label: string
//   description?: string
//   value: number
//   onChange: (val: number) => void
// }

// export default function WaveSlider({ id, label, description, value, onChange }: Props) {
//   const [isDragging, setIsDragging] = useState(false)

//   return (
//     <div className="mb-10 p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
//       {/* Label */}
//       <label htmlFor={id} className="block mb-1 text-lg font-semibold text-gray-800">
//         {label}
//       </label>

//       {/* Description */}
//       <p className="text-sm text-gray-500 mb-4">
//         1 = Rarely wonder about things; 10 = Always asking 'why' and wanting to know more
//       </p>

//       <div className="relative w-full h-10">
//         {/* Wave Track */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 bg-blue-100 rounded-full overflow-hidden">
//           <motion.div
//             className="h-full bg-blue-400 rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: `${((value - 1) / 9) * 100}%` }}
//             transition={{ duration: 0.3 }}
//           />
//         </div>

//         {/* Boat Emoji (Static after sliding) */}
//         <motion.div
//           className="absolute -top-6 text-2xl"
//           animate={{
//             left: `${((value - 1) / 9) * 100}%`,
//             x: "-50%",
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           ⛵
//         </motion.div>

//         {/* Invisible Range Input */}
//         <input
//           id={id}
//           type="range"
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className="absolute top-0 w-full h-10 opacity-0 cursor-pointer"
//         />
//       </div>

//       {/* Value Label */}
//       <div className="mt-3 text-right text-sm text-blue-500 font-semibold">
//         Selected: {value}
//       </div>
//     </div>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// type Props = {
//   id: string
//   label: string
//   description?: string
//   value: number
//   onChange: (val: number) => void
// }

// export default function WaveSlider({ id, label, description, value, onChange }: Props) {
//   const [isDragging, setIsDragging] = useState(false)

//   return (
//     <div className="mb-10 p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
//       {/* Label */}
//       <label htmlFor={id} className="block mb-1 text-lg font-semibold text-gray-800">
//         {label}
//       </label>

//       {/* Description */}
//       <p className="text-sm text-gray-500 mb-4">
//         1 = Rarely wonder about things; 10 = Always asking 'why' and wanting to know more
//       </p>

//       <div className="relative w-full h-10">
//         {/* Wave Track */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-4 bg-blue-100 rounded-full overflow-hidden">
//           <motion.div
//             className="h-full bg-blue-400 rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: `${((value - 1) / 9) * 100}%` }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Boat Emoji (Smooth slide only) */}
//         <motion.div
//           className="absolute -top-6 text-2xl"
//           animate={{
//             left: `${((value - 1) / 9) * 100}%`,
//             x: "-50%",
//           }}
//           transition={{ type: "tween", duration: 1.2, ease: "easeInOut" }}
//         >
//           ⛵
//         </motion.div>

//         {/* Invisible Range Input */}
//         <input
//           id={id}
//           type="range"
//           min={1}
//           max={10}
//           step={1}
//           value={value}
//           onChange={(e) => onChange(Number(e.target.value))}
//           onMouseDown={() => setIsDragging(true)}
//           onMouseUp={() => setIsDragging(false)}
//           onTouchStart={() => setIsDragging(true)}
//           onTouchEnd={() => setIsDragging(false)}
//           className="absolute top-0 w-full h-10 opacity-0 cursor-pointer"
//         />
//       </div>

//       {/* Value Label */}
//       <div className="mt-3 text-right text-sm text-blue-500 font-semibold">
//         Selected: {value}
//       </div>
//     </div>
//   )
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  id: string;
  label: string;
  description?: string;
  value: number;
  onChange: (val: number) => void;
};

export default function WaveSlider({
  id,
  label,
  description,
  value,
  onChange,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  const progressPercent = ((value - 1) / 9) * 100;

  return (
    <div className="mb-10 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-300 transition-all hover:shadow-xl">
      {/* Label */}
      <label htmlFor={id} className="block mb-2 text-lg font-semibold text-gray-800">
        {label}
      </label>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 mb-4">
          1 = Rarely wonder about things; 10 = Always asking 'why' and wanting to know more
        </p>
      )}

      {/* Slider Track */}
      <div className="relative w-full h-10">
        {/* Wave Fill */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-4 rounded-full bg-blue-100 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Boat */}
      <motion.div
  className="absolute -top-8 text-2xl pointer-events-none"
  animate={{
    left: `${progressPercent}%`,
    x: "-50%",
  }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
>
  {/* Ripple effect behind the boat */}
  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
    initial={{ scale: 1, opacity: 0.4 }}
    animate={{ scale: 3.5, opacity: 0 }}
    transition={{
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
    }}
  >
    <div className="w-8 h-8 rounded-full bg-blue-300 opacity-50" />
  </motion.div>

  {/* Boat emoji with bouncing animation */}
  <motion.div
    animate={{
      y: isDragging ? [0, -4, 0, 4, 0] : [0, -2, 0, 2, 0],
    }}
    transition={{
      duration: isDragging ? 0.6 : 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    ⛵
  </motion.div>
</motion.div>

        {/* Value Tooltip */}
        <motion.div
          className="absolute -top-14 left-1/2 text-sm bg-blue-500 text-white px-2 py-1 rounded shadow-md"
          animate={{ left: `${progressPercent}%`, x: "-50%", opacity: isDragging ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.div>

        {/* Range Input */}
        <input
          id={id}
          type="range"
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className="absolute top-0 w-full h-10 opacity-0 cursor-pointer"
        />
      </div>

      {/* Value Label */}
      <div className="mt-3 text-right text-sm text-blue-500 font-semibold">
        Selected: {value}
      </div>
    </div>
  );
}