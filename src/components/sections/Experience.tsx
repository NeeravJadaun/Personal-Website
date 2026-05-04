import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">Experience</p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="section-title">Where I’ve built.</h2>
            <div className="hidden max-w-xs font-mono text-xs leading-6 text-slate-500 sm:block">
              VALIDATION · AUTOMATION · FULL-STACK AI · API-FIRST RELEASES
            </div>
          </div>
        </Reveal>
        <div className="mt-7 grid gap-5">
          {experience.map((entry) => (
            <Reveal key={`${entry.role}-${entry.company}`}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle>{entry.role}</CardTitle>
                      <p className="mt-1 font-bold text-[var(--primary)]">{entry.company} · {entry.location}</p>
                    </div>
                    <p className="font-mono text-sm font-bold text-slate-500">{entry.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-7 text-slate-400">
                        <span className="font-bold text-[var(--primary)]">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
