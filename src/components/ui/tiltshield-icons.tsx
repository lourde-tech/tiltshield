import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * TiltShield bespoke icon family — v2.
 *
 * Hand-authored stroke icons on a 24x24 grid. Rules: two to three strokes
 * per glyph, large simple forms that stay legible at 20px, rounded caps and
 * joins, 1.8 default stroke. Every icon is a literal match for the copy it
 * sits next to — never place a glyph where its meaning does not apply.
 */
export type TiltShieldIconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & {
  className?: string;
  strokeWidth?: number;
  title?: string;
};

type BaseIconProps = TiltShieldIconProps & {
  children: React.ReactNode;
};

function BaseIcon({ children, className, strokeWidth = 1.8, title, ...props }: BaseIconProps) {
  const titleId = React.useId();
  const isDecorative = !title;

  return (
    <svg
      aria-hidden={isDecorative ? true : undefined}
      aria-labelledby={title ? titleId : undefined}
      className={cn("h-5 w-5 shrink-0", className)}
      fill="none"
      focusable="false"
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      >
        {children}
      </g>
    </svg>
  );
}

/* ── Contact ─────────────────────────────────────────────── */

/** Clean single-path handset. */
export function FacilityPhoneIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.5 4.8c.6-.5 1.5-.5 2 .1l1.6 1.9c.5.6.5 1.4 0 2l-.9 1c-.2.3-.2.7 0 1a13 13 0 0 0 3.9 3.9c.3.2.7.2 1 0l1-.9c.6-.5 1.4-.5 2 0l1.9 1.6c.6.5.7 1.4.1 2l-1 1.1c-.9 1-2.3 1.3-3.5.8a19.4 19.4 0 0 1-10-10c-.5-1.2-.2-2.6.8-3.5l1.1-1Z" />
    </BaseIcon>
  );
}

/** Envelope reduced to frame and flap. */
export function FacilityMailIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="6" width="17" height="12.5" rx="2.5" />
      <path d="m4.5 8.5 6.4 4.6a1.8 1.8 0 0 0 2.2 0l6.4-4.6" />
    </BaseIcon>
  );
}

/** Globe reduced to ring, equator, and one meridian. */
export function FacilityWebIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.6c2.6 2.3 3.9 5.1 3.9 8.4s-1.3 6.1-3.9 8.4c-2.6-2.3-3.9-5.1-3.9-8.4S9.4 5.9 12 3.6Z" />
    </BaseIcon>
  );
}

/* ── Product ─────────────────────────────────────────────── */

/** The core product mark: container with a dome cover over it. */
export function CoveredContainerIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 10.5h12l-1 8.4c-.1 1-1 1.6-2 1.6H9c-1 0-1.9-.6-2-1.6l-1-8.4Z" />
      <path d="M4.8 10.5c1-3.2 3.7-5.2 7.2-5.2s6.2 2 7.2 5.2" />
    </BaseIcon>
  );
}

/** Two rounded blocks: medium and large. */
export function SizesIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="10.5" width="7.5" height="7" rx="2" />
      <rect x="13.5" y="6.5" width="7" height="11" rx="2" />
    </BaseIcon>
  );
}

/** An elastic edge wrapping down under a rim line. */
export function RimLockIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 8.5h14" />
      <path d="M17.5 8.5v3.5a5.5 5.5 0 0 1-11 0V8.5" />
    </BaseIcon>
  );
}

/** Single droplet. */
export function DropletIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4.5s5 5.3 5 9a5 5 0 0 1-10 0c0-3.7 5-9 5-9Z" />
    </BaseIcon>
  );
}

/** Circular reuse arrow. */
export function ReuseIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18.9 13.5a7 7 0 1 1-1.8-6.2" />
      <path d="M19.2 4.8v3.5h-3.5" />
    </BaseIcon>
  );
}

/** Simple tilt truck: tapered body on two wheels. */
export function TiltTruckIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 6.5h14l-1.2 9H6.2L5 6.5Z" />
      <circle cx="9" cy="18.3" r="1.7" />
      <circle cx="15" cy="18.3" r="1.7" />
    </BaseIcon>
  );
}

/* ── Benefits ────────────────────────────────────────────── */

/** Stopwatch: saved time. */
export function StopwatchIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="13.5" r="7" />
      <path d="M12 10v3.5l2.6 1.6" />
      <path d="M10 3.5h4" />
    </BaseIcon>
  );
}

/** Four-point sparkle: clean. */
export function SparkleIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4c.6 3.7 3 6.1 6.7 6.7-3.7.6-6.1 3-6.7 6.7-.6-3.7-3-6.1-6.7-6.7C9 10.1 11.4 7.7 12 4Z" />
      <path d="M18.5 15.5c.3 1.6 1.2 2.5 2.8 2.8-1.6.3-2.5 1.2-2.8 2.8-.3-1.6-1.2-2.5-2.8-2.8 1.6-.3 2.5-1.2 2.8-2.8Z" />
    </BaseIcon>
  );
}

