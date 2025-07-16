

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
  "How I Am With Other People",
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
      <span className="text-3xl mb-2">{["💭", "❤️", "🤝"][index]}</span>
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
      <span className="text-3xl mb-2">{["🧠", "👤"][index - 3]}</span>
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