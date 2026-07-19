import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion";
import { ArrowRightSmall, ScheduleIcon } from "@/components/ui/tiltshield-icons";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div aria-hidden="true" className="hazard-divider absolute inset-x-0 top-0" />
      <div className="container relative">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2 className="display-lg mx-auto text-white">
            Stop wasting time and risking violations.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slateSoft">
            Upgrade your waste handling process with a faster, cleaner, safer
            way to secure every load.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Request Pricing
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRightSmall className="h-4 w-4" />
                </span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <ScheduleIcon className="h-5 w-5 text-cyan" />
                Schedule a Demo
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-slateSoft/80">
            Volume pricing is available. Cost per cover drops as your order
            grows. Contact us for a quote built around your fleet.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
