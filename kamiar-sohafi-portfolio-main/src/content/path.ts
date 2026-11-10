/**
 * Experience / learning path.
 * Add `period` (e.g. "2023 — 2024") and `organisation` only when accurate.
 * Entries without a period are shown as numbered phases.
 */

export type PathEntry = {
  title: string;
  period?: string;
  organisation?: string;
  description: string;
  tags: string[];
};

export const path: PathEntry[] = [
  {
    title: "Networking & security foundations",
    description:
      "Built the base layer: how networks work, how they fail, and the core concepts of defensive security.",
    tags: ["Network+", "Security+"],
  },
  {
    title: "Offensive security training",
    description:
      "Moved into attacker methodology through structured courses and lab practice — reconnaissance, exploitation, and incident handling.",
    tags: ["CEH", "SANS 504", "PWK"],
  },
  {
    title: "Security operations & SIEM",
    description:
      "Applied detection and investigation skills on realistic data, culminating in the Splunk BOTS v3 dashboard lab.",
    tags: ["SOC Tier 1", "Splunk"],
  },
  {
    title: "Applied AI, data & web",
    description:
      "Built complementary skills through ML experiments, an LLM-based chatbot, Power BI dashboards and website projects.",
    tags: ["Machine Learning", "Deep Learning", "Power BI"],
  },
  {
    title: "Current focus",
    description:
      "Deepening penetration testing and web security practice, and looking for teams where security and engineering meet.",
    tags: ["Penetration testing", "Web security"],
  },
];
