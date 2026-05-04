"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, BrainCircuit, ChartNoAxesCombined, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/lib/portfolio";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="home" className="container-page grid min-h-[calc(84vh-4rem)] items-center py-10">
      <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.08 }}>
          <motion.div variants={fade}><Badge>Open to internships · 2026</Badge></motion.div>
          <motion.h1 variants={fade} className="mt-5 max-w-3xl font-display text-[clamp(3rem,8vw,5.9rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-white">
            {profile.name}
          </motion.h1>
          <motion.p variants={fade} className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-200 sm:text-2xl">
            Mathematics @ University of Waterloo. Building data-driven systems for finance, software, and reliability.
          </motion.p>
          <motion.p variants={fade} className="mt-4 max-w-xl text-base leading-8 text-slate-400">
            {profile.target} I bring math-first thinking, production-minded engineering, and a bias toward measurable outcomes.
          </motion.p>
          <motion.div variants={fade} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projects">View projects <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact me <Mail className="h-4 w-4" /></a>
            </Button>
          </motion.div>
          <motion.div variants={fade} className="mt-6 grid gap-2 sm:grid-cols-3">
            <Signal label="Fintech" value="risk + analytics" />
            <Signal label="Software" value="APIs + products" />
            <Signal label="Systems" value="firmware + reliability" />
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }}>
          <Card className="overflow-hidden p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-950">
              <Image src="/quant-hero.svg" alt="Precision fintech system interface" fill priority className="object-cover" />
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              <Capability icon={<ChartNoAxesCombined className="h-4 w-4" />} label="Data-driven systems" />
              <Capability icon={<BrainCircuit className="h-4 w-4" />} label="Math-first engineering" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Capability({ icon, label }: { icon: ReactNode; label: string }) {
  return <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300">{icon}{label}</div>;
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="signal-panel rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2">
      <div className="relative font-mono text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">{label}</div>
      <div className="relative mt-1 text-xs font-semibold text-slate-300">{value}</div>
    </div>
  );
}
