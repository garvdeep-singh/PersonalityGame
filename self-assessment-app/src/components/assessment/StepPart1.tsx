// // // import { part1Traits } from "@/lib/data/part1Traits";
// // // import { Slider } from "@/components/ui/slider";
// // // import { Label } from "@/components/ui/label";

// // // export function StepPart1() {
// // //   return (
// // //     <div>
// // //       <h2 className="text-2xl font-semibold mb-4">Part 1: How I Think & Imagine</h2>
// // //       {part1Traits.map((trait) => (
// // //         <div key={trait.id} className="mb-6">
// // //           <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
// // //           <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // import QuestionSlider from "@/app/assessment/components/QuestionSlider";
// // import { part1Traits } from "@/lib/data/part1Traits";
// // import { Slider } from "@/components/ui/slider";
// // import { Label } from "@/components/ui/label";

// // export default function StepPart1() {
// //   return (
// //     <div>
      
// //       <h2 className="text-2xl font-semibold mb-4">Part 1: How I Think & Imagine</h2>
// //       {part1Traits.map((trait) => (
// //         <div key={trait.id} className="mb-6">
// //           <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
// //           <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import QuestionSlider from "@/app/assessment/components/QuestionSlider";
// import { part1Traits } from "@/lib/data/part1Traits";

// export default function StepPart1() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Part 1: How I Think & Imagine</h2>

//       {part1Traits.map((trait) => (
//         <QuestionSlider
//           key={trait.id}
//           question={trait.label}
//           description={trait.description}
//           value={trait.value ?? 5} // You can manage state later
//           onChange={(newValue) => {
//             // Handle state update here if needed
//             console.log(`Value for ${trait.label}:`, newValue);
//           }}
//         />
//       ))}
//     </div>
//   );
// }

import { useState } from "react";
import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part1Traits } from "@/lib/data/part1Traits";

export default function StepPart1() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleSliderChange = (id: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Part 1: How I Think & Imagine</h2>
      {part1Traits.map((trait) => (
        <QuestionSlider
          key={trait.id}
          id={trait.id}
          label={trait.label}
          description={trait.description}
          value={answers[trait.id] ?? 5} // default to 5
          onChange={(val) => handleSliderChange(trait.id, val)}
        />
      ))}
    </div>
  );
}