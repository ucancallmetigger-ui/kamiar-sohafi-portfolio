import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

import { Reveal } from "@/components/site/Reveal";
import { getAdjacentProject, getProject } from "@/content/projects";
import { site } from "@/content/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    if (!project) {
      return { meta: [{ title: `Project unavailable — ${site.name}` }, { name: "robots", content: "noindex" }] };
    }
    const title = `${project.title} — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const next = getAdjacentProject(slug);

  return (
    <article className="pt-[var(--header-height)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center justify-between pt-8 md:pt-12">
          <Link
            to="/"
            hash="work"
            className="group eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All work
          </Link>
          <p className="eyebrow text-muted-foreground">Case study</p>
        </div>
        <div className="hairline animate-draw mt-5" />

        <header className="grid gap-10 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-9">
            <p className="eyebrow animate-rise flex flex-wrap gap-3 text-muted-foreground" style={d(80)}>
              <span className="text-primary">{project.discipline}</span>
              <span aria-hidden="true">/</span>
              <span>{project.label}</span>
            </p>
            <h1 className="display-lg animate-rise mt-6" style={d(160)}>
              {project.title}
            </h1>
          </div>
          <p
            className="animate-rise text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-1"
            style={d(260)}
          >
            {project.summary}
          </p>
        </header>

        {project.image && (
          <div className="animate-unveil mt-14 aspect-[16/8] overflow-hidden bg-surface md:mt-20" style={d(350)}>
            <img
              src={project.image}
              alt={project.imageAlt ?? ""}
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {project.disclaimer && (
          <Reveal className="mt-12 grid gap-3 border-l-2 border-primary bg-surface/70 px-6 py-5 md:grid-cols-12 md:gap-8">
            <p className="eyebrow pt-1 text-primary md:col-span-2">Scope</p>
            <p className="text-silver md:col-span-10">{project.disclaimer}</p>
          </Reveal>
        )}

        <Reveal className="mt-16 grid gap-8 border-y border-rule py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Discipline">{project.discipline}</Meta>
          <Meta label="Stack">
            {project.stack.length ? project.stack.join(" · ") : <Muted>To be documented</Muted>}
          </Meta>
          <Meta label="Type">{project.label}</Meta>
        </Reveal>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          <Block index="01" title="Objective">
            <p className="font-display text-3xl leading-snug md:text-4xl">{project.objective}</p>
          </Block>

          <Block index="02" title="Approach">
            <ol className="divide-y divide-border border-y border-border">
              {project.approach.map((step, i) => (
                <li key={step} className="grid grid-cols-12 gap-4 py-5">
                  <span className="eyebrow col-span-2 pt-1 text-primary md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 leading-relaxed md:col-span-11">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block index="03" title="Outcomes">
            {project.outcomes.length ? (
              <ul className="space-y-3">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-4 leading-relaxed">
                    <span aria-hidden="true" className="text-primary">
                      /
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed text-muted-foreground">
                Outcomes are not quantified here. Details can be discussed on request.
              </p>
            )}
          </Block>

          <Block index="04" title="Evidence & links">
            {project.links.length > 0 && (
              <ul className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex h-12 items-center gap-2 rounded-full border border-rule px-6 text-sm transition-colors duration-500 hover:border-primary hover:text-primary"
                    >
                      {l.label}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {(project.evidenceNote || project.links.length === 0) && (
              <p className={project.links.length ? "mt-5 text-muted-foreground" : "text-muted-foreground"}>
                {project.evidenceNote ?? "Evidence available on request."}{" "}
                <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${project.title}`)}`} className="link-underline text-foreground">
                  Request by email
                </a>
              </p>
            )}
          </Block>
        </div>

        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mt-28 block border-t border-rule py-12 md:mt-40 md:py-20"
        >
          <span className="eyebrow text-muted-foreground">Next case study</span>
          <span className="mt-6 flex items-end justify-between gap-6">
            <span className="display-lg transition-transform duration-700 [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-3">
              {next.title}
            </span>
            <span className="grid size-14 shrink-0 place-items-center rounded-full border border-rule transition-colors duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:size-20">
              <ArrowRight className="size-5 md:size-6" />
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-2 text-muted-foreground">{label}</p>
      <div className="text-sm leading-relaxed text-silver">{children}</div>
    </div>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground">{children}</span>;
}

function Block({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <h2 className="eyebrow flex gap-3 pt-2 text-muted-foreground lg:col-span-3">
        <span className="text-primary">{index}</span>
        {title}
      </h2>
      <div className="lg:col-span-8">{children}</div>
    </Reveal>
  );
}

function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-center px-6 pt-[var(--header-height)] md:px-10">
      <p className="eyebrow text-muted-foreground">404 — Case study</p>
      <h1 className="display-lg mt-6">This project isn’t here.</h1>
      <Link to="/" hash="work" className="link-underline mt-8 w-fit text-primary">
        Back to selected work
      </Link>
    </div>
  );
}
