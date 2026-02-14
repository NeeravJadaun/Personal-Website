"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} className={cn("scroll-mt-28 py-12 sm:py-16", className)}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <motion.span
            initial={shouldReduceMotion ? undefined : { width: 0, opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { width: 64, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-4 block h-[3px] rounded-full bg-primary/80"
          />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-muted-foreground">{subtitle}</p> : null}
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
