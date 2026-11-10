import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const further = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionHeader
          id="work"
          index="03"
          label="Selected work"
          title={
            <>
              Selected work, <em className="text-primary">scoped honestly.</em>
            </>
          }
          intro="Labs, assessments and builds — each labelled for what it is. Open a case study for the role, approach, stack and evidence."
        />

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-28 md:mt-40">
          <Reveal className="flex items-end justify-between border-b border-rule pb-4">
            <h3 className="font-display text-3xl md:text-4xl">Further work</h3>
            <p className="eyebrow text-muted-foreground">
              {String(further.length).padStart(2, "0")} projects
            </p>
          </Reveal>
          <ul>
            {further.map((project, i) => (
              <IndexRow key={project.slug} project={project} index={featured.length + i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
      <Reveal
        variant="image"
        className={cn("lg:col-span-7", flip && "lg:order-2 lg:col-start-6")}
      >
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-[16/10] overflow-hidden bg-surface"
        >
          {project.image && (
            <img
              src={project.image}
              alt=""
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:var(--ease-editorial)] group-hover:scale-[1.04]"
            />
          )}
          <span className="eyebrow absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1.5 text-foreground backdrop-blur">
            {project.label}
          </span>
        </Link>
      </Reveal>

      <Reveal delay={120} className={cn("lg:col-span-5", flip && "lg:order-1 lg:col-start-1")}>
        <p className="eyebrow flex gap-3 text-muted-foreground">
          <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.discipline}</span>
        </p>
        <h3 className="display-md mt-5">
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="transition-colors duration-300 hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="eyebrow mb-1.5 text-muted-foreground">Role</dt>
            <dd className="text-silver">{project.role}</dd>
          </div>
          {project.stack.length > 0 && (
            <div>
              <dt className="eyebrow mb-1.5 text-muted-foreground">Stack</dt>
              <dd className="text-silver">{project.stack.join(" · ")}</dd>
            </div>
          )}
        </dl>

        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="group/cta mt-8 inline-flex items-center gap-3 text-sm"
          aria-label={`View case study: ${project.title}`}
        >
          <span className="grid size-10 place-items-center rounded-full border border-rule transition-colors duration-500 group-hover/cta:border-primary group-hover/cta:bg-primary group-hover/cta:text-primary-foreground">
            <ArrowRight className="size-4 transition-transform duration-500 group-hover/cta:translate-x-0.5" />
          </span>
          <span className="link-underline">View case study</span>
        </Link>
      </Reveal>
    </article>
  );
}

function IndexRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="li" delay={(index % 4) * 50} className="border-b border-border">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors duration-500 hover:bg-surface/60 md:px-4 md:py-8"
      >
        <span className="eyebrow col-span-2 text-muted-foreground transition-colors group-hover:text-primary md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="col-span-10 md:col-span-6">
          <span className="font-display block text-2xl transition-transform duration-700 [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-2 md:text-3xl">
            {project.title}
          </span>
          <span className="mt-2 block max-w-xl text-sm text-muted-foreground md:hidden">
            {project.label}
          </span>
        </span>
        <span className="hidden text-sm text-muted-foreground md:col-span-2 md:block">
          {project.discipline}
        </span>
        <span className="hidden text-sm text-silver md:col-span-2 md:block">{project.label}</span>
        <span className="col-span-12 hidden justify-end md:col-span-1 md:flex">
          <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </span>
      </Link>
    </Reveal>
  );
}
