import type { ServiceCategory } from "./services";

export interface GalleryItem {
  src: string;
  caption: string;
  category: ServiceCategory;
}

/**
 * Real jobsite photos, no stock imagery. Locksmith/security-weighted to
 * match the current site priority (doors remain represented, just not
 * dominant). Sourced from the owner's own approved photo library.
 */
export const galleryItems: GalleryItem[] = [
  // --- Locksmith ---
  { src: "/images/real/real-deadbolt-measure-install.jpg", caption: "Deadbolt install, measured to spec", category: "locksmith" },
  { src: "/images/real/real-lock-hardware-unboxed.jpg", caption: "New lock hardware, unboxed and ready", category: "locksmith" },
  { src: "/images/real/real-tools-staged-lock-install.jpg", caption: "Tools staged for a lock install", category: "locksmith" },
  { src: "/images/real/real-deadbolt-cylinder-keys.jpg", caption: "Deadbolt cylinder, keys on the ring", category: "locksmith" },
  { src: "/images/real/real-mortise-hardware-laidout.jpg", caption: "Mortise lock hardware, laid out", category: "locksmith" },
  { src: "/images/real/real-stocked-hardware-truck.jpg", caption: "Stocked hardware, ready to roll", category: "locksmith" },
  { src: "/images/real/real-fresh-cut-keys-handful2.jpg", caption: "Fresh-cut keys, ready for pickup", category: "locksmith" },
  { src: "/images/real/real-tool-cases-truck-stocked.jpg", caption: "Fully stocked tool cases, on the truck", category: "locksmith" },
  { src: "/images/real/real-cylinder-cut-tested.jpg", caption: "New cylinder, cut and tested", category: "locksmith" },
  { src: "/images/real/real-lock-mechanism-opened-repair.jpg", caption: "Lock mechanism, opened for repair", category: "locksmith" },
  { src: "/images/real/real-cylinder-install-commercial.jpg", caption: "Cylinder install, commercial door", category: "locksmith" },
  { src: "/images/real/real-mortise-repair.jpg", caption: "Door & lock repair", category: "locksmith" },
  { src: "/images/real/real-mortise-keys.jpg", caption: "Locksmith & rekeying", category: "locksmith" },
  { src: "/images/real/real-brass-strike-install.jpg", caption: "Door hardware installation", category: "locksmith" },
  { src: "/images/real/real-key-cutting.jpg", caption: "On-site key cutting", category: "locksmith" },
  { src: "/images/real/real-brass-deadbolt-drill.jpg", caption: "Deadbolt & cylinder installs", category: "locksmith" },
  { src: "/images/real/real-storefront-mortise-install.jpg", caption: "Storefront mortise lock installs", category: "locksmith" },
  { src: "/images/real/real-brass-knob-outdoor.jpg", caption: "Brass hardware, done clean", category: "locksmith" },

  // --- Security & access control ---
  { src: "/images/real/real-access-panel-install.jpg", caption: "Access control panel install", category: "security" },
  { src: "/images/real/real-intercom-button-wiring2.jpg", caption: "Intercom button, wired in", category: "security" },
  { src: "/images/real/real-dome-camera-brick-install.jpg", caption: "Dome camera install, exterior brick", category: "security" },
  { src: "/images/real/real-access-panel-wiring2.jpg", caption: "Wiring an access control panel", category: "security" },
  { src: "/images/real/real-access-button-wired.jpg", caption: "Access control button, wired in", category: "security" },
  { src: "/images/real/real-access-wiring-storefront.jpg", caption: "Access control wiring, storefront door", category: "security" },
  { src: "/images/real/real-access-control-kit-boxed.jpg", caption: "Access control kit, ready to install", category: "security" },
  { src: "/images/real/real-cctv-camera.jpg", caption: "Security cameras & CCTV", category: "security" },
  { src: "/images/real/real-intercom-button.jpg", caption: "Intercom & buzzer entry", category: "security" },
  { src: "/images/real/real-access-install.jpg", caption: "Access control & strikes", category: "security" },
  { src: "/images/real/real-padlocks.jpg", caption: "Gates, locks & security", category: "security" },
  { src: "/images/real/real-padlocks-wood-gate.jpg", caption: "Security gates & padlocks", category: "security" },
  { src: "/images/real/real-storefront-gate-install.jpg", caption: "Roll gates & storefront security", category: "security" },
  { src: "/images/real/real-dome-camera-mount.jpg", caption: "Dome cameras & CCTV mounting", category: "security" },
  { src: "/images/real/real-reader-install-green.jpg", caption: "Card readers & access control", category: "security" },

  // --- Doors ---
  { src: "/images/real/real-storefront-glass-onsite.jpg", caption: "Storefront glass door, on site", category: "door" },
  { src: "/images/real/real-strike-plate-drilling2.jpg", caption: "Drilling for a new strike plate", category: "door" },
  { src: "/images/real/real-commercial-door.jpg", caption: "Commercial & storefront doors", category: "door" },
  { src: "/images/real/real-panic-bar-exit.jpg", caption: "Panic bars & exit devices", category: "door" },
  { src: "/images/real/real-rooftop-door-install.jpg", caption: "High-rise & commercial installs", category: "door" },
  { src: "/images/real/real-fence-hinge-install.jpg", caption: "Gate hardware & hinges", category: "door" },
  { src: "/images/real/real-frame-repair-oscillating.jpg", caption: "Door frame repair, in progress", category: "door" },
];
