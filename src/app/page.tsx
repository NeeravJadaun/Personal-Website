"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { TimelineItem } from "@/components/TimelineItem";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutPoints, education, experience, projects, siteConfig, skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />

      <main id="home" className="mesh-overlay relative overflow-x-clip pb-8">
        <div className="cinematic-grain pointer-events-none absolute inset-0" aria-hidden />
        <div className="vignette-layer pointer-events-none absolute inset-0" aria-hidden />
        <section className="relative isolate overflow-hidden border-b border-border/70">
          <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="light-beam pointer-events-none absolute inset-y-0 left-[-55%] w-[58%]" aria-hidden />
          <motion.div
            aria-hidden
            className="floating-orb pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/18 blur-3xl"
            animate={shouldReduceMotion ? undefined : { x: [0, 26, 0], y: [0, -18, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="floating-orb-delay pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-zinc-400/20 blur-3xl"
            animate={shouldReduceMotion ? undefined : { x: [0, -28, 0], y: [0, 18, 0] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div className="mx-auto flex min-h-[74vh] w-full max-w-5xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 inline-flex w-fit rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-sm text-muted-foreground"
            >
              Open to internships in SWE, fintech, and technical finance roles
            </motion.p>

            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              Hi, I&apos;m Neerav Jadaun.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-lg text-muted-foreground sm:text-xl"
            >
              Mathematics Student · University of Waterloo
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "shadow-[0_14px_40px_-22px_rgba(255,255,255,0.85)] hover:shadow-[0_16px_42px_-20px_rgba(255,255,255,0.95)]"
                )}
              >
                View Projects
              </a>
              <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-zinc-500/60 bg-card/60")}>
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-10 flex items-center gap-2"
            >
              <Link
                href={`mailto:${siteConfig.email}`}
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                aria-label="Email Neerav"
              >
                <Mail />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                aria-label="LinkedIn profile"
              >
                <Linkedin />
              </Link>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                aria-label="GitHub profile"
              >
                <Github />
              </Link>
            </motion.div>
          </div>
        </section>

        <Section id="about" title="About">
          <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section id="experience" title="Experience">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {experience.map((item) => (
              <motion.div key={`${item.company}-${item.role}`} variants={fadeUpItem} transition={{ duration: 0.45 }}>
                <TimelineItem {...item} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="projects" title="Projects">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUpItem} transition={{ duration: 0.45 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="skills" title="Skills">
          <motion.div
            variants={staggerContainer}
            initial={shouldReduceMotion ? undefined : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUpItem} transition={{ duration: 0.4 }}>
                <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
                  <CardContent className="space-y-4 pt-6">
                    <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillBadge key={item} label={item} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="education" title="Education">
          <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
            <CardContent className="space-y-5 pt-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-2xl font-semibold">{education.institution}</h3>
                  <p className="text-muted-foreground">{education.degree}</p>
                </div>
                <p className="rounded-full border border-border/70 bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {education.period}
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <SkillBadge key={course} label={course} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section id="contact" title="Let&apos;s Connect">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.45fr]">
            <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
              <CardContent className="space-y-5 pt-6">
                <p className="text-sm text-muted-foreground">
                  Reach out for internship opportunities, technical projects, or discussions around product, data, and fintech systems.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                    aria-label="Email"
                  >
                    <Mail />
                  </Link>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </Link>
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "bg-muted/70 hover:bg-muted")}
                    aria-label="GitHub"
                  >
                    <Github />
                  </Link>
                </div>
                <a href={`mailto:${siteConfig.email}`} className="inline-block text-sm text-primary underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-card/85 backdrop-blur-sm">
              <CardContent className="pt-6">
                <ContactForm endpoint={siteConfig.formspreeEndpoint} />
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
