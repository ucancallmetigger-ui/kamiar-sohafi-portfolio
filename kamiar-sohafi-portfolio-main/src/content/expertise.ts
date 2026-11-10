/**
 * Areas of expertise.
 * `tools` should only list tools you have actually used — leave it empty rather than guess.
 * `evidence` points to project slugs (see projects.ts) that demonstrate the area.
 */

export type ExpertiseArea = {
  title: string;
  /** "primary" = cybersecurity direction, "complementary" = supporting capabilities */
  tier: "primary" | "complementary";
  description: string;
  focus: string[];
  tools: string[];
  evidence: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    title: "Offensive Security & Penetration Testing",
    tier: "primary",
    description:
      "Structured, methodology-led testing: reconnaissance, enumeration, exploitation and clear write-ups — practised in lab environments and course material.",
    focus: ["Reconnaissance & enumeration", "Exploitation in lab environments", "Reporting & remediation notes"],
    tools: [],
    evidence: ["web-security-assessment"],
  },
  {
    title: "Vulnerability Assessment & Web Security",
    tier: "primary",
    description:
      "Assessing web applications and services for common weaknesses, validating scanner output by hand, and prioritising what matters.",
    focus: ["Web application testing", "Vulnerability scanning & validation", "Risk-based prioritisation"],
    tools: [],
    evidence: ["web-security-assessment"],
  },
  {
    title: "SOC & SIEM",
    tier: "primary",
    description:
      "Tier-1 style monitoring and investigation: searching log data, building dashboards and following an alert from signal to timeline.",
    focus: ["Log search & triage", "Dashboarding for analysts", "Investigation timelines"],
    tools: ["Splunk"],
    evidence: ["splunk-bots-v3"],
  },
  {
    title: "Network Security",
    tier: "primary",
    description:
      "A grounding in networking fundamentals and how they shape defence: protocols, segmentation, traffic analysis and hardening.",
    focus: ["Protocols & traffic analysis", "Segmentation & hardening", "Network-level detection"],
    tools: [],
    evidence: [],
  },
  {
    title: "AI & Machine Learning",
    tier: "complementary",
    description:
      "Applied, experimental work with language models and classical ML — chatbot experiences, forecasting and image classification.",
    focus: ["LLM-based chatbots", "Forecasting experiments", "Image classification"],
    tools: ["Llama", "Gemma"],
    evidence: ["persian-gas-chatbot", "bitcoin-price-prediction", "melanoma-image-classification"],
  },
  {
    title: "Data Analytics & Development",
    tier: "complementary",
    description:
      "Turning raw data into readable dashboards, and designing and building websites end-to-end.",
    focus: ["Interactive dashboards", "Data modelling for reporting", "Website design & build"],
    tools: ["Power BI"],
    evidence: ["power-bi-analytics", "cafe-website"],
  },
];
