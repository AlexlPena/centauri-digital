export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectDiagram = {
  sources: string[];
  orchestratorLabel: string;
  orchestratorKeywords: string[];
  outputs: string[];
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  problem: string;
  system: string;
  stack: string[];
  /** The one large graphite case-study card (Section 15's "featured" project). */
  featured?: boolean;
  resultHeadline?: ProjectStat;
  resultDescription?: string;
  secondaryStats?: ProjectStat[];
  /** Single headline stat used on the smaller, non-featured cards. */
  stat?: ProjectStat;
  diagram?: ProjectDiagram;
};

/**
 * Mock project data — DESIGN_SYSTEM.md Section 15. Structured so this
 * module is the seam Supabase replaces later without touching the UI
 * (per CLAUDE.md's lib/content/ convention).
 */
export const projects: Project[] = [
  {
    slug: "product-intake-orchestrator",
    index: "01",
    name: "Product Intake Orchestrator",
    problem:
      "Intake came in everywhere. Manual triage caused delays, missed context, and rework.",
    system:
      "Unified intake, auto-routing, context capture, and SLA-aware prioritization.",
    stack: ["PostgreSQL", "TypeScript", "Next.js", "n8n", "OpenAI", "Slack", "Linear"],
    featured: true,
    resultHeadline: { value: "12", label: "hrs" },
    resultDescription: "returned to the team each week",
    secondaryStats: [
      { value: "-38%", label: "Intake cycle time" },
      { value: "-27%", label: "Rework from missing context" },
      { value: "+29%", label: "On-time SLA adherence" },
      { value: "12 hrs", label: "Returned to team each week" },
    ],
    diagram: {
      sources: ["Web Form", "Slack", "Email", "Sales"],
      orchestratorLabel: "Orchestrator",
      orchestratorKeywords: ["Classify", "Enrich", "Route", "Prioritize"],
      outputs: ["Product Backlog", "Engineering Triage", "QA Validation", "Ops Follow-up"],
    },
  },
  {
    slug: "revenue-signal-pipeline",
    index: "02",
    name: "Revenue Signal Pipeline",
    problem:
      "Leads sat too long. Signals were scattered across tools with no clear priority.",
    system:
      "Ingest, score, and route high-intent signals with feedback loops to improve precision over time.",
    stack: ["BigQuery", "Airbyte", "dbt", "Python", "Next.js", "Salesforce"],
    stat: { value: "3.4x", label: "faster lead qualification" },
  },
  {
    slug: "qa-intelligence-layer",
    index: "03",
    name: "QA Intelligence Layer",
    problem:
      "Review cycles were slow and repetitive. Defects escaped due to inconsistent checks.",
    system:
      "AI-assisted review, risk scoring, and checklist generation tailored to change context.",
    stack: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Playwright", "Looker"],
    stat: { value: "41%", label: "fewer repetitive review steps" },
  },
];
