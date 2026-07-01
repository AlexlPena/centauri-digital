import type { ComponentPropsWithoutRef } from "react";

type EyebrowProps = ComponentPropsWithoutRef<"p">;

/**
 * DESIGN_SYSTEM.md Section 7: uppercase Geist Mono, increased tracking,
 * small size. Copper by default — matches every eyebrow in the approved
 * reference frames (Selected Work, Capabilities, Process, About).
 */
export function Eyebrow({ className = "", ...rest }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-xs tracking-technical uppercase text-accent ${className}`}
      {...rest}
    />
  );
}
