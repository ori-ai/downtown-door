"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type PhotoSlide = { type: "photo"; src: string; label: string; dwellMs: number };
type VideoSlide = { type: "video"; src: string; poster: string; label: string; dwellMs: number };
type Slide = PhotoSlide | VideoSlide;

// Photo dwell — long enough to actually register before the crossfade starts.
const PHOTO_DWELL_MS = 4400;

// Deliberate, unhurried crossfade — not an abrupt cut.
const CROSSFADE_MS = 1500;

/**
 * Hero rotation — the owner's own hand-picked set of source files
 * (2026-08-07/08). Every video is trimmed to its single best continuous
 * moment after a full second-by-second review of the source clip (not a
 * blind time-range guess) — dwell equals that trimmed clip's own real
 * duration, so it plays once, fully, then advances. One source clip
 * (storefront framing/IMG_4178) was dropped: reviewed frame-by-frame, the
 * whole 11s source is a static, distant, low-visibility shot — no trim of
 * it reads well as hero content, so it's out rather than forced in.
 */
const ACCESS_STRIKE: PhotoSlide = {
  type: "photo",
  src: "/images/real/final_access-strike-install.jpg",
  label: "Electric strike & access wiring",
  dwellMs: PHOTO_DWELL_MS,
};

const GLASS_DOOR_VIDEO: VideoSlide = {
  type: "video",
  src: "/videos/final_glass-hardware-install.mp4",
  poster: "/videos/final_glass-hardware-install-poster.jpg",
  label: "Access-control hardware install",
  dwellMs: 3500,
};

const GLASS_HANDLE: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-glass-handle-install-1stave.jpg",
  label: "Glass door hardware, NYC storefront",
  dwellMs: PHOTO_DWELL_MS,
};

const TOOLS_FLATLAY: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-tools-flatlay-prep.jpg",
  label: "Ready for the job",
  dwellMs: PHOTO_DWELL_MS,
};

const KEYPAD_VIDEO: VideoSlide = {
  type: "video",
  src: "/videos/final_access-keypad-storefront.mp4",
  poster: "/videos/final_access-keypad-storefront-poster.jpg",
  label: "Access control, storefront entry",
  dwellMs: 2503,
};

const GATE_WIRING: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-gate-operator-wiring.jpg",
  label: "Gate operator wiring",
  dwellMs: PHOTO_DWELL_MS,
};

const WAREHOUSE: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-access-control-warehouse.jpg",
  label: "Stocked and ready — real hardware",
  dwellMs: PHOTO_DWELL_MS,
};

const KEYS_HANDFUL: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-schlage-keys-handful.jpg",
  label: "Locksmith work, done right",
  dwellMs: PHOTO_DWELL_MS,
};

// Mobile opens on a static photo (index 0 is always cheap and instant for
// LCP — no video ever considered for that slot on small screens). Desktop
// opens on the glass-door install video instead, per the owner's review —
// everything past index 0 is already lazy either way.
const MOBILE_SLIDES: Slide[] = [
  ACCESS_STRIKE, GLASS_DOOR_VIDEO, GLASS_HANDLE,
  TOOLS_FLATLAY, KEYPAD_VIDEO, GATE_WIRING, WAREHOUSE, KEYS_HANDFUL,
];
const DESKTOP_SLIDES: Slide[] = [
  GLASS_DOOR_VIDEO, ACCESS_STRIKE, GLASS_HANDLE,
  TOOLS_FLATLAY, KEYPAD_VIDEO, GATE_WIRING, WAREHOUSE, KEYS_HANDFUL,
];

export function HeroMedia() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);
  // Mobile-first by default — matches SSR/first paint exactly, so there's
  // never a hydration mismatch. Upgraded to the desktop order (video-first)
  // right after mount via matchMedia, same pattern as reduceMotion below.
  const [isDesktop, setIsDesktop] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    // Tailwind's `md` breakpoint (768px) — matches every other responsive
    // decision in this codebase, so "desktop" here means the same thing it
    // means everywhere else.
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
      setIndex(0); // restart the rotation cleanly on the new order
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const SLIDES = isDesktop ? DESKTOP_SLIDES : MOBILE_SLIDES;
  // Index can briefly be out of range for an instant when SLIDES swaps out
  // from under it (breakpoint crossed mid-cycle) — clamp defensively.
  const safeIndex = index % SLIDES.length;

  React.useEffect(() => {
    // Reduced motion: show the first (static, instant) slide only — no
    // rotation, no autoplaying video, consistent with the rest of the site.
    if (reduceMotion || paused) return;
    const current = SLIDES[safeIndex];
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, current.dwellMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeIndex, paused, reduceMotion, SLIDES.length, isDesktop]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Crossfaded media stack — only the active slide (and the very first,
          for an instant first paint) ever mounts real media; everything
          else is inert until its turn. */}
      {SLIDES.map((slide, i) => {
        const isActive = !reduceMotion && i === safeIndex;
        const isFirstEager = i === 0;
        if (!isActive && !isFirstEager) return null;

        const zoom = !reduceMotion && isActive;

        return (
          <div
            key={`${isDesktop ? "d" : "m"}-${slide.src}`}
            className={cn(
              "absolute inset-0 overflow-hidden transition-opacity ease-in-out",
              isActive || (reduceMotion && i === 0) ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
            aria-hidden={!isActive && !(reduceMotion && i === 0)}
          >
            {slide.type === "photo" ? (
              <div
                className={cn("h-full w-full bg-surface bg-cover bg-center", zoom && "animate-kenburns")}
                style={{
                  backgroundImage: `url('${slide.src}')`,
                  animationDuration: zoom ? `${slide.dwellMs + CROSSFADE_MS}ms` : undefined,
                }}
                role="img"
                aria-label={slide.label}
              />
            ) : (
              <HeroVideoSlide slide={slide} active={isActive} zoom={zoom} />
            )}
          </div>
        );
      })}

      {/* Progress dots — quiet, not the point, but signal "there's more" */}
      {!reduceMotion ? (
        <div className="absolute right-5 top-5 z-10 flex gap-1.5" aria-hidden>
          {SLIDES.map((slide, i) => (
            <span
              key={`${isDesktop ? "d" : "m"}-dot-${slide.src}`}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === safeIndex ? "w-5 bg-brand-300" : "w-1.5 bg-white/25",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HeroVideoSlide({ slide, active, zoom }: { slide: VideoSlide; active: boolean; zoom: boolean }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || !active) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [active]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", zoom && "animate-kenburns")}
      style={{ animationDuration: zoom ? `${slide.dwellMs + CROSSFADE_MS}ms` : undefined }}
      src={active ? slide.src : undefined}
      poster={slide.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={slide.label}
    />
  );
}
