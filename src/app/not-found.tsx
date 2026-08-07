import Link from "next/link";
import Image from "next/image";
import { Home, Phone, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/images/real/real-panic-bar-dark.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1330] via-[#0a1330]/95 to-[#0a1330]" />
      </div>
      <Section>
        <Container>
          <div className="mx-auto max-w-xl rounded-2xl border border-line bg-surface/90 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-sm md:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-950/60 text-brand-300">
              <Search className="h-7 w-7" aria-hidden />
            </span>
            <h1 className="mt-5 text-3xl">Page not found</h1>
            <p className="mt-3 text-body">
              That page moved or doesn&apos;t exist. Try our services, service areas, or give
              us a call.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Link href="/" className={buttonVariants({ size: "lg" })}>
                <Home className="h-4.5 w-4.5" aria-hidden />
                Home
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Services
              </Link>
              <a href={siteConfig.phone.href} className={buttonVariants({ variant: "secondary", size: "lg" })}>
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
