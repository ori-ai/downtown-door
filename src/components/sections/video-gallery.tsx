"use client";

import * as React from "react";
import { Volume2, VolumeX, Video as VideoIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type RealVideo = {
  src: string;
  poster: string;
  label: string;
};

/**
 * A single lazy-loaded, muted, autoplaying video card.
 *
 * Mobile-data + motion safety:
 * - The <video> `src` is withheld entirely until the card scrolls into view
 *   (IntersectionObserver, 200px rootMargin) — nothing above a poster JPG
 *   downloads until a visitor is actually about to see it. No card is
 *   eager-loaded; every clip in this gallery is below the fold.
 * - `prefers-reduced-motion` is respected: those visitors get the poster
 *   frame with a tap-to-play button instead of autoplay — no video ever
 *   starts moving without an explicit tap.
 * - A small speaker button lets a visitor un-mute (harmless no-op on clips
 *   with no audio track, but keeps the interaction pattern honest).
 */
function VideoCard({ video }: { video: RealVideo }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);
  const [userPlayed, setUserPlayed] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  const shouldAutoplay = inView && (!reduceMotion || userPlayed);

  React.useEffect(() => {
    if (!shouldAutoplay || !videoRef.current) return;
    const v = videoRef.current;
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener("loadeddata", play, { once: true });
    return () => v.removeEventListener("loadeddata", play);
  }, [shouldAutoplay]);

  const showVideoEl = inView && (!reduceMotion || userPlayed);

  return (
    <div
      ref={wrapperRef}
      className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface ring-soft"
    >
      {showVideoEl ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
          aria-label={video.label}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={video.poster}
          alt={video.label}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}

      {/* Skeleton shimmer while the clip decodes its first frame */}
      {showVideoEl && !loaded ? (
        <div className="absolute inset-0 animate-pulse bg-surface-2" aria-hidden />
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/5 to-transparent" />

      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand-800 bg-brand-950/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-200 backdrop-blur-sm">
        <VideoIcon className="h-3 w-3" aria-hidden />
        Real job
      </div>

      {reduceMotion && !userPlayed ? (
        <button
          type="button"
          onClick={() => setUserPlayed(true)}
          aria-label={`Play video: ${video.label}`}
          className="absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand-700 shadow-xl transition-transform group-hover:scale-105">
            <Play className="h-6 w-6 translate-x-0.5" aria-hidden fill="currentColor" />
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-brand-950/70 text-white backdrop-blur-sm transition-colors hover:bg-brand-900/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
        >
          {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
        </button>
      )}

      <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
        {video.label}
      </p>
    </div>
  );
}

export function VideoGallery({
  videos,
  className,
}: {
  videos: RealVideo[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {videos.map((v) => (
        <VideoCard key={v.src} video={v} />
      ))}
    </div>
  );
}
