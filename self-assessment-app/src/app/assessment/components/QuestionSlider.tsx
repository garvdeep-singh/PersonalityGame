
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
  // const progressPercent = ((value - 1) / 9) * 100;
  const progressPercent = 5 + ((value - 1) / 9) * 90;

  // Choose emoji based on value
  const getBoatEmoji = (val: number) => {
    if (val <= 3) return { emoji: "🛶", size: "text-xl" }; // Small canoe
    if (val <= 6) return { emoji: "⛵", size: "text-2xl" }; // Medium sailboat
    return { emoji: "🚢", size: "text-3xl" }; // Big ship
  };

  const { emoji, size } = getBoatEmoji(value);

  return (
    <div className="mb-10 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-300 transition-all hover:shadow-xl">
      {/* Label */}
      <label htmlFor={id} className="block mb-2 text-lg font-semibold text-gray-800">
        {label}
      </label>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 mb-4">
          {description}
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
          className="absolute -top-8 pointer-events-none"
          animate={{
            left: `${progressPercent}%`,
            x: "-50%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* Smooth Ripple effect on boat move */}
          <motion.div
            key={value}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 3.2, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-300/60 blur-sm" />
          </motion.div>

          {/* Boat emoji with bounce */}
          <motion.div
            className={size}
            animate={{
              y: isDragging ? [0, -4, 0, 4, 0] : [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: isDragging ? 0.6 : 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.div>
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="absolute -top-14 left-1/2 text-sm bg-blue-500 text-white px-2 py-1 rounded shadow-md"
          animate={{ left: `${progressPercent}%`, x: "-50%", opacity: isDragging ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.div>

        {/* Slider */}
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