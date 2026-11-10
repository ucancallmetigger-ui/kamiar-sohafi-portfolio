import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { site } from "@/content/site";

const facts = [
  { label: "Primary direction", value: "Offensive security, vulnerability assessment, SOC operations" },
  { label: "Complementary", value: "AI & machine learning, software development, data analytics" },
  { label: "Based in", value: site.location },
  { label: "Working style", value: "Evidence first, honest scope, clear write-ups" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="surface-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeader
          id="about"
          index="01"
          label="About"
          title={
            <>
              Security is the direction. <em className="text-primary">AI, software and data</em> are
              how the work gets sharper.
            </>
          }
        />

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:items-start lg:gap-8">
          <Reveal className="lg:col-span-3 lg:col-start-1">
            <figure className="relative overflow-hidden bg-muted">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/images/kamiar-about.webp"
                  alt="Professional portrait of Kamiar Sohafi"
                  className="h-full w-full object-cover object-[center_24%]"
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="eyebrow mt-3 text-muted-foreground">Profile — Kamiar Sohafi</figcaption>
            </figure>
          </Reveal>

          <Reveal className="space-y-6 text-lg leading-relaxed lg:col-span-5 lg:col-start-4">
            <p>
              Kamiar Sohafi works at the intersection of cybersecurity and engineering. The main focus
              is offensive security — penetration testing, vulnerability assessment and web and network
              security — alongside the defensive side of the same coin: SOC monitoring and SIEM-based
              investigation.
            </p>
            <p className="text-muted-foreground">
              Most of that knowledge comes from structured training paired with hands-on lab work:
              testing web applications, working through attacker methodology, and investigating
              realistic datasets in Splunk.
            </p>
            <p className="text-muted-foreground">
              Alongside security, Kamiar builds with AI and data — language-model chatbots, experimental
              ML models, Power BI dashboards and websites. These skills feed back into security work
              through automation, analysis and clearer reporting.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3 lg:col-start-10">
            <dl className="divide-y divide-border border-y border-border">
              {facts.map((f) => (
                <div key={f.label} className="grid gap-1 py-5">
                  <dt className="eyebrow text-muted-foreground">{f.label}</dt>
                  <dd className="text-base">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">{site.availability}.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
