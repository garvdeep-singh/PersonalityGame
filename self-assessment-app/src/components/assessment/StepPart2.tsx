

import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part2Traits } from "@/lib/data/part2Traits"; // ← Replace X with part number

type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

export default function StepPartX({ values, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">2. How I feel and React</h2>
      {part2Traits.map((trait) => (
        <QuestionSlider
          key={trait.id}
          id={trait.id}
          label={trait.label}
          description={trait.description}
          value={values[trait.id] ?? 0}
          onChange={(val) => onChange(trait.id, val)}
        />
      ))}
    </div>
  );
}