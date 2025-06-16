"use client"

// import TraitSlider from "./ui/TraitSlider"
import TraitSlider from "@/components/ui/TraitSlider";
interface Question {
  id: string
  label: string
}

interface SliderGroupProps {
  title: string
  questions: Question[]
}

export default function SliderGroup({ title, questions }: SliderGroupProps) {
  return (
    <div className="border rounded-2xl p-4 shadow-md my-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {questions.map((q) => (
        <TraitSlider key={q.id} label={q.label} />
      ))}
    </div>
  )
}