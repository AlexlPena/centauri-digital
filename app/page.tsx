const colorSwatches = [
  { className: "bg-background", label: "background" },
  { className: "bg-surface", label: "surface" },
  { className: "bg-surface-muted", label: "surface-muted" },
  { className: "bg-surface-warm", label: "surface-warm" },
  { className: "bg-text-primary", label: "text-primary" },
  { className: "bg-text-secondary", label: "text-secondary" },
  { className: "bg-text-muted", label: "text-muted" },
  { className: "bg-accent", label: "accent" },
  { className: "bg-accent-soft", label: "accent-soft" },
  { className: "bg-accent-faint", label: "accent-faint" },
  { className: "bg-accent-muted", label: "accent-muted" },
  { className: "bg-accent-dark", label: "accent-dark" },
  { className: "bg-accent-deep", label: "accent-deep" },
  { className: "bg-graphite", label: "graphite" },
  { className: "bg-graphite-soft", label: "graphite-soft" },
  { className: "bg-graphite-muted", label: "graphite-muted" },
  { className: "bg-line", label: "line" },
  { className: "bg-line-strong", label: "line-strong" },
] as const;

const typeScale = [
  { className: "text-xs", label: "text-xs / 0.75rem" },
  { className: "text-sm", label: "text-sm / 0.875rem" },
  { className: "text-md", label: "text-md / 1rem" },
  { className: "text-lg", label: "text-lg / 1.125rem" },
  { className: "text-xl", label: "text-xl / 1.375rem" },
  { className: "text-2xl", label: "text-2xl / 1.75rem" },
  { className: "text-3xl", label: "text-3xl / 2.25rem" },
  { className: "text-4xl", label: "text-4xl / clamp(2.75rem, 5vw, 4.75rem)" },
  { className: "text-hero", label: "text-hero / clamp(3.25rem, 6vw, 5.75rem)" },
] as const;

const spacingSteps = [
  { className: "w-1", label: "space-1" },
  { className: "w-2", label: "space-2" },
  { className: "w-3", label: "space-3" },
  { className: "w-4", label: "space-4" },
  { className: "w-5", label: "space-5" },
  { className: "w-6", label: "space-6" },
  { className: "w-7", label: "space-7" },
  { className: "w-8", label: "space-8" },
  { className: "w-9", label: "space-9" },
  { className: "w-10", label: "space-10" },
  { className: "w-11", label: "space-11" },
  { className: "w-12", label: "space-12" },
  { className: "w-13", label: "space-13" },
  { className: "w-14", label: "space-14" },
] as const;

const radiusSteps = [
  { className: "rounded-control", label: "radius-control" },
  { className: "rounded-card-sm", label: "radius-card-sm" },
  { className: "rounded-card", label: "radius-card" },
  { className: "rounded-card-lg", label: "radius-card-lg" },
  { className: "rounded-showcase", label: "radius-showcase" },
] as const;

const shadowSteps = [
  { className: "shadow-card", label: "shadow-card" },
  { className: "shadow-panel", label: "shadow-panel" },
  { className: "shadow-dark", label: "shadow-dark" },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-technical uppercase text-accent mb-5">
      {children}
    </p>
  );
}

export default function TokenPreviewPage() {
  return (
    <main className="bg-background min-h-full px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)] py-12">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col gap-13">
        <header className="flex flex-col gap-3">
          <p className="font-mono text-xs tracking-technical uppercase text-text-muted">
            Milestone 1 — Token Preview
          </p>
          <h1 className="text-4xl leading-display tracking-display text-text-primary">
            Design token layer
          </h1>
          <p className="text-md leading-body text-text-secondary max-w-[60ch]">
            Not a real page. This renders every token from DESIGN_SYSTEM.md
            Sections 6-10 so the color, type, spacing, radius, and shadow
            setup can be reviewed before any primitives or sections are built.
          </p>
        </header>

        <section>
          <SectionLabel>Color</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {colorSwatches.map((swatch) => (
              <div key={swatch.label} className="flex flex-col gap-2">
                <div
                  className={`h-9 rounded-card-sm border border-line ${swatch.className}`}
                />
                <span className="font-mono text-xs text-text-secondary">
                  {swatch.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Type scale</SectionLabel>
          <div className="flex flex-col gap-5">
            {typeScale.map((step) => (
              <div
                key={step.className}
                className="flex flex-col gap-1 border-b border-line pb-4"
              >
                <span className="font-mono text-xs text-text-muted">
                  {step.label}
                </span>
                <span
                  className={`${step.className} leading-display text-text-primary`}
                >
                  Scattered workflows, coordinated systems
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Spacing (4px/8px rhythm)</SectionLabel>
          <div className="flex flex-col gap-3">
            {spacingSteps.map((step) => (
              <div key={step.label} className="flex items-center gap-4">
                <span className="font-mono text-xs text-text-muted w-24 shrink-0">
                  {step.label}
                </span>
                <div className={`h-3 bg-accent-soft rounded-card-sm ${step.className}`} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Radius / cut geometry</SectionLabel>
          <div className="flex flex-wrap gap-6">
            {radiusSteps.map((step) => (
              <div key={step.className} className="flex flex-col gap-2">
                <div
                  className={`size-24 bg-surface border border-line ${step.className}`}
                />
                <span className="font-mono text-xs text-text-secondary">
                  {step.label}
                </span>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <div
                className="size-24 bg-surface border border-line"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - var(--cut-md)) 0, 100% var(--cut-md), 100% 100%, 0 100%)",
                }}
              />
              <span className="font-mono text-xs text-text-secondary">
                clipped corner (--cut-md)
              </span>
            </div>
          </div>
        </section>

        <section>
          <SectionLabel>Shadow</SectionLabel>
          <div className="flex flex-wrap gap-8">
            {shadowSteps.map((step) => (
              <div key={step.className} className="flex flex-col gap-3">
                <div
                  className={`size-28 bg-surface rounded-card ${step.className}`}
                />
                <span className="font-mono text-xs text-text-secondary">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-graphite rounded-showcase p-8 flex flex-col gap-3">
          <SectionLabel>Graphite surface + accent</SectionLabel>
          <p className="text-lg leading-body text-surface max-w-[60ch]">
            Graphite is reserved for proof moments and one capability anchor —
            never the default page background.{" "}
            <span className="text-accent">A single copper signal</span> is the
            only accent allowed to repeat across a surface like this.
          </p>
        </section>
      </div>
    </main>
  );
}
