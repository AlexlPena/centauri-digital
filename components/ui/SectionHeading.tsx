import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

/**
 * Eyebrow + heading pairing used at the top of every section. Semantic
 * heading level is configurable — h1 is reserved for the hero, everything
 * else should stay in document order (DESIGN_SYSTEM.md Section 23).
 */
export function SectionHeading({
  eyebrow,
  as: Heading = "h2",
  className = "",
  children,
  ...rest
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`} {...rest}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="text-3xl md:text-4xl leading-display tracking-display text-text-primary">
        {children}
      </Heading>
    </div>
  );
}
