import * as React from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-muted/70 focus-visible:border-brand-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-500/40 disabled:opacity-50";

export function Label({
  className,
  required,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label className={cn("mb-1.5 block text-sm font-medium text-ink", className)} {...props}>
      {children}
      {required ? <span className="ml-0.5 text-emergency">*</span> : null}
    </label>
  );
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(control, className)} {...props} />,
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(control, "min-h-28 resize-y", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(control, "appearance-none pr-9", className)} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

export function FieldError({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="mt-1 text-sm text-emergency">{children}</p>;
}

/** Visually-hidden honeypot field. Bots fill it; humans never see it. */
export function Honeypot({ name = "company" }: { name?: string }) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
      <label>
        Company
        <input type="text" name={name} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
