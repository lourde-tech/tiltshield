import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    step: "01",
    title: "Place over load",
    copy: "Drop TiltShield over the top of the container — even overflowing loads.",
    image: "/images/how-it-works/place-over-load.png",
    alt: "TiltShield cover being placed over an overloaded container filled with rocks and debris",
  },
  {
    step: "02",
    title: "Stretch over container",
    copy: "The universal stretch fit expands to cover the full opening.",
    image: "/images/how-it-works/stretch-over-container.png",
    alt: "TiltShield cover being stretched over a black container with visible tension",
  },
  {
    step: "03",
    title: "Secure under rim",
    copy: "The cover locks tightly under the rim and stays put during transport.",
    image: "/images/how-it-works/secure-under-rim.png",
    alt: "TiltShield cover fully secured under the rim of a black container",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-shield">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Three moves. Ten seconds.
          </h2>
        </FadeUp>

        <StaggerGrid className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ step, title, copy, image, alt }) => (
            <StaggerItem
              key={step}
              className="group rounded-3xl border border-lightBorder bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <div className="relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-lightBorder bg-mist p-3 md:h-52">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
                <span className="spec-label absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-clinical text-[11px] font-bold text-white shadow-md">
                  {step}
                </span>
              </div>

              <h3 className="text-center font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mx-auto mt-2.5 max-w-xs pb-3 text-center text-[15px] leading-relaxed text-slateSoft">
                {copy}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeUp delay={0.15} className="mt-12 text-center">
          <p className="mx-auto inline-block rounded-full border border-lightBorder bg-white px-6 py-3 font-display text-[15px] font-semibold text-navy shadow-card">
            Done in under 10 seconds. No training required. No lifting needed.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
