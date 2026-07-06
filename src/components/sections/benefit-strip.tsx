import { Droplets, Timer, HardHat, ClipboardCheck } from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/motion";

const BENEFITS = [
  { icon: Droplets, title: "Prevent spills & leaks", copy: "Waterproof cover contains waste and liquids in transit." },
  { icon: Timer, title: "Save time every run", copy: "Secured in seconds — no lids to lift or wrestle." },
  { icon: HardHat, title: "Reduce injury risk", copy: "No 20–30 lb lids means less strain on your team." },
  { icon: ClipboardCheck, title: "Stay inspection-ready", copy: "Covered loads help keep every run compliant." },
];

export function BenefitStrip() {
  return (
    <section aria-label="Key benefits" className="relative bg-navy pb-20">
      <div className="container">
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, copy }) => (
            <StaggerItem
              key={title}
              className="group rounded-2xl border border-graphite/80 bg-panel/70 p-6 transition-colors duration-300 hover:border-cyan/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-graphite bg-white/[0.04]">
                <Icon className="h-5 w-5 text-cyan" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-[17px] font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slateSoft">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
      <div aria-hidden="true" className="hazard-divider mt-20" />
    </section>
  );
}
