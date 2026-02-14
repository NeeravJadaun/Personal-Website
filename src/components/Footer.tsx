import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/70 py-8 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>&copy; {year} {siteConfig.name}</p>
        <div className="flex items-center gap-4">
          <Link href={`mailto:${siteConfig.email}`} aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
