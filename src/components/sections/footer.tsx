import { Phone, Mail, Globe, ArrowRight } from "lucide-react";

const socialIconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const LinkedinIcon = () => (
  <svg {...socialIconProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const FacebookIcon = () => (
  <svg {...socialIconProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg {...socialIconProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/sections/logo";

const NAV = [
  { label: "Product", href: "/#product" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Experience", href: "/#experience" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
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
          <div className="mt-6 flex gap-3">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={`TiltShield on ${label} (placeholder link)`}
                className="grid h-10 w-10 place-items-center rounded-full border border-graphite text-slateSoft transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <Icon />
              </a>
            ))}
          </div>
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
              <a href="tel:+18339876455" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" /> (833) 987-6455
              </a>
            </li>
            <li>
              <a href="mailto:info@tiltshield.com" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <Mail className="h-4 w-4 text-cyan" aria-hidden="true" /> info@tiltshield.com
              </a>
            </li>
            <li>
              <a href="https://www.tiltshieldusa.com" className="flex items-center gap-2.5 text-coolGray/80 transition-colors hover:text-cyan">
                <Globe className="h-4 w-4 text-cyan" aria-hidden="true" /> www.tiltshieldusa.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="spec-label text-slateSoft">Ready when you are</h3>
          <p className="mt-5 text-sm leading-relaxed text-slateSoft">
            Get facility-specific pricing in one business day.
          </p>
          <Button asChild className="mt-5">
            <a href="/#contact">
              Get Pricing Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
