"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/react/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      " peer tw-inline-flex tw-h-[24px] tw-w-[44px] tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-400 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-white disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-slate-900 data-[state=unchecked]:tw-bg-slate-200 dark:focus-visible:tw-ring-slate-800 dark:focus-visible:tw-ring-offset-slate-950 dark:data-[state=checked]:tw-bg-slate-50 dark:data-[state=unchecked]:tw-bg-slate-800",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "tw-pointer-events-none tw-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-white tw-shadow-lg tw-ring-0 tw-transition-transform data-[state=checked]:tw-translate-x-5 data-[state=unchecked]:tw-translate-x-0 dark:tw-bg-slate-950"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
