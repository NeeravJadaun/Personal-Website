import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">Projects</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="section-title">Shipped technical work.</h2>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Projects chosen for internship recruiters: embedded systems, AI products, APIs, dashboards, and data visualization.
            </p>
          </div>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name}>
              <Card className="group h-full overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(0,194,255,0.35)] hover:shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />
                  <Image src={project.image} alt={project.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge>{project.label}</Badge>
                    <ExternalLink className="h-4 w-4 text-slate-500" />
                  </div>
                  <CardTitle>{String(index + 1).padStart(2, "0")} · {project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                      {tag}
                    </span>
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
