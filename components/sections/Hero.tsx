import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ClippedCorner } from "@/components/ui/ClippedCorner";

type NodeIcon =
  | "book"
  | "grid"
  | "message"
  | "layers"
  | "sliders"
  | "flow"
  | "bolt"
  | "user"
  | "box";

const iconPaths: Record<NodeIcon, string> = {
  book: "M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2V5ZM20 5a2 2 0 0 0-2-2h-5v18h5a2 2 0 0 0 2-2V5Z",
  grid: "M4 4h6v6H4V4ZM14 4h6v6h-6V4ZM4 14h6v6H4v-6ZM14 14h6v6h-6v-6Z",
  message: "M4 5h16v10H8l-4 4V5Z",
  layers: "M12 3 21 8l-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  sliders: "M4 6h16M4 12h16M4 18h16M8 6v0M14 12v0M10 18v0",
  flow: "M5 5h5v5H5V5ZM14 9h5v5h-5V9ZM5 19h5v-5h5",
  bolt: "M13 3 5 14h6l-2 7 8-11h-6l2-7Z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21a7 7 0 0 1 14 0",
  box: "M12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3ZM4 7.5 12 12 20 7.5M12 12v9",
};

function NodeIconGlyph({ icon }: { icon: NodeIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-text-secondary"
    >
      <path d={iconPaths[icon]} />
    </svg>
  );
}

type FlowNode = { label: string; icon: NodeIcon };

const inputs: FlowNode[] = [
  { label: "Scattered Knowledge", icon: "book" },
  { label: "Disconnected Tools", icon: "grid" },
  { label: "Unstructured Requests", icon: "message" },
];

const layers: FlowNode[] = [
  { label: "Unified Knowledge Base", icon: "layers" },
  { label: "Business Context & Rules", icon: "sliders" },
  { label: "Workflow Logic", icon: "flow" },
];

const outputs: FlowNode[] = [
  { label: "Automated Workflows", icon: "bolt" },
  { label: "AI Work Assistants", icon: "user" },
  { label: "Connected Infrastructure", icon: "box" },
];

function FlowCard({ node }: { node: FlowNode }) {
  return (
    <div className="flex items-center gap-3 rounded-card-sm border border-line bg-surface px-4 py-3 shadow-card">
      <NodeIconGlyph icon={node.icon} />
      <span className="text-sm text-text-primary">{node.label}</span>
    </div>
  );
}

/**
 * Static CSS approximation of the Centauri Control Plane (Section 13).
 * The dimensional glass-layer scene with the animated copper signal
 * arrives in milestone 4 (Three.js) — this establishes layout, labels,
 * and reading order only.
 */
function ControlPlane() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4">
      <div className="flex flex-col justify-center gap-3 md:w-1/3">
        {inputs.map((node) => (
          <FlowCard key={node.label} node={node} />
        ))}
      </div>

      <div className="relative flex flex-col justify-center gap-3 py-2 md:w-1/3">
        <div
          aria-hidden="true"
          className="absolute inset-y-4 left-0 w-px bg-accent md:left-1"
        />
        {layers.map((node, i) => (
          <div key={node.label} className="pl-4">
            {i === 0 ? (
              <ClippedCorner
                cut="sm"
                className="rounded-card-lg border border-line-strong bg-surface-warm/80 px-5 py-4 shadow-panel backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <NodeIconGlyph icon={node.icon} />
                  <span className="text-sm font-medium text-text-primary">
                    {node.label}
                  </span>
                </div>
              </ClippedCorner>
            ) : (
              <div className="rounded-card-lg border border-line-strong bg-surface-warm/80 px-5 py-4 shadow-panel backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <NodeIconGlyph icon={node.icon} />
                  <span className="text-sm font-medium text-text-primary">
                    {node.label}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center gap-3 md:w-1/3">
        {outputs.map((node) => (
          <FlowCard key={node.label} node={node} />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="pt-12 pb-12 md:pt-11 md:pb-13">
      <Container className="grid gap-11 md:grid-cols-[3fr_2fr] md:items-center md:gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-hero leading-display tracking-display text-text-primary">
            We turn scattered workflows into intelligent systems.
          </h1>
          <p className="max-w-[55ch] text-lg leading-body text-text-secondary">
            AI architecture, automation, and internal tools designed around
            the way teams actually work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button as="a" href="#work" icon="arrow-up-right">
              Explore selected work
            </Button>
            <Button as="a" href="#approach" variant="secondary" icon="arrow-up-right">
              Our approach
            </Button>
          </div>
        </div>

        <ControlPlane />
      </Container>
    </section>
  );
}
