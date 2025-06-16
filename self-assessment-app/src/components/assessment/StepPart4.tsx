import { part4Traits } from "@/lib/data/part4Traits";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function StepPart4() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Part 4: What I Value</h2>
      {part4Traits.map((trait) => (
        <div key={trait.id} className="mb-6">
          <Label htmlFor={trait.id} className="block mb-1">{trait.label}</Label>
          <Slider id={trait.id} defaultValue={[5]} min={1} max={10} step={1} />
        </div>
      ))}
    </div>
  );
}