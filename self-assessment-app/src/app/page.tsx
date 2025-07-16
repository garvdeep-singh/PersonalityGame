
"use client";

import { useState } from "react";
import type { FC } from "react";

import StepPart1 from "@/components/assessment/StepPart1";
import StepPart2 from "@/components/assessment/StepPart2";
import StepPart3 from "@/components/assessment/StepPart3";
import StepPart4 from "@/components/assessment/StepPart4";
import StepPart5 from "@/components/assessment/StepPart5";

// Define the prop structure expected by each Step component
type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

// Step components array
const steps: FC<Props>[] = [StepPart1, StepPart2, StepPart3, StepPart4, StepPart5];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Store answers for each step (indexed by step number)
  const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

  const StepComponent = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Submission logic
      console.log("Submitted answers:", answers);
      alert("Form submitted successfully!");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step Component */}
      {StepComponent ? (
  <StepComponent
    values={answers[currentStep] || {}}
    onChange={(id: string, value: number) => {
      setAnswers((prev) => ({
        ...prev,
        [currentStep]: {
          ...prev[currentStep],
          [id]: value,
        },
      }));
    }}
  />
) : null}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="bg-gray-200 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}