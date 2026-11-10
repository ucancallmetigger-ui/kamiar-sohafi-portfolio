import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Path } from "@/components/sections/Path";
import { Work } from "@/components/sections/Work";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.seo.title },
      { name: "twitter:description", content: site.seo.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.headline,
          email: `mailto:${site.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Tehran", addressCountry: "IR" },
          sameAs: site.socials.map((s) => s.href),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Credentials />
      <Path />
      <Contact />
    </>
  );
}
