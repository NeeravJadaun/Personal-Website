import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-xl border border-[var(--input)] bg-[var(--secondary)] px-4 py-2 text-sm text-[var(--foreground)] shadow-sm transition-colors placeholder:text-slate-500 focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(0,194,255,0.12)] disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
