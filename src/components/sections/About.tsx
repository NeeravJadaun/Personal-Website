import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/lib/portfolio";

const values = ["Mathematical modeling", "API-first software", "Embedded reliability", "Data product thinking"];

export default function About() {
  return (
    <section className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">About</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="section-title">Math-driven engineering for real systems.</h2>
              <div className="mt-5 h-px w-44 bg-gradient-to-r from-[var(--primary)] via-[var(--accent-green)] to-transparent" />
            </div>
            <div>
              <p className="section-copy">
                {profile.summary} I’m focused on the intersection of mathematical reasoning, software architecture, and practical product constraints — especially in fintech, SWE, and finance-adjacent technical teams.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <Card key={value}>
                    <CardContent className="p-4 text-sm font-bold text-slate-200">{value}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
