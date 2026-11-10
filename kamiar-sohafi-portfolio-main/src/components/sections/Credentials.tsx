import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  credentialCategoryOrder,
  credentials,
  DETAILS_ON_REQUEST,
  type Credential,
} from "@/content/credentials";

export function Credentials() {
  const certificates = credentials.filter((c) => c.kind === "certificate");
  const training = credentials.filter((c) => c.kind === "training");

  return (
    <section id="credentials" aria-labelledby="credentials-title" className="surface-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeader
          id="credentials"
          index="04"
          label="Credentials"
          title="Certificates & training"
          intro="Certificates held are listed separately from courses completed. A course entry means the training was completed — not that the vendor exam or certification was obtained."
        />

        <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal>
              <h3 className="eyebrow text-muted-foreground">Certificates</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                International standards certificates.
              </p>
            </Reveal>
          </div>
          <ul className="border-t border-rule lg:col-span-9">
            {certificates.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 60} className="grid gap-3 border-b border-border py-7 md:grid-cols-9 md:gap-8">
                <div className="md:col-span-5">
                  <KindMark kind={c.kind} />
                  <p className="font-display mt-3 text-2xl md:text-3xl">{c.title}</p>
                </div>
                <div className="md:col-span-4 md:pt-7">
                  <CredentialMeta credential={c} />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal>
              <h3 className="eyebrow text-muted-foreground">Training & coursework</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Completed courses, grouped by discipline.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-9">
            {credentialCategoryOrder.map((category, gi) => {
              const items = training.filter((t) => t.category === category);
              if (!items.length) return null;
              return (
                <Reveal key={category} delay={gi * 80}>
                  <h4 className="border-b border-rule pb-3 text-sm font-medium">{category}</h4>
                  <ul className="divide-y divide-border">
                    {items.map((c) => (
                      <li key={c.title} className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-base">{c.title}</p>
                          <KindMark kind={c.kind} />
                        </div>
                        {c.note && <p className="mt-1.5 text-sm text-muted-foreground">{c.note}</p>}
                        <div className="mt-2">
                          <CredentialMeta credential={c} compact />
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function KindMark({ kind }: { kind: Credential["kind"] }) {
  return kind === "certificate" ? (
    <span className="eyebrow inline-flex shrink-0 items-center gap-2 text-primary">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
      Certificate
    </span>
  ) : (
    <span className="eyebrow inline-flex shrink-0 items-center gap-2 pt-1 text-muted-foreground">
      <span aria-hidden="true" className="size-1.5 rounded-full border border-current" />
      Training
    </span>
  );
}

function CredentialMeta({ credential, compact }: { credential: Credential; compact?: boolean }) {
  const fields = [
    { label: "Issuer", value: credential.issuer },
    { label: "Date", value: credential.date },
    { label: "Credential ID", value: credential.credentialId },
  ].filter((f) => f.value);

  if (!fields.length && !credential.url) {
    return <p className={compact ? "text-xs text-muted-foreground" : "text-sm text-muted-foreground"}>{DETAILS_ON_REQUEST}</p>;
  }

  return (
    <dl className="grid gap-1 text-sm">
      {fields.map((f) => (
        <div key={f.label} className="flex gap-2">
          <dt className="text-muted-foreground">{f.label}:</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
      {credential.url && (
        <a href={credential.url} target="_blank" rel="noreferrer" className="link-underline w-fit text-primary">
          Verify credential ↗
        </a>
      )}
    </dl>
  );
}
