import { part2Traits } from "@/lib/data/part2Traits";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function StepPart2() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Part 2: How I Learn</h2>
      {part2Traits.map((trait) => (
        <div key={trait.id} className="mb-6">
          <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
          <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
        </div>
      ))}
    </div>
  );
}