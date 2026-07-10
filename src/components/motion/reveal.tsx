import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-based reveals. These NEVER hide content behind JS — the fade-up is a pure
 * CSS load animation (`.reveal` / `.stagger` in globals.css) that always resolves
 * to visible, and collapses to instant under prefers-reduced-motion. Server
 * components, so no client bundle cost.
 */

type Tag = "div" | "section" | "li" | "span";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties)
      : undefined;
  return (
    <Tag className={cn("reveal", className)} style={style}>
      {children}
    </Tag>
  );
}

/** Auto-staggers its DIRECT children (see `.stagger` in globals.css). */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("stagger", className)}>{children}</div>;
}

/** A staggered child. Just a layout wrapper — the `.stagger > *` rule animates it. */
export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  return <Tag className={className}>{children}</Tag>;
}
