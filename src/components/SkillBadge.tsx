"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <Badge
        variant="outline"
        className="border-primary/35 bg-primary/10 px-3 py-1 text-[0.75rem] text-primary shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.24)]"
      >
        {label}
      </Badge>
    </motion.div>
  );
}
