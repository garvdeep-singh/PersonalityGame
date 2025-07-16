
import QuestionSlider from "@/app/assessment/components/QuestionSlider";
import { part1Traits } from "@/lib/data/part1Traits";

type Props = {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

export default function StepPart1({ values, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">1. How I Think & Imagine</h2>
      {part1Traits.map((trait) => (
        <QuestionSlider
          key={trait.id}
          id={trait.id}
          label={trait.label}
          description={trait.description}
          value={values[trait.id] ?? 0} // default to 5
          onChange={(val) => onChange(trait.id, val)}
        />
      ))}
    </div>
  );
}