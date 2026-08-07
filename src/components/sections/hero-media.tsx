"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type PhotoSlide = { type: "photo"; src: string; label: string; dwellMs: number };
type VideoSlide = { type: "video"; src: string; poster: string; label: string; dwellMs: number };
type Slide = PhotoSlide | VideoSlide;

// Photo dwell — long enough to actually register before the crossfade starts
// (owner feedback: slides were "switching out too soon" at 3200ms).
const PHOTO_DWELL_MS = 4400;

// Deliberate, unhurried crossfade — not an abrupt cut.
const CROSSFADE_MS = 1500;

const OPENER_PHOTO: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-storefront-door-repair-candid.jpg",
  label: "Storefront door repair, on site",
  dwellMs: PHOTO_DWELL_MS,
};

const OPENER_VIDEO: VideoSlide = {
  type: "video",
  src: "/videos/final_glass-hardware-install.mp4",
  poster: "/videos/final_glass-hardware-install-poster.jpg",
  label: "Access-control hardware install",
  dwellMs: 5000,
};

// Owner's own photo — Mul-T-Lock branded workwear, on the job. Placed early
// in the rotation (right after the opener) per the owner's explicit request.
const OWNER_SHIRT_PHOTO: PhotoSlide = {
  type: "photo",
  src: "/images/real/real-ori-multilock-tee-jobsite.jpg",
  label: "On site, Mul-T-Lock gear",
  dwellMs: PHOTO_DWELL_MS,
};

const REST: Slide[] = [
  { type: "photo", src: "/images/real/final_access-strike-install.jpg", label: "Electric strike & access wiring", dwellMs: PHOTO_DWELL_MS },
  { type: "video", src: "/videos/final_storefront-night-unlock.mp4", poster: "/videos/final_storefront-night-unlock-poster.jpg", label: "Storefront service call, NYC", dwellMs: 6000 },
  { type: "photo", src: "/images/real/final_enforcer-exit-button.jpg", label: "Exit device & access control", dwellMs: PHOTO_DWELL_MS },
  { type: "video", src: "/videos/real-knob-install-quick.mp4", poster: "/videos/real-knob-install-quick-poster.jpg", label: "Hardware install, tested on site", dwellMs: 4800 },
  { type: "photo", src: "/images/real/real-key-cutting-workbench.jpg", label: "On-site key cutting", dwellMs: PHOTO_DWELL_MS },
  { type: "photo", src: "/images/real/real-cctv-camera.jpg", label: "Security cameras & CCTV", dwellMs: PHOTO_DWELL_MS },
];

/**
 * Hero rotation — owner-specified source files first and foremost, filled
 * out with a few already-vetted supporting shots for rhythm.
 *
 * Mobile opens on a static photo (index 0 is always cheap and instant for
 * LCP — no video ever considered for that slot on small screens, regardless
 * of connection quality). Desktop opens on the glass-door install video of
 * the owner instead, per his review notes — everything past index 0 is
 * already lazy either way, so this only changes what's *first*.
 *
 * Every video's dwell time is its OWN real duration (verified against the
 * source files via ffprobe — 5000ms / 6000ms / 4800ms are exact, not
 * estimates) — each clip plays exactly once, fully, then advances. No
 * arbitrary fixed timer, and the crossfade never cuts a clip short since it
 * only starts once dwellMs (== the clip's real length) has elapsed.
 */
const MOBILE_SLIDES: Slide[] = [OPENER_PHOTO, OPENER_VIDEO, OWNER_SHIRT_PHOTO, ...REST];
const DESKTOP_SLIDES: Slide[] = [OPENER_VIDEO, OWNER_SHIRT_PHOTO, OPENER_PHOTO, ...REST];

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
