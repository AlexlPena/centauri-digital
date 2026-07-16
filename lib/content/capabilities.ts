export type Capability = {
  number: string;
  title: string;
  description: string;
  anchor?: boolean;
};

// DESIGN_SYSTEM.md Section 14. Exactly one graphite anchor (03) — do not
// add a second, and do not turn this into a 4-card grid.
export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Knowledge Architecture",
    description:
      "Turn documents, data, and team context into a governed source of truth.",
  },
  {
    number: "02",
    title: "Workflow Automation",
    description:
      "Route work, trigger actions, and remove fragile manual handoffs.",
  },
  {
    number: "03",
    title: "AI Work Assistants",
    description:
      "Give teams contextual assistants that answer, draft, and support execution.",
    anchor: true,
  },
  {
    number: "04",
    title: "AI Literacy & Adoption",
    description:
      "Build the standards, judgment, and confidence required for practical use.",
  },
];

export const capabilityLedger = [
  {
    label: "Problem",
    copy: "Scattered knowledge. Manual handoffs. Disconnected AI experiments.",
  },
  {
    label: "What we build",
    copy: "Knowledge systems. Workflow logic. Contextual assistants. Practical governance.",
  },
  {
    label: "Business value",
    copy: "Operational clarity. Faster execution. Safer, durable adoption.",
  },
];

export const capabilityFooterTags = ["Knowledge", "Rules", "Action", "Adoption"];
