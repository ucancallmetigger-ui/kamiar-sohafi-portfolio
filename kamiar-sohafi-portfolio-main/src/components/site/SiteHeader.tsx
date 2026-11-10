import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navigation, site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navigation.map((n) => n.id);

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const active = useActiveSection(isHome ? sectionIds : []);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="font-display grid size-10 place-items-center rounded-full border border-rule text-lg transition-colors duration-500 group-hover:border-primary group-hover:text-primary">
            {site.initials}
          </span>
          <span className="hidden text-sm tracking-wide sm:block">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to="/"
                    hash={item.id}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "eyebrow group flex items-center gap-2 py-2 transition-colors duration-300 hover:text-foreground",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <span className={cn("transition-colors", isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary")}>
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="line" size="sm" className="hidden h-9 rounded-full px-4 md:inline-flex">
            <a href={`mailto:${site.email}`}>Get in touch</a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-rule transition-colors hover:border-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100svh-var(--header-height))] overflow-y-auto bg-background px-6 pb-10 pt-6 md:px-10 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="divide-y divide-border border-y border-border">
              {navigation.map((item, i) => (
                <li key={item.id} className="animate-rise" style={{ "--d": `${60 * i}ms` } as React.CSSProperties}>
                  <Link
                    to="/"
                    hash={item.id}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="eyebrow text-primary">0{i + 1}</span>
                    <span className="font-display text-4xl">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a className="link-underline hover:text-foreground" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            {site.socials.map((s) => (
              <a key={s.href} className="link-underline hover:text-foreground" href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
