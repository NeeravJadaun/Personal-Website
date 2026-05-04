"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">Skills</p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="section-title">Technical stack.</h2>
            <div className="hidden h-16 w-48 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,74,0.22),rgba(73,214,255,0.16),rgba(215,255,79,0.12))] sm:block" />
          </div>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <Reveal key={group.group}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{group.group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.16 }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-bold text-slate-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
