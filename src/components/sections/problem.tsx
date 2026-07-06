import { AlertTriangle, UserX, Clock3, FileWarning } from "lucide-react";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Overflow & spills",
    copy: "Uncovered loads create mess, complaints, and extra cleanup.",
  },
  {
    icon: UserX,
    title: "Heavy lids",
    copy: "Traditional 20–30 lb lids slow staff down and add unnecessary strain.",
  },
  {
    icon: Clock3,
    title: "Inefficient workflow",
    copy: "More trips, more cleanup, and more frustration on every run.",
  },
  {
    icon: FileWarning,
    title: "Compliance risks",
    copy: "Exposed waste can create failed inspections and costly issues.",
  },
];

export function Problem() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-warning">Operational risk</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            The problem every facility faces
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateSoft">
            Every uncovered waste run costs time, labor, and compliance risk — every day.
          </p>
        </FadeUp>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, copy }) => (
            <StaggerItem
              key={title}
              className="rounded-2xl border border-lightBorder bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-warning/10">
                <Icon className="h-5 w-5 text-warning" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slateSoft">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeUp delay={0.15} className="mx-auto mt-10 max-w-3xl">
          <div aria-hidden="true" className="hazard-divider hazard-divider--red" />
        </FadeUp>
      </div>
    </section>
  );
}
