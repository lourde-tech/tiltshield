import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, PlayCircle, Timer, Truck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.32, 0.72, 0, 1] as const;

const SPECS = [
  { icon: Timer, label: "Installed in seconds" },
  { icon: Truck, label: "Fits 1–2.5 yd tilt trucks" },
  { icon: BadgeCheck, label: "Built for daily commercial use" },
];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden bg-navy pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Ambient industrial backdrop */}
      <div aria-hidden="true" className="dark-grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.28),rgba(56,189,248,0.10),transparent_68%)] blur-3xl"
      />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="spec-label inline-flex items-center gap-2 rounded-full border border-graphite bg-white/[0.03] px-3.5 py-1.5 text-cyan"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Waste-handling compliance, simplified
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
            className="mt-6 font-display text-[40px] font-extrabold leading-[1.04] tracking-tight text-white md:text-6xl"
          >
            Stop waste violations &amp; spills —{" "}
            <span className="bg-gradient-to-r from-cyan to-clinical bg-clip-text text-transparent">
              without lifting a lid.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slateSoft md:text-xl"
          >
            Secure overflowing loads in seconds, reduce cleanup time, and keep
            every waste run cleaner, safer, and more compliant.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg">
              <a href="#contact">
                Get Pricing Now
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how-it-works">
                <PlayCircle className="h-5 w-5 text-cyan" aria-hidden="true" />
                See It in Action
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {SPECS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-coolGray/75">
                <Icon className="h-4 w-4 text-cyan" strokeWidth={2} aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 border-l-2 border-graphite pl-4 text-sm text-slateSoft"
          >
            Built for hospitals, schools, airports, stadiums, and high-demand facilities.
          </motion.p>
        </div>

        {/* Product visual */}
        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-4 top-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.30),transparent_70%)] blur-2xl"
          />
          <div className="relative rounded-[2rem] border border-graphite/80 bg-panel/60 p-2 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] border border-white/5 bg-ink">
              <motion.img
                src="/tiltshield/tiltshield-hero.jpg"
                alt="Black 1–2.5 yard tilt truck secured with a TiltShield stretch-fit cover"
                width={1122}
                height={1250}
                className="h-auto w-full object-cover"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <figcaption className="flex items-center justify-between px-4 py-3">
              <span className="spec-label text-slateSoft">Universal stretch fit</span>
              <span className="spec-label text-cyan">Secures under rim</span>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
