"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { navigationLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const brandChars = Array.from("Neerav Jadaun");

  const iconLinks = [
    {
      href: `mailto:${siteConfig.email}`,
      label: "Email Neerav",
      icon: Mail,
      external: false
    },
    {
      href: siteConfig.linkedin,
      label: "LinkedIn profile",
      icon: Linkedin,
      external: true
    },
    {
      href: siteConfig.github,
      label: "GitHub profile",
      icon: Github,
      external: true
    }
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative inline-flex flex-col"
          aria-label="Go to home section"
        >
          {shouldReduceMotion ? (
            <span className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">Neerav Jadaun</span>
          ) : (
            <span className="brand-shimmer brand-glow font-heading text-xl font-bold tracking-tight sm:text-2xl">
              {brandChars.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.32, ease: "easeOut", delay: index * 0.03 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          )}
          <motion.span
            aria-hidden
            className="brand-underline mt-1 block h-[2px] w-full rounded-full opacity-90"
            initial={shouldReduceMotion ? undefined : { scaleX: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 0.9 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
            style={{ transformOrigin: "left center" }}
          />
        </motion.a>

        <div className="flex items-center gap-2">
          {iconLinks.map(({ href, label, icon: Icon, external }) => (
            <motion.div
              key={label}
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Link
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/[0.04] text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_22px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-white/25 hover:from-white/[0.2] hover:to-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.26), transparent 72%)" }}
                />
                <Icon className="relative h-[18px] w-[18px] stroke-[2.05px] transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <nav aria-label="Primary" className="border-t border-border/60">
        <ul className="mx-auto flex w-full max-w-5xl items-center gap-4 overflow-x-auto px-4 py-2 text-sm text-muted-foreground sm:px-6 lg:px-8">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="relative transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
