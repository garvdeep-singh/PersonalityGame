"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface TraitSliderProps {
  label: string
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

export default function TraitSlider({
  label,
  min = 1,
  max = 10,
  step = 1,
  onChange
}: TraitSliderProps) {
  const [value, setValue] = useState<number>(Math.floor((min + max) / 2))

  const handleChange = (val: number[]) => {
    setValue(val[0])
    onChange?.(val[0])
  }

  return (
    <div className="my-4">
      <div className="flex justify-between items-center mb-1">
        <Label className="text-md font-medium">{label}</Label>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      <Slider
        defaultValue={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={handleChange}
      />
    </div>
  )
}