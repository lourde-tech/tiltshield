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
        src="/tiltshield-logo-transparent.png"
        alt="TiltShield"
        width={826}
        height={292}
        className="h-10 w-auto object-contain md:h-11"
      />
    </a>
  );
}
