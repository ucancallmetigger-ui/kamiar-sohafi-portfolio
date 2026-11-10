import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-border py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow flex gap-3 text-muted-foreground">
            <span className="text-primary">06</span>
            <span aria-hidden="true">—</span>
            <span>Contact</span>
          </p>
          <h2 id="contact-title" className="display-xl mt-10 max-w-6xl normal-case">
            Let’s talk <em className="text-primary">security.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={100} className="lg:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              For roles, freelance security assessments or collaboration, email is the best way to reach
              Kamiar. Credential details and project evidence are available on request.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Hello Kamiar")}`}
              className="font-display mt-10 inline-block break-all text-3xl transition-colors duration-300 hover:text-primary sm:text-4xl md:text-5xl"
            >
              <span className="link-underline">{site.email}</span>
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="editorial" size="xl">
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Hello Kamiar")}`}>
                  <Mail />
                  Send an email
                </a>
              </Button>
              <Button variant="line" size="xl" onClick={copyEmail} aria-live="polite">
                {copied ? <Check /> : <Copy />}
                {copied ? "Email copied" : "Copy email"}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9">
            <ul className="border-t border-rule">
              {site.socials.map((s) => (
                <li key={s.href} className="border-b border-border">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-6 transition-colors hover:text-primary"
                  >
                    <span className="font-display text-3xl">{s.label}</span>
                    <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between border-b border-border py-6">
                <span className="eyebrow text-muted-foreground">Based in</span>
                <span className="text-silver">{site.location}</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
