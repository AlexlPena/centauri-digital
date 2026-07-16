import type { ComponentPropsWithoutRef } from "react";

type EyebrowProps = {
  /** "inverse" for use on graphite surfaces — plain --accent fails WCAG AA
   * (3.29:1) against graphite, --accent-soft passes (5.16:1). */
  tone?: "default" | "inverse";
} & ComponentPropsWithoutRef<"p">;

/**
 * DESIGN_SYSTEM.md Section 7: uppercase Geist Mono, increased tracking,
 * small size. Copper by default — matches every eyebrow in the approved
 * reference frames (Selected Work, Capabilities, Process, About).
 */
export function Eyebrow({ tone = "default", className = "", ...rest }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-xs tracking-technical uppercase ${
        tone === "inverse" ? "text-accent-soft" : "text-accent"
      } ${className}`}
      {...rest}
    />
  );
}
