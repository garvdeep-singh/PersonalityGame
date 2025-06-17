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

"use client";

import React from "react";

type Props = {
  id: string;
  label: string;
  description?: string;
  value: number;
  onChange: (value: number) => void;
};

export default function QuestionSlider({
  id,
  label,
  description,
  value,
  onChange,
}: Props) {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-6 mb-8 transition-transform transform hover:scale-[1.02] hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{label}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500 font-medium">1</span>
        <input
          type="range"
          min={1}
          max={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-3 appearance-none bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full outline-none cursor-pointer"
        />
        <span className="text-xs text-gray-500 font-medium">10</span>
        <span className="text-sm font-semibold text-purple-700">{value}</span>
      </div>
    </div>
  );
}