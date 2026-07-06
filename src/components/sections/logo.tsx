import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * TiltShield badge lockup — SVG recreation of the brand logo
 * (shield + biohazard trefoil + italic wordmark), recolored to the
 * site's blue palette. Original raster reference:
 * /public/tiltshield/tiltshield-logo.jpg
 */
export function Logo({ className, light = true }: { className?: string; light?: boolean }) {
  const uid = useId();
  const gradId = `ts-blue-${uid}`;
  const maskId = `ts-trefoil-${uid}`;
  const steel = light ? "#FFFFFF" : "#07111F";
  const rim = light ? "#64748B" : "#94A3B8";

  return (
    <a href="/#top" className={cn("group inline-flex flex-col items-start gap-1", className)} aria-label="TiltShield home">
      <svg
        viewBox="0 0 760 240"
        className="h-11 w-auto drop-shadow-[0_2px_12px_rgba(37,99,235,0.35)]"
        role="img"
        aria-label="TiltShield"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <mask id={maskId}>
            <rect x="-60" y="-60" width="120" height="120" fill="white" />
            {/* break the rings where they meet the hub */}
            <circle cx="0" cy="0" r="8" fill="black" />
          </mask>
        </defs>

        {/* Shield — outer rim + inner heavy border */}
        <path
          d="M 380 24 L 466 36 C 469 96 466 138 448 172 C 431 205 380 224 380 224 C 380 224 329 205 312 172 C 294 138 291 96 294 36 Z"
          fill="rgba(37,99,235,0.06)"
          stroke={rim}
          strokeWidth="3"
        />
        <path
          d="M 380 24 L 466 36 C 469 96 466 138 448 172 C 431 205 380 224 380 224 C 380 224 329 205 312 172 C 294 138 291 96 294 36 Z"
          transform="translate(380 124) scale(0.9) translate(-380 -124)"
          fill="none"
          stroke={steel}
          strokeWidth="7"
        />

        {/* Speed blades flanking the shield */}
        <polygon points="48,108 302,94 302,112" fill={steel} />
        <polygon points="712,108 458,94 458,112" fill={steel} />

        {/* Biohazard trefoil, recolored blue */}
        <g transform="translate(380 84)">
          <g mask={`url(#${maskId})`} fill="none" stroke={`url(#${gradId})`} strokeWidth="5.5">
            <circle cx="-10.4" cy="-6" r="13" />
            <circle cx="10.4" cy="-6" r="13" />
            <circle cx="0" cy="12" r="13" />
          </g>
          <circle cx="0" cy="0" r="5" fill="none" stroke={`url(#${gradId})`} strokeWidth="3" />
        </g>

        {/* Wordmark */}
        <g transform="translate(380 178) skewX(-10)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily='"Archivo Variable", Archivo, system-ui, sans-serif'
            fontWeight="900"
            fontSize="92"
            letterSpacing="-2"
          >
            <tspan fill={`url(#${gradId})`}>TILT</tspan>
            <tspan fill={steel}>SHIELD</tspan>
            <tspan fill={rim} fontSize="26" dy="-52">
              ™
            </tspan>
          </text>
        </g>
      </svg>

      <span className="spec-label text-[9px] tracking-[0.28em] text-slateSoft">
        Cover · Secure · Comply
      </span>
    </a>
  );
}
