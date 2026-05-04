import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(255,107,74,0.38)] bg-[rgba(255,107,74,0.14)] px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--primary)]",
        className
      )}
      {...props}
    />
  );
}
