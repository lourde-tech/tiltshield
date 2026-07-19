import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const INDUSTRIES = [
  "Hospitals & healthcare",
  "Airports & transportation",
  "Stadiums & arenas",
  "Schools & universities",
  "Industrial & commercial facilities",
  "Warehouses & distribution",
];

export function Industries() {
  return (
    <section id="industries" className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="max-w-2xl">
          <h2 className="display-lg text-navy">
            Built for demanding environments
          </h2>
        </FadeUp>

        <StaggerGrid className="mt-14">
          {INDUSTRIES.map((label) => (
            <StaggerItem
              key={label}
              className="group border-t border-navy/15 py-5 transition-colors duration-300 last:border-b hover:border-navy/30 md:py-6"
            >
              <span className="font-display text-2xl font-semibold tracking-tight text-navy transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1.5 md:text-4xl">
                {label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
