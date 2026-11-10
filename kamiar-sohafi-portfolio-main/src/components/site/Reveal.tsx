import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  return sharedObserver;
}

/** Marks an element visible when it scrolls into view. Pair with the `reveal` utility. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-visible", "true");
      return;
    }
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);
  return ref;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "image";
  as?: "div" | "li" | "article";
};

/** Scroll-triggered reveal wrapper. Content stays visible without JS or with reduced motion. */
export function Reveal({ children, className, delay = 0, variant = "up", as = "div" }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal
      className={cn(variant === "image" ? "reveal-image" : "reveal", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
