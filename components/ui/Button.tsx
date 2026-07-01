import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse";
type ButtonIconName = "arrow-right" | "arrow-up-right" | "plus";

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  icon?: ButtonIconName;
  className?: string;
  children: ReactNode;
};

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

// DESIGN_SYSTEM.md Section 20: primary = graphite/off-white (light surfaces).
// "inverse" is the same role flipped for use on a graphite surface (CTA band,
// Section 18's "high-contrast off-white button"). Active states deepen
// contrast back toward the base color per the same section's interaction rule.
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-graphite text-surface hover:bg-graphite-soft active:bg-graphite",
  secondary:
    "bg-transparent text-text-primary border border-line-strong hover:border-accent active:border-line-strong",
  inverse: "bg-surface text-graphite hover:bg-surface-warm active:bg-surface",
};

const iconPaths: Record<ButtonIconName, string> = {
  "arrow-right": "M4 12h16M14 6l6 6-6 6",
  "arrow-up-right": "M6 18 18 6M9 6h9v9",
  plus: "M12 5v14M5 12h14",
};

function ButtonIcon({ icon }: { icon: ButtonIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-[transform,color] duration-200 ease-standard group-hover:translate-x-0.5 group-hover:text-accent"
    >
      <path d={iconPaths[icon]} />
    </svg>
  );
}

/**
 * DESIGN_SYSTEM.md Section 10 + 20: pill-shaped, three surface-aware
 * variants, hover lift + copper icon detail, focus-visible outline.
 */
export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = (as ?? "button") as ElementType;

  return (
    <Tag
      className={`group inline-flex items-center gap-2 rounded-control px-5 py-3 text-sm font-medium leading-none transition-[transform,box-shadow,background-color,border-color] duration-200 ease-standard hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 active:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon ? <ButtonIcon icon={icon} /> : null}
    </Tag>
  );
}
