// src/app/assessment/components/AssessmentSelector.tsx

interface AssessmentPart {
  id: string;
  title: string;
  description: string;
}

const parts: AssessmentPart[] = [
  {
    id: "part1",
    title: "Part 1",
    description: "How I Think & Imagine",
  },
  {
    id: "part2",
    title: "Part 2",
    description: "How I Relate & Express",
  },
  {
    id: "part3",
    title: "My Actions & Habits",
    description: "How I Plan & Act",
  },
  // Add more as needed
];

interface Props {
  onSelectPart: (partId: string) => void;
}

export default function AssessmentSelector({ onSelectPart }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {parts.map((part) => (
        <div
          key={part.id}
          onClick={() => onSelectPart(part.id)}
          className="cursor-pointer p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
        >
          <h3 className="text-xl font-bold mb-2">{part.title}</h3>
          <p className="text-gray-600">{part.description}</p>
        </div>
      ))}
    </div>
  );
}