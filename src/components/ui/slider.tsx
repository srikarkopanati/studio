
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {/* Updated thumb styling for better visibility - uses accent color */}
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-background bg-accent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    {/* If there are two thumbs (range slider), ensure the second one is also styled */}
    {/* This condition checks if props.value is an array and has more than one thumb.
        SliderPrimitive.Root passes props to its children, so the second thumb (if it exists based on value array length) will be rendered.
        We style it identically.
    */}
    {props.defaultValue && Array.isArray(props.defaultValue) && props.defaultValue.length > 1 && (
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-background bg-accent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}
     {props.value && Array.isArray(props.value) && props.value.length > 1 && !props.defaultValue && (
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-background bg-accent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
