"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorClosed, Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { mainNav } from "@/lib/nav";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-md" aria-label={`${siteConfig.name} — home`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
        <DoorClosed className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
          Downtown Door
        </span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
          Repair &amp; Security
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Close the mobile drawer on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-body hover:text-brand-700"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 text-muted transition-transform group-hover:rotate-180" aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full min-w-56 translate-y-1 rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg shadow-brand-950/5 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-body hover:bg-surface hover:text-brand-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-body hover:text-brand-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className={buttonVariants({ size: "sm", className: "hidden sm:inline-flex" })}
            data-analytics="header-call"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone.display}
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {mainNav.map((item) => (
                <div key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-ink hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-3 mt-1 flex flex-col border-l border-line pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "rounded-md px-3 py-1.5 text-sm text-body hover:text-brand-700",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <a
              href={siteConfig.phone.href}
              className={buttonVariants({ size: "lg", className: "mt-4 w-full" })}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {siteConfig.phone.display}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
