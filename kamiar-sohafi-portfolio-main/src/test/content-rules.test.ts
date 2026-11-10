import { describe, expect, it } from "vitest";

import { credentials } from "@/content/credentials";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

describe("portfolio content rules", () => {
  it("uses the stated contact email and exposes no phone number", () => {
    expect(site.email).toBe("ucancallmetigger@gmail.com");
    expect(JSON.stringify(site)).not.toMatch(/\+?\d[\d\s().-]{8,}\d/);
    expect(Object.keys(site)).not.toContain("phone");
  });

  it("never lists OSCP as a held credential", () => {
    const oscp = credentials.filter((c) => /oscp/i.test(c.title));
    expect(oscp).toHaveLength(0);
  });

  it("lists vendor courses as training, not certificates", () => {
    const courses = ["CEH", "SANS 504", "Security+", "Network+", "SOC Analyst", "Splunk", "PWK"];
    for (const name of courses) {
      const entry = credentials.find((c) => c.title.includes(name));
      expect(entry?.kind, name).toBe("training");
    }
  });

  it("labels the Splunk BOTS v3 project as a dataset-based lab", () => {
    const bots = getProject("splunk-bots-v3");
    expect(bots?.label).toBe("Dataset-based lab");
    expect(bots?.disclaimer).toMatch(/not a real client incident/i);
  });

  it("links the Power BI project to its GitHub repository", () => {
    const pbi = getProject("power-bi-analytics");
    expect(pbi?.links.map((l) => l.href)).toContain(
      "https://github.com/ucancallmetigger-ui/PowerBI-Analytics-Portfolio",
    );
  });

  it("contains no live demo links", () => {
    const links = projects.flatMap((p) => p.links);
    expect(links.filter((l) => /demo|live/i.test(l.label))).toHaveLength(0);
  });
});
