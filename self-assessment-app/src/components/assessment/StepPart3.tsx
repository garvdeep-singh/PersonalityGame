// import { part3Traits } from "@/lib/data/part3Traits";
// import { Slider } from "@/components/ui/slider";
// import { Label } from "@/components/ui/label";

// export default function StepPart3() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Part 3: How I Feel & Behave</h2>
//       {part3Traits.map((trait) => (
//         <div key={trait.id} className="mb-6">
//           <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
//           <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
//         </div>
//       ))}
//     </div>
//   );
// }

import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part3Traits } from "@/lib/data/part3Traits"; // ← Replace X with part number

type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

export default function StepPart3({ values, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Part 3: [How I Am With Other People & My Values in Interaction]</h2>
      {part3Traits.map((trait) => (
        <QuestionSlider
          key={trait.id}
          id={trait.id}
          label={trait.label}
          description={trait.description}
          value={values[trait.id] ?? 5}
          onChange={(val) => onChange(trait.id, val)}
        />
      ))}
    </div>
  );
}