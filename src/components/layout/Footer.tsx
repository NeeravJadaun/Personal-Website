import { profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Built with Next.js.</p>
        <p>Mathematics · Fintech · SWE · Technical Finance</p>
      </div>
    </footer>
  );
}
