import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { expertise, type ExpertiseArea } from "@/content/expertise";
import { getProject } from "@/content/projects";

export function Expertise() {
  const primary = expertise.filter((e) => e.tier === "primary");
  const complementary = expertise.filter((e) => e.tier === "complementary");

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeader
          id="expertise"
          index="02"
          label="Expertise"
          title="Four security disciplines, two supporting crafts."
          intro="Each area links to the work that backs it up. Tools are listed only where they have been used in practice."
        />

        <Group label="Primary direction — Cybersecurity" items={primary} offset={0} />
        <Group label="Complementary capabilities" items={complementary} offset={primary.length} />
      </div>
    </section>
  );
}

function Group({ label, items, offset }: { label: string; items: ExpertiseArea[]; offset: number }) {
  return (
    <div className="mt-20 md:mt-28">
      <Reveal>
        <h3 className="eyebrow mb-6 text-muted-foreground">{label}</h3>
      </Reveal>
      <ol className="border-t border-rule">
        {items.map((area, i) => (
          <Reveal
            as="li"
            key={area.title}
            delay={i * 60}
            className="group grid gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-surface/60 md:grid-cols-12 md:gap-8 md:px-4"
          >
              <span className="eyebrow pt-2 text-muted-foreground transition-colors duration-500 group-hover:text-primary md:col-span-1">
                {String(offset + i + 1).padStart(2, "0")}
              </span>
              <h4 className="display-md transition-transform duration-700 [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-2 md:col-span-5">
                {area.title}
              </h4>
              <div className="md:col-span-4">
                <p className="leading-relaxed text-muted-foreground">{area.description}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-silver">
                  {area.focus.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden="true" className="text-primary">
                        /
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5 md:col-span-2">
                {area.tools.length > 0 && (
                  <div>
                    <p className="eyebrow mb-2 text-muted-foreground">Tools</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {area.tools.map((t) => (
                        <li key={t} className="rounded-full border border-rule px-2.5 py-1 text-xs">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {area.evidence.length > 0 && (
                  <div>
                    <p className="eyebrow mb-2 text-muted-foreground">See</p>
                    <ul className="space-y-1.5 text-sm">
                      {area.evidence.map((slug) => {
                        const p = getProject(slug);
                        if (!p) return null;
                        return (
                          <li key={slug}>
                            <Link
                              to="/work/$slug"
                              params={{ slug }}
                              className="group/link inline-flex items-start gap-1 text-silver transition-colors hover:text-primary"
                            >
                              <span className="link-underline">{p.title}</span>
                              <ArrowUpRight className="mt-0.5 size-3.5 shrink-0" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
