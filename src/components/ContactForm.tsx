"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  endpoint: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ endpoint }: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (endpoint.includes("YOUR_FORMSPREE_ID")) {
      setStatus("error");
      setMessage("Add your Formspree form ID in src/lib/data.ts before submitting.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { errors?: Array<{ message?: string }> } | null;
        throw new Error(data?.errors?.[0]?.message ?? "Form submission failed.");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent successfully. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea id="message" name="message" required placeholder="Tell me about your role, team, or project." />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" ? <p className="text-sm text-primary">{message}</p> : null}
      {status === "error" ? <p className="text-sm text-destructive">{message}</p> : null}
    </form>
  );
}
