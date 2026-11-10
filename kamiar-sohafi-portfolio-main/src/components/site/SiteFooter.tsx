import { Link } from "@tanstack/react-router";
import { navigation, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.headline}</p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link to="/" hash={item.id} className="link-underline hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:col-span-3 lg:items-end">
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="link-underline hover:text-foreground">
              {s.label} ↗
            </a>
          ))}
          <a href="#top" className="link-underline hover:text-foreground">
            Back to top ↑
          </a>
        </div>
        <p className="eyebrow text-muted-foreground lg:col-span-12">
          © {year} {site.name} · {site.location}
        </p>
      </div>
    </footer>
  );
}
