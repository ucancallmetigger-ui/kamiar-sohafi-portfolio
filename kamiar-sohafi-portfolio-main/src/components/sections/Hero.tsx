import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Portrait } from "@/components/site/Portrait";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-[var(--header-height)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="eyebrow flex items-center justify-between pt-8 text-muted-foreground md:pt-12">
          <span className="animate-fade" style={d(100)}>Portfolio — Security / AI</span>
          <span className="animate-fade hidden sm:inline" style={d(200)}>
            {site.location}
          </span>
        </div>
        <div className="hairline animate-draw mt-5" style={d(150)} />

        <div className="mt-10 grid gap-x-10 gap-y-12 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 id="hero-title" className="display-xl uppercase">
              <span className="block overflow-hidden pb-[0.04em]">
                <span className="animate-mask" style={d(200)}>
                  {site.firstName}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.04em] pl-[8%]">
                <span className="animate-mask" style={d(320)}>
                  {site.lastName}
                </span>
              </span>
            </h1>

            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-8">
              <p className="animate-rise font-display text-3xl leading-tight md:col-span-3 md:text-4xl" style={d(550)}>
                Cybersecurity <em className="text-primary">&amp;</em> AI Engineer
              </p>
              <div className="md:col-span-5">
                <p className="animate-rise max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg" style={d(650)}>
                  {site.intro}
                </p>
                <div className="animate-rise mt-8 flex flex-wrap gap-3" style={d(750)}>
                  <Button asChild variant="editorial" size="xl">
                    <Link to="/" hash="work">
                      Explore selected work
                      <ArrowDown />
                    </Link>
                  </Button>
                  <Button asChild variant="line" size="xl">
                    <Link to="/" hash="contact">
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <Portrait className="mx-auto max-w-sm lg:max-w-none" />
          </div>
        </div>

        <div className="animate-rise mt-16 border-t border-rule md:mt-24" style={d(900)}>
          <div className="grid grid-cols-2 gap-y-4 py-6 md:grid-cols-6">
            <ul className="col-span-2 grid grid-cols-2 gap-4 md:col-span-4 md:grid-cols-4" aria-label="Focus areas">
              {site.focusAreas.map((area, i) => (
                <li key={area} className="flex gap-3 text-sm">
                  <span className="eyebrow pt-[0.2rem] text-primary">0{i + 1}</span>
                  <span className="text-silver">{area}</span>
                </li>
              ))}
            </ul>
            <ul className="col-span-2 flex gap-6 text-sm md:justify-end" aria-label="Social profiles">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
