import { z } from "zod";

/**
 * Shared form schemas. The two lead types are validated separately and routed
 * to distinct inboxes with distinct subject lines so residential quotes never
 * blend with institutional bid inquiries.
 */

// --- Path A: quote request (fast, transactional) -----------------------------
export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  phone: z.string().min(7, "Please enter a phone number").max(30),
  email: z.string().email("Enter a valid email").max(160).or(z.literal("")).optional(),
  service: z.string().max(80).optional(),
  address: z.string().max(200).optional(),
  message: z.string().min(5, "Tell us a little about the job").max(3000),
  // spam honeypot — must stay empty
  company: z.string().max(0).optional(),
  turnstileToken: z.string().optional(),
});
export type QuoteInput = z.infer<typeof quoteSchema>;

// --- Path B: bid inquiry (credential-driven, longer) -------------------------
export const bidSchema = z.object({
  organization: z.string().min(2, "Organization name is required").max(200),
  contactName: z.string().min(2, "Contact name is required").max(120),
  email: z.string().email("Enter a valid email").max(160),
  phone: z.string().max(30).optional(),
  orgType: z
    .enum(["Public School", "Hospital / Healthcare", "Municipal / Government", "Other"])
    .optional(),
  projectType: z.string().max(160).optional(),
  timeline: z.string().max(120).optional(),
  rfpReference: z.string().max(160).optional(),
  requestCapabilityStatement: z.boolean().optional(),
  message: z.string().min(5, "Please describe the project or request").max(5000),
  company: z.string().max(0).optional(), // honeypot
  turnstileToken: z.string().optional(),
});
export type BidInput = z.infer<typeof bidSchema>;

// --- Path C: appointment request (proposes a time, not a live calendar) ------
// No live-availability calendar is connected yet — this captures a preferred
// day/time as a real lead, routed and confirmed the same as a quote request.
// The team confirms the actual time back with the client.
export const bookSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  phone: z.string().min(7, "Please enter a phone number").max(30),
  email: z.string().email("Enter a valid email").max(160).or(z.literal("")).optional(),
  service: z.string().max(80).optional(),
  address: z.string().max(200).optional(),
  preferredDate: z.string().max(40).optional(),
  preferredWindow: z.enum(["Morning", "Afternoon", "Evening", "No preference"]).optional(),
  message: z.string().max(3000).optional(),
  company: z.string().max(0).optional(), // honeypot
  turnstileToken: z.string().optional(),
});
export type BookInput = z.infer<typeof bookSchema>;
