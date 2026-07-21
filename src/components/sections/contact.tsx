import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeUp } from "@/components/motion";
import {
  CoveredContainerIcon,
  FacilityMailIcon,
  FacilityPhoneIcon,
  FacilityWebIcon,
} from "@/components/ui/tiltshield-icons";

const FACILITY_TYPES = [
  "Hospital / healthcare",
  "School / university",
  "Airport",
  "Stadium / arena",
  "Industrial facility",
  "Commercial property",
  "Other",
];

const selectClass =
  "flex h-12 w-full appearance-none rounded-xl border border-graphite bg-white/[0.04] px-4 text-[15px] text-white transition-colors focus:border-cyan/60 focus:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40 [&>option]:bg-panel";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this to your CRM / email endpoint (e.g. POST to /api/leads).
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-ink py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeUp>
          <h2 className="display-md text-white">
            Tell us about your facility.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slateSoft">
            Share a few details and we'll follow up with pricing and next
            steps, usually within one business day.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { label: "(800) 765-9008", href: "tel:+18007659008", Icon: FacilityPhoneIcon },
              { label: "info@tiltshield.com", href: "mailto:info@tiltshield.com", Icon: FacilityMailIcon },
              { label: "www.tiltshieldusa.com", href: "https://www.tiltshieldusa.com", Icon: FacilityWebIcon },
            ].map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} className="group flex w-fit items-center gap-4 text-coolGray transition-colors hover:text-cyan">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.035] text-cyan transition duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/[0.07]">
                    <Icon className="h-[21px] w-[21px]" />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-[2rem] border border-graphite bg-panel/70 p-2">
            <div className="rounded-[calc(2rem-0.5rem)] border border-white/5 bg-navy/60 p-6 md:p-9">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-[18px] border border-cyan/25 bg-cyan/[0.08]">
                    <CoveredContainerIcon className="h-8 w-8 text-cyan" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">Request received</h3>
                  <p className="mt-3 max-w-sm text-slateSoft">
                    Thanks. We'll be in touch shortly with pricing for your facility.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5" noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="spec-label mb-2 block text-slateSoft">Name</label>
                      <Input id="name" name="name" autoComplete="name" required placeholder="Jordan Reyes" />
                    </div>
                    <div>
                      <label htmlFor="company" className="spec-label mb-2 block text-slateSoft">Company</label>
                      <Input id="company" name="company" autoComplete="organization" required placeholder="Facility name" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="spec-label mb-2 block text-slateSoft">Email</label>
                      <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="spec-label mb-2 block text-slateSoft">Phone</label>
                      <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="facility-type" className="spec-label mb-2 block text-slateSoft">Facility type</label>
                      <select id="facility-type" name="facilityType" required defaultValue="" className={selectClass}>
                        <option value="" disabled>Select facility type</option>
                        {FACILITY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="trucks" className="spec-label mb-2 block text-slateSoft">Number of tilt trucks</label>
                      <Input id="trucks" name="tiltTrucks" type="number" min={1} inputMode="numeric" placeholder="e.g. 12" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="spec-label mb-2 block text-slateSoft">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Anything we should know about your waste handling setup?"
                      className="flex w-full rounded-xl border border-graphite bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-slateSoft transition-colors focus:border-cyan/60 focus:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40"
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto sm:justify-self-start">
                    Request Pricing
                  </Button>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
