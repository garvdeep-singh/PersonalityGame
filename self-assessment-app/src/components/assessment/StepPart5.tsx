
import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part5Traits } from "@/lib/data/part5Traits"; // ← Replace X with part number

type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

export default function StepPart5({ values, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">5. Natural Knacks & Sensitivities (Things that Come Easily or Affect Me)</h2>
      {part5Traits.map((trait) => (
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