import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightSmall } from "@/components/ui/tiltshield-icons";
import { TiltShieldHeroVideo } from "@/components/media/tiltshield-hero-video";

const ease = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="bg-navy px-3 pb-16 pt-3 md:pb-20">
      <div className="relative mx-auto h-[clamp(720px,calc(100svh-24px),940px)] w-[min(100%,1500px)] overflow-hidden rounded-[30px]">
        {/* Full-background product video */}
        <TiltShieldHeroVideo />

        {/* Cinematic overlay stack: unifying navy wash, left text gradient,
            top navigation gradient, lower depth gradient */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-navy/10" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.92)_0%,rgba(7,17,31,0.72)_28%,rgba(7,17,31,0.24)_55%,rgba(7,17,31,0.04)_78%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.48)_0%,transparent_24%,transparent_58%,rgba(7,17,31,0.58)_100%)]"
        />

        {/* Copy anchored lower left */}
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="max-w-[9ch] font-display text-[clamp(3.25rem,15vw,5.1rem)] font-medium leading-[0.91] tracking-[-0.055em] text-white sm:text-[clamp(4rem,7vw,7.4rem)] sm:leading-[0.88] sm:tracking-[-0.065em]"
            style={{ textWrap: "balance" }}
          >
            The future of waste handling.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-6 max-w-[33rem] text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-white/[0.68]"
          >
            Tested in 2 hospitals during daily operations. Reviewed for
            compliance by hospital Infection Control leadership.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
            className="mt-3 max-w-[33rem] text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.55] text-white/[0.68]"
          >
            TiltShield is a reusable cover that stretches over tilt trucks and
            moves with modern institutional operations.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.36 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-white px-7 text-[15px] font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              Request Pricing
              <ArrowRightSmall className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.16]"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
