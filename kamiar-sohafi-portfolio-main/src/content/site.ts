/**
 * Site-wide identity and contact details.
 * Edit this file to change the name, headline, intro copy, links or portrait.
 * Do not add a phone number here — the site intentionally does not display one.
 */

export type SocialLink = { label: string; href: string };

export const site = {
  name: "Kamiar Sohafi",
  firstName: "Kamiar",
  lastName: "Sohafi",
  initials: "KS",
  headline: "Cybersecurity & AI Engineer",
  location: "Tehran, Iran",
  availability: "Open to roles, freelance assessments and collaboration",
  email: "ucancallmetigger@gmail.com",

  /** One or two sentences shown under the name in the hero. */
  intro:
    "Security-first work across penetration testing, vulnerability assessment and SOC analysis — supported by practical experience in applied AI, software development and data analytics.",

  /**
   * Portrait shown in the hero.
   * To use your real photo: put the file in /public (e.g. /public/portrait.jpg)
   * and set `src: "/portrait.jpg"`. Leave `src: null` to show the placeholder frame.
   * A tall crop (about 4:5) works best.
   */
  portrait: {
    src: "/images/kamiar-hero.webp" as string | null,
    alt: "Portrait of Kamiar Sohafi",
  },

  focusAreas: [
    "Offensive Security",
    "Vulnerability Assessment",
    "SOC Operations",
    "Applied AI",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/ucancallmetigger-ui" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kamiar-sohafi8284" },
  ] satisfies SocialLink[],

  seo: {
    title: "Kamiar Sohafi — Cybersecurity & AI Engineer",
    description:
      "Portfolio of Kamiar Sohafi: offensive security, penetration testing, vulnerability assessment and SOC analysis, with complementary work in AI, software and data analytics.",
  },
};

/** Primary in-page navigation. `id` must match a section id on the home page. */
export const navigation = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "work", label: "Work" },
  { id: "credentials", label: "Credentials" },
  { id: "path", label: "Path" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];
