"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/portfolio";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    const subject = encodeURIComponent(`Portfolio inquiry for ${profile.name}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()} <${form.email.trim()}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initial);
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <section id="contact" className="section border-t border-white/10">
      <div className="container-page">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="section-title">Let’s talk internships.</h2>
              <p className="section-copy mt-6">
                Reach out for fintech, SWE, quantitative finance, data systems, or product engineering internship opportunities.
              </p>
              <a href={`mailto:${profile.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={submit} noValidate>
                  <Field label="Name" value={form.name} error={errors.name} onChange={(value) => update("name", value)} />
                  <Field label="Email" type="email" value={form.email} error={errors.email} onChange={(value) => update("email", value)} />
                  <Field label="Message" textarea value={form.message} error={errors.message} onChange={(value) => update("message", value)} />
                  <Button type="submit">{sent ? "Message ready" : "Send message"}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, error, type = "text", textarea = false }: { label: string; value: string; onChange: (value: string) => void; error?: string; type?: string; textarea?: boolean }) {
  const id = label.toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-300">{label}</label>
      {textarea ? <Textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} /> : <Input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} />}
      {error ? <p className="mt-1.5 text-sm font-semibold text-red-400">{error}</p> : null}
    </div>
  );
}

function validate(form: FormState) {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Enter a valid email.";
  if (form.message.trim().length < 12) errors.message = "Message should be at least 12 characters.";
  return errors;
}
