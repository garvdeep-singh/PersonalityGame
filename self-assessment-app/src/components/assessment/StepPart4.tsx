

import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part4Traits } from "@/lib/data/part4Traits"; // ← Replace X with part number

type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

export default function StepPart4({ values, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">4.How I Act & Get Things Done</h2>
      {part4Traits.map((trait) => (
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