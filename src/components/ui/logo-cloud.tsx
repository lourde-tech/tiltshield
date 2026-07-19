import { useReducedMotion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

export type Institution = {
  name: string;
  fullName: string;
  descriptor: string;
  /** null renders a typographic badge card instead of a logo image */
  logo: string | null;
  alt: string;
  /** optional external link for the logo card */
  website?: string;
  /**
   * Card background override for full-bleed logo files (e.g. a mark supplied
   * on its own brand-color background). Must match the asset's baked-in color.
   */
  cardBackground?: string;
  /** per-logo image sizing override */
  imgClassName?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  institutions: Institution[];
};

/**
 * Institutional logo marquee. Official logo files live in
 * /public/logos/partners — display them unmodified: no grayscale, opacity,
 * recoloring, or cropping.
 */
export function LogoCloud({ className, institutions, ...props }: LogoCloudProps) {
  const reduceMotion = useReducedMotion();

  const cards = institutions.map((inst) => (
          <div key={inst.name} className="flex shrink-0 flex-col items-center gap-2.5">
            {inst.logo ? (
              <a
                href={inst.website}
                target="_blank"
                rel="noreferrer"
                aria-label={inst.fullName}
                title={`${inst.fullName}, ${inst.descriptor}`}
                className="group flex h-24 w-60 items-center justify-center overflow-hidden rounded-2xl border border-lightBorder/80 bg-white px-8 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-shield/25 hover:shadow-cardHover md:h-28 md:w-64"
                style={inst.cardBackground ? { backgroundColor: inst.cardBackground } : undefined}
              >
                <img
                  src={inst.logo}
                  alt={inst.alt}
                  loading="lazy"
                  className={cn(
                    "pointer-events-none w-auto max-w-full select-none object-contain",
                    inst.imgClassName ?? "max-h-11 md:max-h-12"
                  )}
                />
              </a>
            ) : (
              <div
                className="flex h-24 w-60 shrink-0 flex-col items-center justify-center rounded-2xl border border-lightBorder/80 bg-white px-8 text-center shadow-card md:h-28 md:w-64"
                role="img"
                aria-label={inst.alt}
              >
                <span className="font-display text-3xl font-bold tracking-tight text-navy">
                  {inst.name.split(" ")[0]}
                </span>
                <span className="mt-1 text-[13px] font-medium leading-snug text-slateSoft">
                  Clinical environments observed
                </span>
              </div>
            )}
            <span className="spec-label text-slateSoft">{inst.descriptor}</span>
          </div>
  ));

  if (reduceMotion) {
    return (
      <div {...props} className={cn("py-5", className)}>
        <div className="flex flex-wrap items-start justify-center gap-8">{cards}</div>
      </div>
    );
  }

  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={40} reverse duration={34} durationOnHover={90}>
        {cards}
      </InfiniteSlider>
    </div>
  );
}