/** Shield: protection from injury. */
export function ShieldIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3.8 19 6.4v5.1c0 4.3-2.8 7.3-7 8.7-4.2-1.4-7-4.4-7-8.7V6.4L12 3.8Z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </BaseIcon>
  );
}

/** Clipboard with a passing stroke: inspections. */
export function ClipboardCheckIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5.5" y="5" width="13" height="15.5" rx="2" />
      <path d="M9.5 3.5h5V7h-5V3.5Z" />
      <path d="m9 13.5 2.2 2.2 4-4.2" />
    </BaseIcon>
  );
}

/** Simple building facade: professional facilities. */
export function BuildingIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 20V6.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2V20" />
      <path d="M3.5 20h17" />
      <path d="M9.8 8.5h1.4" />
      <path d="M12.8 8.5h1.4" />
      <path d="M9.8 12h1.4" />
      <path d="M12.8 12h1.4" />
      <path d="M10.5 20v-3.5h3V20" />
    </BaseIcon>
  );
}

/* ── Risk states ─────────────────────────────────────────── */

/** Open-top container with loose material above the rim. */
export function OpenContainerIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 10h12l-1 8.4c-.1 1-1 1.6-2 1.6H9c-1 0-1.9-.6-2-1.6L6 10Z" />
      <path d="M8 7c1.1-.9 2.6-.9 4 0s2.9.9 4 0" />
    </BaseIcon>
  );
}

/** Shallow container leaking drips below. */
export function DripIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5.5 5.5h13l-.9 7H6.4l-.9-7Z" />
      <path d="M8.8 16v1.8" />
      <path d="M12 18.2V20" />
      <path d="M15.2 16v1.8" />
    </BaseIcon>
  );
}

/** Clock: lost time. */
export function ClockIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.5V12l3 2" />
    </BaseIcon>
  );
}

/** Rounded warning triangle. */
export function RiskIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10.3 4.9c.8-1.3 2.6-1.3 3.4 0l6.3 10.9c.8 1.3-.2 3-1.7 3H5.7c-1.5 0-2.5-1.7-1.7-3L10.3 4.9Z" />
      <path d="M12 9.5v4" />
      <path d="M12 16.4v.1" />
    </BaseIcon>
  );
}

/** Droplet cancelled by a slash: no leaks. */
export function NoDripIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4.5s5 5.3 5 9a5 5 0 0 1-10 0c0-3.7 5-9 5-9Z" />
      <path d="m5.5 5.5 13 13" />
    </BaseIcon>
  );
}

/** Descending cost line settling at a low marker. */
export function CostDownIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3.5 6.5 6.5 6.5 3.5-3.5 7 7" />
      <path d="M20.5 11.2v5.3h-5.3" />
    </BaseIcon>
  );
}

/* ── Utility ─────────────────────────────────────────────── */

/** Compact utility arrow matching the family's stroke language. */
export function ArrowRightSmall(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </BaseIcon>
  );
}

/** Compact outbound arrow for external destinations. */
export function ArrowUpRightSmall(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </BaseIcon>
  );
}

/** Calendar frame with a marked day. */
export function ScheduleIcon(props: TiltShieldIconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.8" y="6" width="16.4" height="13.5" rx="2" />
      <path d="M8.2 3.8v3" />
      <path d="M15.8 3.8v3" />
      <path d="M3.8 10.3h16.4" />
      <circle cx="8.8" cy="14.5" r="1.1" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export const tiltShieldIconSet = {
  phone: FacilityPhoneIcon,
  mail: FacilityMailIcon,
  web: FacilityWebIcon,
  coveredContainer: CoveredContainerIcon,
  sizes: SizesIcon,
  rimLock: RimLockIcon,
  droplet: DropletIcon,
  reuse: ReuseIcon,
  tiltTruck: TiltTruckIcon,
  stopwatch: StopwatchIcon,
  sparkle: SparkleIcon,
  shield: ShieldIcon,
  clipboardCheck: ClipboardCheckIcon,
  building: BuildingIcon,
  openContainer: OpenContainerIcon,
  drip: DripIcon,
  clock: ClockIcon,
  risk: RiskIcon,
  noDrip: NoDripIcon,
  costDown: CostDownIcon,
  arrowRight: ArrowRightSmall,
  arrowUpRight: ArrowUpRightSmall,
  schedule: ScheduleIcon,
} as const;

export type TiltShieldIconName = keyof typeof tiltShieldIconSet;
