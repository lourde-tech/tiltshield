import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const PROBLEMS = [
  {
    title: "Overflow & spills",
    copy: "Uncovered loads create mess, complaints, and extra cleanup.",
  },
  {
    title: "Heavy lids",
    copy: "Traditional 20 to 30 lb lids slow staff down and add unnecessary strain.",
  },
  {
    title: "Inefficient workflow",
    copy: "More trips, more cleanup, and more frustration on every run.",
  },
  {
    title: "Compliance risks",
    copy: "Exposed waste can create failed inspections and costly issues.",
  },
];

export function Problem() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <FadeUp>
          <h2 className="display-lg text-navy">
            The problem every facility faces
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slateSoft">
            Every uncovered waste run costs time, labor, and compliance risk,
            every single day.
          </p>
          <div aria-hidden="true" className="hazard-divider hazard-divider--red mt-10 max-w-xs" />
        </FadeUp>

        <StaggerGrid className="lg:pt-2">
          {PROBLEMS.map(({ title, copy }) => (
            <StaggerItem
              key={title}
              className="grid items-baseline gap-2 border-t border-lightBorder py-6 last:border-b sm:grid-cols-[1fr_1.4fr] sm:gap-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-navy">{title}</h3>
              <p className="text-[15px] leading-relaxed text-slateSoft">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
