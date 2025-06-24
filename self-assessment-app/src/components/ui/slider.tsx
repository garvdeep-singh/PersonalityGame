// "use client"

// import * as React from "react"
// import * as SliderPrimitive from "@radix-ui/react-slider"

// import { cn } from "~/lib/utils"

// function Slider({
//   className,
//   defaultValue,
//   value,
//   min = 0,
//   max = 100,
//   ...props
// }: React.ComponentProps<typeof SliderPrimitive.Root>) {
//   const _values = React.useMemo(
//     () =>
//       Array.isArray(value)
//         ? value
//         : Array.isArray(defaultValue)
//           ? defaultValue
//           : [min, max],
//     [value, defaultValue, min, max]
//   )

//   return (
//     <SliderPrimitive.Root
//       data-slot="slider"
//       defaultValue={defaultValue}
//       value={value}
//       min={min}
//       max={max}
//       className={cn(
//         "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
//         className
//       )}
//       {...props}
//     >
//       <SliderPrimitive.Track
//         data-slot="slider-track"
//         className={cn(
//           "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
//         )}
//       >
//         <SliderPrimitive.Range
//           data-slot="slider-range"
//           className={cn(
//             "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
//           )}
//         />
//       </SliderPrimitive.Track>
//       {Array.from({ length: _values.length }, (_, index) => (
//         <SliderPrimitive.Thumb
//           data-slot="slider-thumb"
//           key={index}
//           className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
//         />
//       ))}
//     </SliderPrimitive.Root>
//   )
// }

// export { Slider }

// "use client"

// import * as React from "react"
// import * as SliderPrimitive from "@radix-ui/react-slider"
// import { cn } from "~/lib/utils"

// interface CustomSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
//   trackClassName?: string
//   rangeClassName?: string
//   thumbClassName?: string
// }

// const Slider = React.forwardRef<HTMLSpanElement, CustomSliderProps>(
//   ({
//     className,
//     defaultValue,
//     value,
//     min = 0,
//     max = 100,
//     trackClassName,
//     rangeClassName,
//     thumbClassName,
//     ...props
//   }, ref) => {
//     const _values = React.useMemo(
//       () =>
//         Array.isArray(value)
//           ? value
//           : Array.isArray(defaultValue)
//             ? defaultValue
//             : [min, max],
//       [value, defaultValue, min, max]
//     )

//     return (
//       <SliderPrimitive.Root
//         ref={ref}
//         defaultValue={defaultValue}
//         value={value}
//         min={min}
//         max={max}
//         className={cn(
//           "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
//           "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
//           className
//         )}
//         {...props}
//       >
//         <SliderPrimitive.Track
//           className={cn(
//             "bg-muted relative grow overflow-hidden rounded-full",
//             "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
//             "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
//             trackClassName
//           )}
//         >
//           <SliderPrimitive.Range
//             className={cn(
//               "bg-primary absolute",
//               "data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
//               rangeClassName
//             )}
//           />
//         </SliderPrimitive.Track>
//         {Array.from({ length: _values.length }, (_, index) => (
//           <SliderPrimitive.Thumb
//             key={index}
//             className={cn(
//               "block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow]",
//               "border-primary bg-background ring-ring/50",
//               "hover:ring-4 focus-visible:ring-4 focus-visible:outline-none",
//               "disabled:pointer-events-none disabled:opacity-50",
//               thumbClassName
//             )}
//           />
//         ))}
//       </SliderPrimitive.Root>
//     )
//   }
// )

// Slider.displayName = "Slider"
// export { Slider }

"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "~/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min],
    [value, defaultValue, min]
  )

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      step={step}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[disabled]:opacity-50",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      {/* TRACK */}
      <SliderPrimitive.Track
        className={cn(
          "relative grow overflow-hidden rounded-full",
          "bg-gray-300",
          "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2"
        )}
      >
        {/* RANGE */}
        <SliderPrimitive.Range
          className={cn(
            "absolute",
            "bg-gray-600",
            "data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>

      {/* THUMB */}
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            "block h-5 w-5 rounded-full bg-white border border-gray-400 shadow-sm",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }