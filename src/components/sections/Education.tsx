import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/portfolio";

export default function Education() {
  return (
    <section id="education" className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Mathematical foundation.</h2>
        </Reveal>
        <Reveal className="mt-7">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-[var(--primary-foreground)]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <Badge>{education.period}</Badge>
                  <CardTitle className="mt-3">{education.school}</CardTitle>
                  <p className="mt-1 text-lg font-bold text-slate-300">{education.program}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {education.highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-bold text-slate-300">
                  {item}
                </span>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
