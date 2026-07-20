import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    number: "01",
    title: "Place over load",
    copy: "Lower TiltShield over the container and align it with the opening.",
    image: "/images/tiltshield/step-place-over-load.png",
    alt: "TiltShield positioned above a loaded tilt truck",
  },
  {
    number: "02",
    title: "Stretch over container",
    copy: "Pull the flexible edge evenly around the container.",
    image: "/images/tiltshield/step-stretch-over-container.png",
    alt: "TiltShield being stretched around the rim of a tilt truck",
  },
  {
    number: "03",
    title: "Secure under rim",
    copy: "Seat the flexible edge evenly around the rim before movement.",
    image: "/images/tiltshield/step-secure-under-rim.png",
    alt: "TiltShield secured around the rim of a tilt truck",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist pb-14 pt-24 sm:pt-28 lg:pb-16 lg:pt-36">
      <div className="container">
        <FadeUp className="max-w-2xl">
          <h2 className="display-lg text-navy">
            Three moves.
            <br />
            Ten seconds.
          </h2>
        </FadeUp>

        <StaggerGrid className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8 lg:mt-20">
          {STEPS.map(({ number, title, copy, image, alt }) => (
            <StaggerItem key={number} className="group border-t border-navy/15 pt-6">
              <p
                aria-hidden="true"
                className="font-display text-[clamp(4rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.05em] text-navy/10"
              >
                {number}
              </p>

              <div className="mt-5 aspect-[3/5] w-full overflow-hidden rounded-[18px] bg-[#edf0f3]">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width={971}
                  height={1619}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.015]"
                />
              </div>

              <h3 className="mt-7 font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-navy">
                {title}
              </h3>
              <p className="mt-3 max-w-[32rem] text-base leading-7 text-slateSoft">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeUp delay={0.15} className="mt-16 border-t border-navy/15 pt-10">
          <p className="display-md max-w-3xl text-navy">
            Done in under 10 seconds.{" "}
            <span className="text-slateSoft">No training required. No lifting needed.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
