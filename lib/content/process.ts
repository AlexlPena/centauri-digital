export type ProcessStage = {
  number: string;
  name: string;
  purpose: string;
};

// DESIGN_SYSTEM.md Section 16.
export const processStages: ProcessStage[] = [
  {
    number: "01",
    name: "Discover",
    purpose: "Surface constraints, workflows, data, and decision points.",
  },
  {
    number: "02",
    name: "Architect",
    purpose: "Define interfaces, data flows, rules, and outcomes.",
  },
  {
    number: "03",
    name: "Build",
    purpose: "Ship focused iterations and automate the right parts.",
  },
  {
    number: "04",
    name: "Operationalize",
    purpose: "Measure impact, refine the system, and embed it into real work.",
  },
];
