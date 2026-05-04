"use client";

import { Mail, Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

const nav = [
  ["Home", "#home"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"]
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090f]/82 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a href="#home" className="font-mono text-sm font-bold tracking-[0.18em] text-[var(--primary)]">
          NJ
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-400 transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <IconLink href={`mailto:${profile.email}`} label="Email"><Mail className="h-4 w-4" /></IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn"><span className="text-xs font-black">in</span></IconLink>
          <IconLink href={profile.github} label="GitHub"><span className="text-xs font-black">GH</span></IconLink>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>
      {open ? (
        <div className="container-page grid gap-2 border-t border-white/10 bg-[#07090f] py-4 md:hidden">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-slate-300 hover:bg-white/5 hover:text-white">
              {label}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <IconLink href={`mailto:${profile.email}`} label="Email"><Mail className="h-4 w-4" /></IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn"><span className="text-xs font-black">in</span></IconLink>
            <IconLink href={profile.github} label="GitHub"><span className="text-xs font-black">GH</span></IconLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <Button asChild variant="outline" size="icon">
      <a href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    </Button>
  );
}
