import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CornerStar } from "@/components/ui/ClippedCorner";

export function CTA() {
  return (
    <section id="contact" className="bg-graphite py-12 md:py-13">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="relative flex items-start gap-4">
          <CornerStar size={20} className="mt-1 shrink-0" />
          <h2 className="max-w-[24ch] text-3xl leading-display tracking-display text-surface md:text-4xl">
            Have a workflow that should work better?
          </h2>
        </div>

        {/* TODO: no real contact destination exists yet (mailto, form, or
            scheduling link) — see CLAUDE.md Notes. */}
        <Button as="a" href="#contact-pending" variant="inverse" icon="arrow-right">
          Start a conversation
        </Button>
      </Container>
    </section>
  );
}
