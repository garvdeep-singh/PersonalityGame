import { part1Traits } from "@/lib/data/part1Traits";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function StepPart1() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Part 1: How I Think & Imagine</h2>
      {part1Traits.map((trait) => (
        <div key={trait.id} className="mb-6">
          <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
          <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
        </div>
      ))}
    </div>
  );
}