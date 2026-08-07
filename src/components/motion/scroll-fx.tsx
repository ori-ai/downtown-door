"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Real, JS-driven scroll motion (as opposed to the CSS `.reveal` load-in in
 * `reveal.tsx`, which animates once on mount, not on scroll-into-view).
 *
 * SAFETY RULE (matches reveal.tsx's own documented rule): content must NEVER
 * be hidden behind JS. Motion's `whileInView` server-renders its `initial`
 * variant inline — if that variant sets opacity:0, a slow hydration, a
 * failed IntersectionObserver, or a fast/instant scroll (anchor jump, "find
 * on page") can leave real content invisible. So `hidden` here never drops
 * opacity below 1 — only position/scale/blur animate. Worst case with JS
 * disabled or slow: content sits fully visible, just without the polish
 * flourish. Best case: a real, scroll-triggered reveal.
 *
 * Also respects prefers-reduced-motion explicitly (Motion doesn't disable
 * transforms for you) by collapsing to a near-instant, transform-free
 * transition when the user has that preference set.
 */

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Subtle vertical parallax — wrap an image/panel in this for scroll depth. */
export function Parallax({
  children,
  className,
  strength = 60,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-strength, strength]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/** opacity never leaves 1 — see file header. Only position/scale/blur animate. */
const revealVariants: Variants = {
  hidden: { opacity: 1, y: 30, scale: 0.98, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

/**
 * A bolder scroll-triggered reveal: slide + slight scale + blur-to-sharp.
 * Content is always visible (opacity:1 throughout) — see file header.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  const reduceMotion = useReducedMotion();
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      variants={reduceMotion ? reducedVariants : revealVariants}
      transition={{ delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 1, y: 26, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeOut } },
};

const reducedStaggerChild: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

/** Motion-driven stagger group — richer than the CSS `.stagger` utility. */
export function MotionStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={className} variants={reduceMotion ? reducedStaggerChild : staggerChild}>
      {children}
    </motion.div>
  );
}
