import type { CSSProperties } from "react";
import type { ComponentPropsWithoutRef } from "react";

type CutSize = "sm" | "md" | "lg";

const cutVar: Record<CutSize, string> = {
  sm: "var(--cut-sm)",
  md: "var(--cut-md)",
  lg: "var(--cut-lg)",
};

type CornerStarProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * The tiny copper signal detail that pairs with a clipped corner.
 * Always decorative — hidden from assistive technology.
 */
export function CornerStar({ size = 14, className = "", style }: CornerStarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`text-accent ${className}`}
      style={style}
    >
      <path
        d="M12 2 L13.8 9.4 L21 12 L13.8 14.6 L12 22 L10.2 14.6 L3 12 L10.2 9.4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

type ClippedCornerProps = {
  cut?: CutSize;
  star?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className">;

/**
 * DESIGN_SYSTEM.md Section 10 signature motif: one clipped top-right corner
 * paired with a tiny copper star. Use intentionally, not on every card.
 */
export function ClippedCorner({
  cut = "md",
  star = true,
  className = "",
  children,
  style,
  ...rest
}: ClippedCornerProps) {
  const cutValue = cutVar[cut];

  return (
    <div
      className={`relative ${className}`}
      style={{
        clipPath: `polygon(0 0, calc(100% - ${cutValue}) 0, 100% ${cutValue}, 100% 100%, 0 100%)`,
        ...style,
      }}
      {...rest}
    >
      {children}
      {star ? (
        <CornerStar
          className="absolute pointer-events-none"
          style={{
            top: `calc(${cutValue} * 0.4)`,
            right: `calc(${cutValue} * 0.4)`,
          }}
        />
      ) : null}
    </div>
  );
}
