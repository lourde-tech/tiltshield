import { Cross, Plane, Trophy, GraduationCap, Factory, Store, Warehouse, School } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const INDUSTRIES = [
  { icon: Cross, label: "Hospitals" },
  { icon: Plane, label: "Airports" },
  { icon: Trophy, label: "Stadiums" },
  { icon: School, label: "Schools" },
  { icon: Factory, label: "Industrial facilities" },
  { icon: Store, label: "Commercial properties" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: GraduationCap, label: "Universities" },
];

export function Industries() {
  return (
    <section id="industries" className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-shield">Where it works</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Built for high-demand environments
          </h2>
        </FadeUp>

        <StaggerGrid className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <StaggerItem
              key={label}
              className="flex items-center gap-3.5 rounded-2xl border border-lightBorder bg-white px-5 py-5 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist">
                <Icon className="h-5 w-5 text-clinical" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="font-display text-[15px] font-semibold text-navy">{label}</span>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
