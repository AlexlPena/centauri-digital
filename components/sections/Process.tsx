import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processStages } from "@/lib/content/process";

export function Process() {
  return (
    <section id="approach" className="bg-graphite py-12 md:py-13">
      <Container className="flex flex-col gap-9 md:flex-row md:items-start md:justify-between md:gap-12">
        <SectionHeading eyebrow="Process" tone="inverse" className="md:max-w-xs">
          A repeatable path from friction to leverage.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:flex md:flex-1 md:gap-8">
          {processStages.map((stage) => (
            <div key={stage.number} className="flex flex-col gap-3 md:flex-1">
              <div className="flex items-center gap-3 border-t border-surface/20 pt-4">
                <span className="font-mono text-xs tracking-technical text-surface/50">
                  {stage.number}
                </span>
              </div>
              <h3 className="text-lg leading-display tracking-display text-surface">
                {stage.name}
              </h3>
              <p className="text-sm leading-body text-surface/70">{stage.purpose}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
