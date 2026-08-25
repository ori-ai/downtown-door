/**
 * PATH B — Government & institutional contracting content.
 *
 * Credential-driven, NOT urgency-driven. Every specific credential, number,
 * certification, portal registration, and project reference is a PLACEHOLDER
 * until the client supplies real, verifiable data. Nothing here is fabricated.
 * See docs/human-todo.md.
 */

import { siteConfig } from "./site";

export interface ClientType {
  name: string;
  icon: string; // lucide icon name
  description: string;
}

export const clientsServed: ClientType[] = [
  {
    name: "Public Schools",
    icon: "GraduationCap",
    description:
      "Door repair, replacement, and security work for K–12 school facilities — including the code-compliant, high-traffic, and fire-rated doors school buildings depend on.",
  },
  {
    name: "Hospitals & Healthcare",
    icon: "Cross",
    description:
      "Doors, hardware, and access control for healthcare facilities where reliability, security, and controlled access are non-negotiable.",
  },
  {
    name: "Municipal & Government",
    icon: "Landmark",
    description:
      "Entry, exit, and security systems for municipal buildings and public agencies — from single repairs to capital replacement projects.",
  },
];

export const whyChoose: { title: string; description: string; icon: string }[] = [
  {
    icon: "ShieldCheck",
    title: "Licensed, insured & compliant",
    description:
      "We maintain the licensing, insurance, and safety compliance institutional procurement requires — documentation available on request.",
  },
  {
    icon: "Building2",
    title: "Institutional experience",
    description:
      "We understand how facilities and procurement teams operate — scoping, scheduling around building use, and delivering to specification.",
  },
  {
    icon: "ClipboardCheck",
    title: "Clear scope & documentation",
    description:
      "Detailed scopes, transparent pricing, and the paperwork institutional projects require — no ambiguity, no surprises.",
  },
  {
    icon: "Wrench",
    title: "Full door & security capability",
    description:
      "Door repair and replacement, fire-rated assemblies, panic/exit hardware, access control, intercoms, and cameras — under one vendor.",
  },
];

/**
 * Credential fields — value is `null` where not yet confirmed. The UI renders a
 * clearly-marked "provided on request / to be confirmed" state for nulls; it
 * never invents a value.
 */
export const credentialFields: { label: string; value: string | null; hint: string }[] = [
  { label: "License", value: siteConfig.credentials.licenseNumber, hint: "License number & type" },
  { label: "General Liability Insurance", value: siteConfig.credentials.insuranceSummary, hint: "Coverage limits (COI on request)" },
  { label: "Bonding", value: siteConfig.credentials.bondingSummary, hint: "Bonding capacity" },
  {
    label: "Certifications (M/WBE, DBE, SBE)",
    value: siteConfig.credentials.certifications.length
      ? siteConfig.credentials.certifications.join(", ")
      : null,
    hint: "Diversity/small-business certifications, if applicable",
  },
];

/** Procurement portals — registered status is placeholder until confirmed. */
export const procurementPortals: { name: string; full: string; status: string }[] = [
  { name: "NYC PASSPort", full: "NYC Procurement (PASSPort)", status: "Registration to be confirmed" },
  { name: "NYC SCA", full: "School Construction Authority", status: "Registration to be confirmed" },
  { name: "DASNY", full: "Dormitory Authority of the State of New York", status: "Registration to be confirmed" },
];

/** Safety & compliance statement — placeholder, honest, editable in one place. */
export const safetyStatement =
  "We follow applicable OSHA and site-specific safety requirements on institutional projects, coordinate with facilities staff on access and scheduling, and provide required documentation and insurance certificates before work begins. A detailed safety and compliance summary is available on request.";

/** Case studies — REAL references only, added when provided. Empty by design. */
export const caseStudies: {
  client: string;
  project: string;
  summary: string;
}[] = [];

/** Capability statement download — not fabricated; a real PDF replaces this. */
export const capabilityStatement = {
  available: false as boolean,
  note: "Our capability statement is being finalized. Request a copy and we'll send it directly, or check back shortly.",
  // filePath: "/downloads/capability-statement.pdf", // set when the real PDF is added
};

export const govFaqs = [
  {
    q: "Does Downtown Locksmith & Security Intercoms work with NYC public schools?",
    a: "Yes. We provide door repair, replacement, and security work for institutional clients including public schools. Contact us with your solicitation or project details and we'll respond with the relevant documentation.",
  },
  {
    q: "Can you provide a capability statement and proof of insurance?",
    a: "Yes. Request our capability statement through the form on this page, and we'll provide it along with current licensing and insurance documentation for your vendor file.",
  },
  {
    q: "Are you registered on NYC procurement portals?",
    a: "We can confirm our current registration status on NYC PASSPort, SCA, and DASNY on request. Reach out with your requirements and we'll provide the specifics your procurement process needs.",
  },
];
