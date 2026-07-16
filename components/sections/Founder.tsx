import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function PhotoPlaceholder() {
  return (
    <div
      className="aspect-[3/4] w-full max-w-[220px] shrink-0 rounded-card-lg border border-line bg-surface-muted"
      role="img"
      aria-label="Portrait of Alex Pena — photo pending"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full p-10 text-text-muted/40"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    </div>
  );
}

/**
 * The one place on the site where first-person voice and Alex's name are
 * used — see CLAUDE.md's voice rule and the Notes log entry on the
 * consultancy-vs-portfolio conflict resolution.
 */
export function Founder() {
  return (
    <section id="about" className="py-12 md:py-13">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
        <SectionHeading eyebrow="About" className="md:w-2/5">
          Technical enough to build it. Practical enough to make it stick.
        </SectionHeading>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start md:w-3/5">
          <PhotoPlaceholder />

          <div className="flex flex-col gap-5 text-md leading-body text-text-secondary">
            <p>I&apos;m Alex Pena, AI Solutions Specialist at Centerfield.</p>
            <p>
              I build systems that reduce friction and unlock capacity across
              product, design, development, QA, sales, and operations.
            </p>
            <p>
              My background spans engineering, automation, and product
              operations—so I design solutions that are technical, practical,
              and built to last.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
