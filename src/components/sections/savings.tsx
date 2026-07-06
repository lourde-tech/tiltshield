import { Truck, Sparkles, ShieldAlert, FileCheck2, Building2 } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const SAVINGS = [
  { icon: Truck, title: "Faster waste runs", copy: "No lids to lift means fewer wasted minutes per trip." },
  { icon: Sparkles, title: "Less cleanup labor", copy: "Contained loads mean fewer spills to mop up." },
  { icon: ShieldAlert, title: "Fewer injury risks", copy: "Removing heavy-lid handling reduces strain on staff." },
  { icon: FileCheck2, title: "Reduced compliance violations", copy: "Covered waste helps you pass inspections with confidence." },
  { icon: Building2, title: "Cleaner, more professional facilities", copy: "Every run looks — and stays — under control." },
];

export function Savings() {
  return (
    <section id="benefits" className="bg-white py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-compliance">Return on every run</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            What this saves you
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateSoft">
            Facilities save hours every week — across labor, cleanup, and compliance.
          </p>
        </FadeUp>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAVINGS.map(({ icon: Icon, title, copy }, i) => (
            <StaggerItem
              key={title}
              className={
                i === 4
                  ? "rounded-2xl border border-compliance/25 bg-compliance/[0.05] p-7 sm:col-span-2 lg:col-span-1"
                  : "rounded-2xl border border-lightBorder bg-mist p-7"
              }
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-compliance/10">
                <Icon className="h-5 w-5 text-compliance" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slateSoft">{copy}</p>
            </StaggerItem>
          ))}
          <StaggerItem className="flex flex-col justify-center rounded-2xl bg-navy p-7">
            <span className="font-display text-5xl font-extrabold tracking-tight text-white">
              30<span className="text-cyan">%</span>
            </span>
            <p className="mt-2 text-[15px] leading-relaxed text-slateSoft">
              Cuts waste-handling time by up to 30% versus lifting traditional lids.
            </p>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}
