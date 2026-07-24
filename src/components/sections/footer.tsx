import { Button } from "@/components/ui/button";
import { Logo } from "@/components/sections/logo";
import {
  ArrowRightSmall,
  FacilityMailIcon,
  FacilityPhoneIcon,
  FacilityWebIcon,
} from "@/components/ui/tiltshield-icons";

const NAV = [
  { label: "Product", href: "/#product" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-graphite bg-ink">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slateSoft">
            TiltShield helps facilities secure waste loads, reduce cleanup
            time, and maintain cleaner, more compliant operations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="spec-label text-slateSoft">Explore</h3>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-coolGray/80 transition-colors hover:text-cyan">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="spec-label text-slateSoft">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="tel:+18007659008" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <FacilityPhoneIcon className="h-4 w-4 text-cyan" /> (800) 765-9008
              </a>
            </li>
            <li>
              <a href="mailto:info@tiltshieldusa.com" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <FacilityMailIcon className="h-4 w-4 text-cyan" /> info@tiltshieldusa.com
              </a>
            </li>
            <li>
              <a href="https://www.tiltshieldusa.com" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <FacilityWebIcon className="h-4 w-4 text-cyan" /> www.tiltshieldusa.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="spec-label text-slateSoft">Ready when you are</h3>
          <p className="mt-5 text-sm leading-relaxed text-slateSoft">
            Get pricing for your facility in one business day.
          </p>
          <Button asChild className="mt-5">
            <a href="/#contact">
              Request Pricing <ArrowRightSmall className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-graphite/70">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-slateSoft sm:flex-row">
          <p>© 2026 TiltShield. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-cyan">Privacy Policy</a>
            <a href="/terms-of-use" className="transition-colors hover:text-cyan">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
