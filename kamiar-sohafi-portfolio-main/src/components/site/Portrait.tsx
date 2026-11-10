import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Hero portrait frame.
 * Set `site.portrait.src` (src/content/site.ts) to show the real photograph.
 * The image is shown as-is (object-cover crop only) — no filters are applied.
 */
export function Portrait({ className }: { className?: string }) {
  const { src, alt } = site.portrait;

  return (
    <figure className={cn("relative", className)}>
      <div className="animate-unveil relative aspect-[4/5] w-full overflow-hidden bg-surface" style={{ "--d": "250ms" } as React.CSSProperties}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top"
            width={960}
            height={1200}
            fetchPriority="high"
          />
        ) : (
          <PortraitPlaceholder />
        )}
        <CornerMarks />
      </div>
      <figcaption className="eyebrow mt-4 flex items-center justify-between text-muted-foreground">
        <span>Plate I</span>
        <span>{site.name}</span>
      </figcaption>
    </figure>
  );
}

function PortraitPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Portrait placeholder — photograph of Kamiar Sohafi coming soon"
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-surface via-secondary to-background"
    >
      <div className="absolute inset-x-[18%] top-[16%] bottom-0 rounded-t-full border border-rule" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="font-display relative select-none text-[9rem] leading-none text-foreground/15 md:text-[11rem]"
      >
        {site.initials}
      </span>
    </div>
  );
}

function CornerMarks() {
  const base = "pointer-events-none absolute size-4 border-foreground/40";
  return (
    <div aria-hidden="true">
      <span className={cn(base, "left-3 top-3 border-l border-t")} />
      <span className={cn(base, "right-3 top-3 border-r border-t")} />
      <span className={cn(base, "bottom-3 left-3 border-b border-l")} />
      <span className={cn(base, "bottom-3 right-3 border-b border-r")} />
    </div>
  );
}
