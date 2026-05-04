import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-28 w-full rounded-xl border border-[var(--input)] bg-[var(--secondary)] px-4 py-3 text-sm text-[var(--foreground)] shadow-sm transition-colors placeholder:text-slate-400 focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(255,107,74,0.16)] disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
