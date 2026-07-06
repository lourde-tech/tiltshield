import { CheckCircle2, Gauge } from "lucide-react";
import { FadeUp } from "@/components/motion";

const FEATURES = [
  "One-size stretch fit",
  "Covers overflowing loads",
  "Secures tightly under the rim",
  "Waterproof and easy to clean",
  "Durable and reusable",
  "Fits 1–2.5 yard tilt trucks",
];

export function Solution() {
  return (
    <section id="product" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_65%)] blur-3xl"
      />
      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        <FadeUp>
          <p className="spec-label text-cyan">The solution</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Meet TiltShield<span className="align-super text-lg text-slateSoft">™</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slateSoft">
            A stretch-fit cover designed to secure any load instantly — without
            lifting, shifting, or slowing down your team.
          </p>

          <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] text-coolGray">
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-cyan" strokeWidth={2} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-cyan/25 bg-cyan/[0.07] px-5 py-2.5">
            <Gauge className="h-5 w-5 text-cyan" aria-hidden="true" />
            <span className="font-display text-sm font-bold tracking-tight text-white">
              Cuts waste-handling time by up to 30%
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="relative mx-auto w-full max-w-[480px]">
          <div className="rounded-[2rem] border border-graphite/80 bg-panel/70 p-2">
            <div className="overflow-hidden rounded-[calc(2rem-0.5rem)] bg-ink">
              <img
                src="/tiltshield/tiltshield-solution.jpg"
                alt="TiltShield stretch-fit cover secured over an overflowing tilt truck load"
                loading="lazy"
                width={1122}
                height={1220}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-px px-2 py-3 text-center">
              {["Waterproof", "Wipeable surface", "Durable material"].map((s) => (
                <span key={s} className="spec-label text-slateSoft">{s}</span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
