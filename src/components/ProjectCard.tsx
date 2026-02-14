"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "@/components/SkillBadge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  image: string;
  alt: string;
  highlights: readonly string[];
  tags: readonly string[];
  repoUrl?: string;
  docUrl?: string;
};

export function ProjectCard({ title, image, alt, highlights, tags, repoUrl, docUrl }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="h-full"
    >
      <Card className="shine-border h-full overflow-hidden border-border/80 bg-card/85 shadow-sm transition-shadow hover:shadow-[0_22px_60px_-26px_rgba(255,255,255,0.3)]">
        <motion.div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/70 bg-muted" whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
          <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }} transition={{ duration: 0.5, ease: "easeOut" }} className="h-full w-full">
            <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
        </motion.div>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <SkillBadge key={tag} label={tag} />
            ))}
          </div>

          {(repoUrl || docUrl) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {repoUrl ? (
                <Link
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <Github />
                  GitHub
                </Link>
              ) : null}
              {docUrl ? (
                <Link
                  href={docUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <ExternalLink />
                  Docs
                </Link>
              ) : null}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
