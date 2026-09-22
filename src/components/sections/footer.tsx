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

const CONTACT = [
  { label: "(800) 765-9008", href: "tel:+18007659008", Icon: FacilityPhoneIcon },
  { label: "info@tiltshieldusa.com", href: "mailto:info@tiltshieldusa.com", Icon: FacilityMailIcon },
  { label: "www.tiltshieldusa.com", href: "https://www.tiltshieldusa.com", Icon: FacilityWebIcon },
];

const linkClass = "footer-text text-coolGray/80 transition-colors hover:text-cyan";

export function Footer() {
  return (
    <footer className="border-t border-graphite bg-ink">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Logo />
          <p className="footer-text mt-4 max-w-xs text-slateSoft">
            TiltShield helps facilities secure waste loads, reduce cleanup
            time, and maintain cleaner, more compliant operations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="footer-heading text-slateSoft">Explore</h3>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="footer-heading text-slateSoft">Contact</h3>
          <ul className="mt-4 space-y-3">
            {CONTACT.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} className={`${linkClass} flex items-center gap-3`}>
                  <Icon className="h-4 w-4 shrink-0 text-cyan" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading text-slateSoft">Ready when you are</h3>
          <p className="footer-text mt-4 text-slateSoft">
            Get pricing for your facility in one business day.
          </p>
          <Button asChild size="lg" className="mt-5">
            <a href="/#contact">
              Request Pricing <ArrowRightSmall className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-graphite/70">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="footer-legal">© 2026 TiltShield. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="footer-legal transition-colors hover:text-cyan">Privacy Policy</a>
            <a href="/terms-of-use" className="footer-legal transition-colors hover:text-cyan">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
