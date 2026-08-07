/**
 * Hardware & tool SUPPLIER brands — categorically different from competing
 * locksmith/security SERVICE businesses (never listed here; see
 * feedback_no_cross_bot_contamination-style exclusions in project memory —
 * D&B Security Group, Mustang Locksmith, Bedford Locksmith & Security are
 * competitors and must never be featured).
 *
 * Every brand below was visually confirmed in the owner's own jobsite/
 * workshop photo library (2026-08 review of ~130 source files) — either
 * installed hardware in frame, or genuine stocked product on the shelf/
 * workbench. Nothing here is from generic industry knowledge. Evidence:
 *  - Mul-T-Lock  — owner's own branded workwear (see hero) + stocked hardware
 *  - DeWalt      — drills/tools in near-constant use across dozens of photos
 *  - Milwaukee   — branded drill-bit index cases, tool bags
 *  - ENFORCER    — installed exit-device faceplate + stocked product boxes
 *  - Schlage     — engraved cylinder + key blanks, hand-photographed
 *  - Rosslare    — stocked keypad/reader product boxes
 *  - Seco-Larm   — stocked sensor & door-holder product boxes
 *  - Ives        — stocked hinge/strike hardware boxes
 *  - Don-Jo      — stocked "Armor-Strike" security-accessory placard
 *  - Husky       — tool bag, clearly branded
 * A photographed supplier "brands carried" flyer in the same source folder
 * lists additional names (Baldwin, Arrow, Assa Abloy, Yale, Amsec, Medeco,
 * Aiphone, Gardall, Dorma, Sargent) — that's a marketing graphic, not
 * hardware seen in use, so it's deliberately excluded from this list.
 */
export interface SupplierBrand {
  name: string;
}

export const supplierBrands: SupplierBrand[] = [
  { name: "Mul-T-Lock" },
  { name: "Schlage" },
  { name: "DeWalt" },
  { name: "Milwaukee" },
  { name: "ENFORCER" },
  { name: "Rosslare" },
  { name: "Seco-Larm" },
  { name: "Ives" },
  { name: "Don-Jo" },
  { name: "Husky" },
];
