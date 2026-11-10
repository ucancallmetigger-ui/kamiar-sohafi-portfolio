/**
 * Projects / case studies.
 *
 * Editing guide
 * - Each project gets its own case-study page at /work/<slug>.
 * - `featured: true` shows the project as a large image-led block on the home page;
 *   others appear in the "Further work" index.
 * - `label` is the honest scope badge (e.g. "Dataset-based lab"). Keep it accurate.
 * - Only add `links` that really exist. Never add a live-demo URL you cannot verify.
 * - Leave `stack` / `outcomes` empty if unknown — the page shows a neutral note instead.
 */

import socImage from "@/assets/work-soc.jpg";
import analyticsImage from "@/assets/work-analytics.jpg";
import chatbotImage from "@/assets/work-chatbot.jpg";
import websecImage from "@/assets/work-websec.jpg";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  discipline: "Security" | "AI / ML" | "Data" | "Web";
  label: string;
  summary: string;
  role: string;
  objective: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
  links: ProjectLink[];
  /** Shown when there are no public links, e.g. "Screenshots available on request". */
  evidenceNote?: string;
  /** Optional context/disclaimer displayed prominently on the case study. */
  disclaimer?: string;
  year?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "splunk-bots-v3",
    title: "Splunk BOTS v3 Security Analytics Dashboard",
    discipline: "Security",
    label: "Dataset-based lab",
    summary:
      "A security analytics dashboard built on the Boss of the SOC v3 dataset, designed to help an analyst move from raw events to a readable investigation picture.",
    role: "Sole builder — data exploration, searches and dashboard design",
    objective:
      "Practise SOC-style investigation on a realistic, public training dataset and present the findings in a dashboard an analyst could actually use during triage.",
    approach: [
      "Explored the BOTS v3 data sources to understand which logs answer which investigative questions.",
      "Wrote Splunk searches to surface suspicious activity and pivot between related events.",
      "Grouped panels by investigative question rather than by data source, so the dashboard reads top-to-bottom like a triage checklist.",
      "Documented the reasoning behind each panel so the work can be reviewed and repeated.",
    ],
    stack: ["Splunk", "Boss of the SOC v3 dataset"],
    outcomes: [
      "A working dashboard that organises the dataset around investigative questions.",
      "Hands-on practice with search, pivoting and timeline building in a SIEM.",
    ],
    links: [],
    evidenceNote: "Dashboard screenshots and search notes available on request.",
    disclaimer:
      "Portfolio lab project using the public Boss of the SOC v3 training dataset. It is not a real client incident or production environment.",
    image: socImage,
    imageAlt: "Fibre-optic strands carrying faint blue light against a dark background",
    featured: true,
  },
  {
    slug: "power-bi-analytics",
    title: "Power BI Analytics Portfolio",
    discipline: "Data",
    label: "Portfolio project",
    summary:
      "A collection of Power BI dashboards, led by a Superstore sales and profit analysis, focused on clear layout and questions a business reader would ask.",
    role: "Analyst & dashboard designer",
    objective:
      "Build readable, interactive reports that explain performance — sales, profit and related metrics — without requiring the reader to dig.",
    approach: [
      "Prepared and modelled the Superstore dataset for reporting.",
      "Designed dashboard pages around a small number of headline questions (where is profit made, where is it lost).",
      "Added filters and drill-downs so readers can move from summary to detail.",
      "Published the reports and supporting files in a public GitHub repository.",
    ],
    stack: ["Power BI"],
    outcomes: [
      "A public repository of dashboards that can be opened and reviewed.",
      "A repeatable layout pattern for business-facing analytics.",
    ],
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/ucancallmetigger-ui/PowerBI-Analytics-Portfolio",
      },
    ],
    image: analyticsImage,
    imageAlt: "Geometric shadows on a warm concrete wall, rising like a bar chart",
    featured: true,
  },
  {
    slug: "persian-gas-chatbot",
    title: "Persian Gas Company Chatbot",
    discipline: "AI / ML",
    label: "Applied AI project",
    summary:
      "A conversational assistant experience built on open large language models (Llama / Gemma), designed around questions customers might ask a gas company.",
    role: "Developer — model selection, prompt design and chat experience",
    objective:
      "Explore how open-weight language models can provide a helpful, on-topic assistant for a utility-style service.",
    approach: [
      "Compared Llama- and Gemma-based models for answer quality and responsiveness.",
      "Shaped prompts and conversation flow to keep answers focused on the service domain.",
      "Built a simple chat interface for testing conversations end to end.",
    ],
    stack: ["Llama", "Gemma"],
    outcomes: [],
    links: [],
    evidenceNote: "Demo walkthrough available on request.",
    image: chatbotImage,
    imageAlt: "A soft blue gas flame glowing behind textured glass",
    featured: true,
  },
  {
    slug: "web-security-assessment",
    title: "Web Application Security Assessment",
    discipline: "Security",
    label: "Practical assessment work",
    summary:
      "Hands-on web application assessment and vulnerability scanning, following a structured methodology from reconnaissance to reporting.",
    role: "Tester — scoping, scanning, manual validation and write-up",
    objective:
      "Apply penetration-testing methodology to web applications in authorised, practice-oriented settings and communicate findings clearly.",
    approach: [
      "Defined scope and rules of engagement before testing.",
      "Mapped the application: entry points, parameters, authentication and session handling.",
      "Ran vulnerability scans and validated results manually to separate real issues from noise.",
      "Wrote up findings with severity, evidence and remediation guidance.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    evidenceNote: "Sanitised sample report available on request.",
    disclaimer:
      "Described as practical learning and assessment work. Specific findings and targets are not published.",
    image: websecImage,
    imageAlt: "Macro of a dark circuit board with a thin line of blue light",
    featured: true,
  },
  {
    slug: "bitcoin-price-prediction",
    title: "Bitcoin Price Prediction",
    discipline: "AI / ML",
    label: "Experimental ML project",
    summary:
      "A time-series forecasting experiment on historical Bitcoin price data, exploring how far simple and learned models can go on a noisy signal.",
    role: "Sole developer",
    objective: "Practise time-series preparation, model training and honest evaluation on volatile data.",
    approach: [
      "Prepared historical price data for supervised learning.",
      "Trained and compared forecasting models.",
      "Evaluated predictions against held-out data and noted limitations.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    disclaimer: "Experimental learning project. Not financial advice or a trading tool.",
    featured: false,
  },
  {
    slug: "iran-weather-prediction",
    title: "Iran Weather Prediction",
    discipline: "AI / ML",
    label: "Experimental ML project",
    summary:
      "A forecasting experiment using historical weather observations for Iran, focused on data cleaning and model comparison.",
    role: "Sole developer",
    objective: "Practise working with real-world environmental data and compare forecasting approaches.",
    approach: [
      "Collected and cleaned historical weather observations.",
      "Engineered features such as seasonality.",
      "Trained models and compared their errors.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    disclaimer: "Experimental learning project.",
    featured: false,
  },
  {
    slug: "melanoma-image-classification",
    title: "Melanoma Image Classification",
    discipline: "AI / ML",
    label: "Experimental ML project",
    summary:
      "A deep-learning image classification experiment on skin-lesion images, exploring convolutional models and evaluation on imbalanced data.",
    role: "Sole developer",
    objective: "Practise building and evaluating an image classifier on a challenging, imbalanced dataset.",
    approach: [
      "Prepared and augmented the image dataset.",
      "Trained convolutional neural network models.",
      "Evaluated with metrics suited to imbalanced classes.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    disclaimer:
      "Experimental ML project for learning purposes only. It is not a medical device and makes no diagnostic claims.",
    featured: false,
  },
  {
    slug: "cafe-website",
    title: "Cafe Website",
    discipline: "Web",
    label: "Design & development project",
    summary:
      "Design and development of a website for a cafe concept — layout, visual identity on the web, and a responsive build.",
    role: "Designer & developer",
    objective: "Create a warm, easy-to-navigate site that presents a menu, atmosphere and contact details.",
    approach: [
      "Defined the page structure and content hierarchy.",
      "Designed a visual direction suited to a cafe.",
      "Built a responsive site that works well on phones.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    evidenceNote: "Screenshots available on request.",
    featured: false,
  },
  {
    slug: "web-design-development",
    title: "Website Design & Development",
    discipline: "Web",
    label: "Design & development work",
    summary:
      "Further website design and build work — from layout and typography to responsive, accessible front-end implementation.",
    role: "Designer & developer",
    objective: "Deliver clear, well-structured websites that are easy to use and maintain.",
    approach: [
      "Planned structure and content with the end reader in mind.",
      "Designed layouts with attention to typography and spacing.",
      "Implemented responsive front-ends.",
    ],
    stack: [],
    outcomes: [],
    links: [],
    evidenceNote: "Examples available on request.",
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getAdjacentProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length] as Project;
};
