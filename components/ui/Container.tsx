import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
};

type ContainerProps<T extends ElementType> = ContainerOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps<T>>;

/**
 * DESIGN_SYSTEM.md Section 9 page container: max-width rail plus
 * responsive gutters. Components may break the grid, but text should
 * return to these shared columns.
 */
export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={`w-full max-w-[var(--container-max)] mx-auto px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] lg:px-[var(--gutter-desktop)] ${className}`}
      {...rest}
    />
  );
}
