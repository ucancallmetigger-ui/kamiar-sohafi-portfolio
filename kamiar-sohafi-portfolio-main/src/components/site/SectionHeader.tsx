import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id: string;
};

export function SectionHeader({ index, label, title, intro, id }: SectionHeaderProps) {
  return (
    <Reveal className="grid gap-6 border-t border-rule pt-6 lg:grid-cols-12 lg:gap-8">
      <p className="eyebrow flex gap-3 text-muted-foreground lg:col-span-3">
        <span className="text-primary">{index}</span>
        <span aria-hidden="true">—</span>
        <span>{label}</span>
      </p>
      <div className="lg:col-span-9">
        <h2 id={`${id}-title`} className="display-lg max-w-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
