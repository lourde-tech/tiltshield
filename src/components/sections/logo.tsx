import { cn } from "@/lib/utils";

/**
 * TiltShield brand lockup — official logo asset at /public/tiltshield-logo.png
 * (shield + biohazard trefoil + italic wordmark). Rendered as supplied; do not
 * recolor, crop, or restyle with CSS.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/#top"
      className={cn("inline-flex items-center", className)}
      aria-label="TiltShield home"
    >
      <img
        src="/tiltshield-logo.png"
        alt="TiltShield"
        width={1600}
        height={640}
        className="h-12 w-auto object-contain md:h-14"
      />
    </a>
  );
}
