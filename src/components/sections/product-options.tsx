import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const COLORS = [
  { name: "Gray", image: "/images/tiltshield/color-gray.png" },
  { name: "Black", image: "/images/tiltshield/color-black.png" },
  { name: "Blue", image: "/images/tiltshield/color-blue.png" },
  { name: "Red", image: "/images/tiltshield/color-red.png" },
];

const SIZES = [
  { name: "Standard", dims: "72.25 × 33.5 × 43.75 in" },
  { name: "Large", dims: "80.5 × 43 × 49.5 in" },
];

export function ProductOptions() {
  return (
    <section id="product" className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg mx-auto text-navy">
            Four colors. Two sizes.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateSoft">
            Reusable and easy to clean. Wipes clean with standard hospital
            disinfectants. No heavy lids to lift, store, or replace.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-slateSoft">
            Available in standard and large, in the color that fits your
            facility. Every cover is waterproof and durable, expands over even
            overflowing loads, and locks tightly to your tilt truck.
          </p>
        </FadeUp>

        <StaggerGrid className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {COLORS.map(({ name, image }) => (
            <StaggerItem
              key={name}
              className="group rounded-2xl border border-lightBorder bg-white p-6 text-center shadow-card transition-shadow duration-300 hover:shadow-cardHover"
            >
              <img
                src={image}
                alt={`${name} TiltShield cover secured on a tilt truck`}
                loading="lazy"
                className="mx-auto h-44 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 md:h-48"
              />
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{name}</h3>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeUp delay={0.15} className="mt-12">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {SIZES.map(({ name, dims }) => (
              <span
                key={name}
                className="inline-flex items-baseline gap-2.5 whitespace-nowrap rounded-full border border-lightBorder bg-white px-5 py-3 font-sans text-[15px] leading-6 tracking-normal"
              >
                <span className="font-semibold text-navy">{name}</span>
                <span className="font-normal text-slateSoft">{dims}</span>
              </span>
            ))}
          </div>
          <p className="mt-5 text-center text-base leading-7 text-slateSoft">
            Every color is available in both sizes and fits 1 to 2.5 yard tilt
            trucks.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
