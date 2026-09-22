import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion";

const ease = [0.32, 0.72, 0, 1] as const;

type TiltShieldSize = "medium" | "large";

const PRICING = {
  medium: { label: "Standard", price: 24.99 },
  large: { label: "Large", price: 49.98 },
} satisfies Record<TiltShieldSize, { label: string; price: number }>;

const RIGID_LID_LOW = 199;
const RIGID_LID_HIGH = 299;

const SIZES: TiltShieldSize[] = ["medium", "large"];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const usdWhole = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Crossfades its content when `swapKey` changes; static under reduced motion. */
function SwapValue({
  swapKey,
  className,
  children,
}: {
  swapKey: string;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={swapKey}
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease }}
        className={className}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

export function CostAdvantage() {
  const [size, setSize] = useState<TiltShieldSize>("medium");
  const reduce = useReducedMotion();
  const tabRefs = useRef<Record<TiltShieldSize, HTMLButtonElement | null>>({
    medium: null,
    large: null,
  });

  const price = PRICING[size].price;
  const savingsLow = RIGID_LID_LOW - price;
  const savingsHigh = RIGID_LID_HIGH - price;
  const reduction = (1 - price / RIGID_LID_HIGH) * 100;
  const trucksLow = Math.round(RIGID_LID_LOW / price);
  const trucksHigh = Math.round(RIGID_LID_HIGH / price);
  const barPct = (price / RIGID_LID_HIGH) * 100;

  const METRICS = [
    `${usdWhole.format(savingsLow)}–${usdWhole.format(savingsHigh)} saved`,
    `Up to ${reduction.toFixed(1)}% less`,
    `${trucksLow}–${trucksHigh} trucks covered`,
  ];

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home" ? SIZES[0]
      : e.key === "End" ? SIZES[SIZES.length - 1]
      : size === "medium" ? "large" : "medium";
    setSize(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="cost-advantage" className="bg-ink py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        {/* Left: pitch */}
        <FadeUp>
          <p className="spec-label text-cyan">Cost advantage</p>
          <h2 className="display-lg mt-5 text-white">
            Cover the truck.
            <br />
            <span className="text-cyan">Not the cost.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slateSoft">
            Start with a single cover: $29.99 Standard / $49.99 Large, or save
            $5 per unit with a case of 12. Volume pricing available for fleets.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#contact">Request Volume Pricing</a>
          </Button>
        </FadeUp>

        {/* Right: comparison card */}
        <FadeUp delay={0.12}>
          <div className="rounded-media border border-graphite bg-panel/70 p-6 sm:p-8 md:p-9">
            {/* Segmented size control */}
            <div
              role="tablist"
              aria-label="TiltShield size"
              className="ml-auto grid w-full max-w-xs grid-cols-2 rounded-full border border-graphite bg-white/[0.04] p-1"
            >
              {SIZES.map((s) => {
                const active = s === size;
                return (
                  <button
                    key={s}
                    ref={(el) => { tabRefs.current[s] = el; }}
                    role="tab"
                    id={`cost-tab-${s}`}
                    aria-selected={active}
                    aria-controls="cost-panel"
                    tabIndex={active ? 0 : -1}
                    onClick={() => setSize(s)}
                    onKeyDown={onTabKeyDown}
                    className="relative min-h-11 rounded-full px-5 text-sm font-semibold transition-colors"
                  >
                    {active && (
                      <motion.span
                        layoutId="cost-size-pill"
                        transition={reduce ? { duration: 0 } : { duration: 0.35, ease }}
                        className="absolute inset-0 rounded-full bg-clinical"
                      />
                    )}
                    <span className={`relative z-10 ${active ? "text-white" : "text-coolGray/60"}`}>
                      {PRICING[s].label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="cost-panel"
              aria-labelledby={`cost-tab-${size}`}
              className="mt-10 space-y-10"
            >
              {/* Rigid lid row */}
              <div>
                <div className="mb-4 flex items-end justify-between gap-6">
                  <p className="text-[15px] text-coolGray/70">Traditional rigid lid</p>
                  <p className="font-display text-2xl font-semibold tracking-tight text-warning sm:text-3xl">
                    {usdWhole.format(RIGID_LID_LOW)}–{usdWhole.format(RIGID_LID_HIGH)}
                  </p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-warning/10">
                  <motion.div
                    initial={reduce ? { width: "100%" } : { width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease }}
                    className="h-full rounded-full bg-warning"
                  />
                </div>
              </div>

              {/* TiltShield row */}
              <div>
                <div className="mb-4 flex items-end justify-between gap-6">
                  <p className="text-[15px] font-medium text-white">TiltShield</p>
                  <SwapValue
                    swapKey={size}
                    className="inline-block font-display text-3xl font-semibold tracking-tight text-compliance sm:text-4xl"
                  >
                    {usd.format(price)}
                  </SwapValue>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-compliance/10">
                  <motion.div
                    initial={false}
                    animate={{ width: `${Math.max(barPct, 4)}%` }}
                    transition={reduce ? { duration: 0 } : { duration: 0.45, ease }}
                    className="h-full rounded-full bg-compliance"
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="grid gap-3 sm:grid-cols-3">
                {METRICS.map((value, i) => (
                  <div
                    key={i}
                    className="flex min-h-20 items-center justify-center rounded-2xl border border-graphite bg-white/[0.03] px-4 py-4 text-center"
                  >
                    <SwapValue
                      swapKey={size}
                      className="font-display text-[17px] font-semibold tracking-tight text-compliance"
                    >
                      {value}
                    </SwapValue>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
