import { XCircle, CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/motion";

const WITHOUT = ["Exposed waste", "Spills and leaks", "Slower workflow", "Inspection risks"];
const WITH = ["Secure, covered loads", "Fewer spills and leaks", "Faster operations", "Confidence at inspections"];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-cyan">Side by side</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            The difference is clear
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="relative mx-auto mt-14 max-w-4xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-graphite md:grid-cols-2">
            {/* Without */}
            <div className="relative border-b border-graphite bg-panel/80 p-8 md:border-b-0 md:border-r md:p-10">
              <div aria-hidden="true" className="hazard-divider hazard-divider--red absolute inset-x-0 top-0" />
              <p className="spec-label text-warning">Without TiltShield</p>
              <ul className="mt-7 space-y-4">
                {WITHOUT.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] text-coolGray/85">
                    <XCircle className="h-5 w-5 shrink-0 text-warning" strokeWidth={1.8} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* With */}
            <div className="relative bg-shield/[0.18] p-8 md:p-10">
              <div aria-hidden="true" className="hazard-divider absolute inset-x-0 top-0" />
              <p className="spec-label text-cyan">With TiltShield</p>
              <ul className="mt-7 space-y-4">
                {WITH.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-medium text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-compliance" strokeWidth={1.8} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-graphite bg-ink px-4 py-2 font-display text-sm font-bold text-white md:block"
          >
            VS
          </span>
        </FadeUp>
      </div>
    </section>
  );
}
