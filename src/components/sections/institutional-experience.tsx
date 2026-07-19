import { LogoCloud, type Institution } from "@/components/ui/logo-cloud";
import { FadeUp } from "@/components/motion";
import { trustedPartnerLogos } from "@/data/trustedPartners";

/**
 * Healthcare Systems — legally-safe credibility section.
 *
 * Logo assets: official marks from /public/logos/partners, displayed
 * unmodified (no recolor, crop, grayscale, or opacity) per the usage notes
 * in the partner logo pack.
 *
 * Wording deliberately avoids "officially partnered with / endorsed by /
 * certified by" per the compliance notes in the logo pack. Keep it that way
 * unless those relationships are formally verified.
 */
const DESCRIPTORS: Record<string, { fullName: string; descriptor: string }> = {
  "Penn Medicine": {
    fullName: "University of Pennsylvania Health System",
    descriptor: "Academic health system",
  },
  "Nebraska Medicine": {
    fullName: "University of Nebraska Medical Center",
    descriptor: "Academic medical network",
  },
  "Atrium Health": {
    fullName: "Atrium Health",
    descriptor: "Large integrated health system",
  },
};

/**
 * The Penn Medicine file is a full-bleed JPG on the brand's own navy
 * (#011F5B) — the card background matches it exactly so the mark reads as an
 * intentional brand tile rather than a cropped rectangle.
 */
const CARD_OVERRIDES: Record<string, Pick<Institution, "cardBackground" | "imgClassName">> = {
  "Penn Medicine": { cardBackground: "#011F5B", imgClassName: "h-full max-h-none" },
};

const INSTITUTIONS: Institution[] = [
  ...trustedPartnerLogos.map((p) => ({
    name: p.name,
    fullName: DESCRIPTORS[p.name]?.fullName ?? p.name,
    descriptor: DESCRIPTORS[p.name]?.descriptor ?? "Health system",
    logo: p.src,
    alt: p.alt,
    website: p.website,
    ...CARD_OVERRIDES[p.name],
  })),
  {
    name: "20+ Clinical Environments",
    fullName: "Observed care settings",
    descriptor: "Problem discovery across care settings",
    logo: null,
    alt: "20 plus clinical environments observed",
  },
];

export function InstitutionalExperience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container relative">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2 className="display-lg mx-auto text-navy">
            Institutional Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slateSoft md:text-lg">
            Healthcare environments that shaped the problem behind TiltShield.
          </p>
        </FadeUp>

        <div className="mx-auto my-10 h-px max-w-lg bg-lightBorder [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <FadeUp delay={0.1}>
          <LogoCloud institutions={INSTITUTIONS} />
        </FadeUp>

        <div className="mx-auto mt-10 h-px max-w-lg bg-lightBorder [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-slateSoft">
          References to healthcare institutions describe environments and
          operational exposure that informed problem discovery. They do not
          imply product testing, endorsement, formal partnership, or approval.
        </p>
      </div>
    </section>
  );
}
