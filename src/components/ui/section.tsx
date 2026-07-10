import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container-page", className)} {...props} />;
}

export function Section({
  className,
  topBorder = false,
  ...props
}: React.HTMLAttributes<HTMLElement> & { topBorder?: boolean }) {
  return (
    <section
      className={cn("py-14 md:py-20", topBorder && "border-t border-line", className)}
      {...props}
    />
  );
}

/** Eyebrow + heading + optional intro, used above section content. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-body">{intro}</p> : null}
    </div>
  );
}
