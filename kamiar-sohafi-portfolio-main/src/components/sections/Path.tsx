import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { path } from "@/content/path";

export function Path() {
  return (
    <section id="path" aria-labelledby="path-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeader
          id="path"
          index="05"
          label="Path"
          title="Learning path"
          intro="How the skill set has been built — from foundations to current focus."
        />

        <ol className="relative mt-20 md:mt-28 lg:ml-[25%]">
          <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-2 w-px bg-rule" />
          {path.map((entry, i) => {
            const isLast = i === path.length - 1;
            return (
              <Reveal as="li" key={entry.title} delay={i * 60} className="relative grid gap-4 pb-14 pl-10 md:grid-cols-9 md:gap-8 md:pb-16">
                <span
                  aria-hidden="true"
                  className={
                    isLast
                      ? "absolute left-0 top-2 size-[11px] rounded-full bg-primary ring-4 ring-primary/20"
                      : "absolute left-0 top-2 size-[11px] rounded-full border border-silver bg-background"
                  }
                />
                <p className="eyebrow pt-2 text-muted-foreground md:col-span-2">
                  {entry.period ?? `Phase ${String(i + 1).padStart(2, "0")}`}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl leading-tight">{entry.title}</h3>
                  {entry.organisation && <p className="mt-1 text-sm text-silver">{entry.organisation}</p>}
                  <p className="mt-3 leading-relaxed text-muted-foreground">{entry.description}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-1.5 md:col-span-3 md:pt-2">
                  {entry.tags.map((t) => (
                    <li key={t} className="rounded-full border border-rule px-2.5 py-1 text-xs text-silver">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
