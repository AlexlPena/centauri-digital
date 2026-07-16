import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClippedCorner } from "@/components/ui/ClippedCorner";
import { projects, type Project } from "@/lib/content/projects";

function FieldRow({
  label,
  children,
  tone,
}: {
  label: string;
  children: React.ReactNode;
  tone: "default" | "inverse";
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
      <span
        className={`font-mono text-xs tracking-technical uppercase sm:w-24 sm:shrink-0 ${
          tone === "inverse" ? "text-surface/50" : "text-text-secondary"
        }`}
      >
        {label}
      </span>
      <div
        className={`text-sm leading-body ${
          tone === "inverse" ? "text-surface/85" : "text-text-secondary"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function DiagramNode({ label, tone }: { label: string; tone: "default" | "inverse" }) {
  return (
    <div
      className={`rounded-card-sm border px-3 py-2 text-xs ${
        tone === "inverse"
          ? "border-surface/20 bg-surface/5 text-surface/90"
          : "border-line bg-surface text-text-secondary"
      }`}
    >
      {label}
    </div>
  );
}

function FeaturedDiagram({ diagram }: { diagram: NonNullable<Project["diagram"]> }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center sm:gap-4">
      <div className="flex flex-col gap-2">
        {diagram.sources.map((source) => (
          <DiagramNode key={source} label={source} tone="inverse" />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 rounded-card border border-accent/30 bg-surface/5 px-4 py-4 text-center">
        <span className="font-mono text-xs tracking-technical uppercase text-accent">
          {diagram.orchestratorLabel}
        </span>
        <span className="text-xs leading-body text-surface/70">
          {diagram.orchestratorKeywords.join(", ")}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {diagram.outputs.map((output) => (
          <DiagramNode key={output} label={output} tone="inverse" />
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <ClippedCorner
      cut="lg"
      className="flex h-full flex-col gap-8 border border-graphite bg-graphite px-7 py-8 text-surface md:px-9 md:py-10"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-technical uppercase text-surface/50">
          Project {project.index}
        </span>
        <h3 className="text-2xl leading-display tracking-display">{project.name}</h3>
      </div>

      <div className="flex flex-col gap-4">
        <FieldRow label="Problem" tone="inverse">
          {project.problem}
        </FieldRow>
        <FieldRow label="System" tone="inverse">
          {project.system}
        </FieldRow>
        <FieldRow label="Stack" tone="inverse">
          {project.stack.join(", ")}
        </FieldRow>
      </div>

      {project.diagram ? <FeaturedDiagram diagram={project.diagram} /> : null}

      {project.resultHeadline ? (
        <div className="flex flex-col gap-6 border-t border-surface/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl leading-none tracking-display">
              {project.resultHeadline.value}
            </span>
            <span className="text-lg text-surface/70">{project.resultHeadline.label}</span>
            {project.resultDescription ? (
              <span className="max-w-[20ch] text-sm leading-body text-surface/70">
                {project.resultDescription}
              </span>
            ) : null}
          </div>

          {project.secondaryStats ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {project.secondaryStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-lg leading-none">{stat.value}</span>
                  <span className="text-xs leading-body text-surface/60">{stat.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </ClippedCorner>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <ClippedCorner
      cut="sm"
      className="flex h-full flex-col gap-6 border border-line bg-background px-6 py-7"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-technical uppercase text-text-secondary">
          Project {project.index}
        </span>
        <h3 className="text-xl leading-display tracking-display text-text-primary">
          {project.name}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <FieldRow label="Problem" tone="default">
          {project.problem}
        </FieldRow>
        <FieldRow label="System" tone="default">
          {project.system}
        </FieldRow>
        <FieldRow label="Stack" tone="default">
          {project.stack.join(", ")}
        </FieldRow>
      </div>

      {project.stat ? (
        <div className="flex flex-col gap-1 border-t border-line pt-4">
          <span className="text-3xl leading-none tracking-display text-text-primary">
            {project.stat.value}
          </span>
          <span className="text-sm leading-body text-text-secondary">
            {project.stat.label}
          </span>
        </div>
      ) : null}
    </ClippedCorner>
  );
}

export function SelectedWork() {
  const featured = projects.find((project) => project.featured);
  const compact = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="py-12 md:py-13">
      <Container className="flex flex-col gap-9">
        <SectionHeading eyebrow="Selected Work">
          Systems built around real operational pressure.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:items-stretch">
          {featured ? (
            <div className="md:col-span-3">
              <FeaturedProjectCard project={featured} />
            </div>
          ) : null}
          <div className="flex flex-col gap-6 md:col-span-2">
            {compact.map((project) => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
