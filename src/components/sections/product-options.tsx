import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";

const COLORS = [
  { name: "Gray", image: "/tiltshield/colors/gray.png" },
  { name: "Black", image: "/tiltshield/colors/black.png" },
  { name: "Blue", image: "/tiltshield/colors/blue.png" },
  { name: "Red", image: "/tiltshield/colors/red.png" },
];

export function ProductOptions() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="spec-label text-shield">Product options</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Four colors. One perfect fit.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateSoft">
            Designed to expand over any load and secure tightly to your tilt truck.
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
              <p className="spec-label mt-1 text-slateSoft">Universal stretch fit</p>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeUp delay={0.15} className="mt-10 text-center">
          <p className="spec-label inline-block rounded-full border border-lightBorder bg-white px-5 py-2.5 text-slateText">
            Fits 1–2.5 yard tilt trucks
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
