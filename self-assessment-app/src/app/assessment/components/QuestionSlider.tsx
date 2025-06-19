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

export default function QuestionSlider({
  id,
  label,
  description,
  value,
  onChange,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  // Calculate gradient based on value (1 to 10)
  const getSliderColor = (val: number) => {
    if (val <= 3) return "bg-red-400";
    if (val <= 6) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="mb-8 px-4 py-10 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="flex items-start justify-between mb-2">
        <label htmlFor={id} className="text-[#cb887c] font-medium text-base">
          {label}
        </label>
        {description && (
          <span className="text-sm text-gray-500 max-w-[60%] text-right">
            {description}
          </span>
        )}
      </div>

      <div className="relative w-full">
        {/* Value bubble */}
        {isDragging && (
          <motion.div
            className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-bold text-[#cb887c]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
          >
            {value}
          </motion.div>
        )}

        {/* Track */}
        <input
          type="range"
          id={id}
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className={`
            w-full h-2 rounded-full appearance-none cursor-pointer
            ${getSliderColor(value)} transition-colors duration-300
          `}
        />

        {/* Custom Thumb Style */}
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            background: #cb887c;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.3s ease;
            box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
            margin-top: -9px;
          }

          input[type='range']::-moz-range-thumb {
            background: #cb887c;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 0 3px rgba(203, 136, 124, 0.3);
          }

          input[type='range']::-webkit-slider-runnable-track {
            height: 2px;
            background: transparent;
          }
        `}</style>
      </div>
    </div>
  );
}