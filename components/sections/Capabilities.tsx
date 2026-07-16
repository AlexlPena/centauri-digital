import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClippedCorner } from "@/components/ui/ClippedCorner";
import {
  capabilities,
  capabilityLedger,
  capabilityFooterTags,
} from "@/lib/content/capabilities";

const iconPaths: Record<string, string> = {
  "01": "M12 3 21 8l-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  "02": "M5 5h5v5H5V5ZM14 9h5v5h-5V9ZM5 19h5v-5h5",
  "03": "M11 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a7 7 0 0 1 14 0M18 4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z",
  "04": "M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 1-2-2V5ZM20 5a2 2 0 0 0-2-2h-5v18h5a2 2 0 0 0 2-2V5Z",
};

function CapabilityIcon({ number, tone }: { number: string; tone: "default" | "inverse" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={tone === "inverse" ? "text-surface" : "text-text-primary"}
    >
      <path d={iconPaths[number]} />
    </svg>
  );
}

function CapabilityCard({
  number,
  title,
  description,
  anchor,
}: {
  number: string;
  title: string;
  description: string;
  anchor?: boolean;
}) {
  const content = (
    <div
      className={`flex h-full flex-col gap-5 px-6 py-8 ${
        anchor ? "bg-graphite text-surface" : "bg-background text-text-primary"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-xs tracking-technical ${
            anchor ? "text-surface/60" : "text-text-secondary"
          }`}
        >
          {number}
        </span>
        <CapabilityIcon number={number} tone={anchor ? "inverse" : "default"} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-lg leading-display tracking-display">{title}</h3>
        <div className={`border-t ${anchor ? "border-surface/20" : "border-line"}`} />
        <p
          className={`text-sm leading-body ${
            anchor ? "text-surface/80" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  if (anchor) {
    return (
      <ClippedCorner cut="md" className="h-full border border-graphite">
        {content}
      </ClippedCorner>
    );
  }

  return <div className="h-full border border-line">{content}</div>;
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-12 md:py-13">
      <Container className="flex flex-col gap-11">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
          <SectionHeading eyebrow="Capabilities" className="md:max-w-md">
            The architecture behind better workflows.
          </SectionHeading>
          <p className="max-w-[42ch] text-md leading-body text-text-secondary md:pt-1">
            Centauri designs the knowledge, rules, automation, and adoption
            layer that lets teams use AI in real operational work.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-px bg-line-strong md:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 hidden h-px w-[8%] bg-accent md:block"
            style={{ left: "71%" }}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-0">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.number} {...capability} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-line pt-9 md:grid-cols-3 md:gap-12">
          {capabilityLedger.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-3 ${
                i > 0 ? "md:border-l md:border-line md:pl-12" : ""
              }`}
            >
              <Eyebrow>{item.label}</Eyebrow>
              <p className="text-md leading-body text-text-primary">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 border-t border-line pt-6">
          {capabilityFooterTags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-technical uppercase text-text-secondary">
                {tag}
              </span>
              {i < capabilityFooterTags.length - 1 ? (
                <span className="text-text-secondary" aria-hidden="true">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
