/**
 * Certifications & training.
 *
 * `kind`
 *   - "certificate": a certificate you hold (issued by a named body).
 *   - "training": a course / coursework you completed. This does NOT imply the vendor exam
 *     or certification was passed. Change an entry to "certificate" only once it is verified.
 *
 * Leave `issuer`, `date`, `credentialId` and `url` as null when unknown — the site then
 * shows "Credential details available on request" instead of inventing anything.
 */

export type Credential = {
  title: string;
  kind: "certificate" | "training";
  category: "Offensive Security" | "Security Foundations" | "SOC & SIEM" | "AI & Data" | "Standards & Management";
  issuer: string | null;
  date: string | null;
  credentialId: string | null;
  url: string | null;
  note?: string;
};

export const credentials: Credential[] = [
  // Standards & management — reported international certificates
  {
    title: "ISO 9001 — Quality Management",
    kind: "certificate",
    category: "Standards & Management",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "ISO/IEC 27001 — Information Security Management",
    kind: "certificate",
    category: "Standards & Management",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "ISO/IEC 20000 — IT Service Management",
    kind: "certificate",
    category: "Standards & Management",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },

  // Offensive security training
  {
    title: "PWK — Penetration Testing with Kali Linux",
    kind: "training",
    category: "Offensive Security",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
    note: "Course training. Not an OSCP certification.",
  },
  {
    title: "CEH — Certified Ethical Hacker course",
    kind: "training",
    category: "Offensive Security",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "SANS 504 — Hacker Tools, Techniques & Incident Handling",
    kind: "training",
    category: "Offensive Security",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },

  // Foundations
  {
    title: "CompTIA Security+ course",
    kind: "training",
    category: "Security Foundations",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "CompTIA Network+ course",
    kind: "training",
    category: "Security Foundations",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },

  // SOC
  {
    title: "SOC Analyst — Tier 1",
    kind: "training",
    category: "SOC & SIEM",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "Splunk",
    kind: "training",
    category: "SOC & SIEM",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },

  // AI & data
  {
    title: "Deep Learning",
    kind: "training",
    category: "AI & Data",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "Machine Learning",
    kind: "training",
    category: "AI & Data",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
  {
    title: "Power BI & Data Analysis",
    kind: "training",
    category: "AI & Data",
    issuer: null,
    date: null,
    credentialId: null,
    url: null,
  },
];

export const credentialCategoryOrder: Credential["category"][] = [
  "Offensive Security",
  "Security Foundations",
  "SOC & SIEM",
  "AI & Data",
];

export const DETAILS_ON_REQUEST = "Credential details available on request";
