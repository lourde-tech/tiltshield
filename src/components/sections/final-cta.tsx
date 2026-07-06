import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div aria-hidden="true" className="hazard-divider absolute inset-x-0 top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_65%)] blur-3xl"
      />
      <div className="container relative">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Stop wasting time and risking violations.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slateSoft">
            Upgrade your waste-handling process with a faster, cleaner, safer
            way to secure every load.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Get Pricing Now
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <CalendarDays className="h-5 w-5 text-cyan" aria-hidden="true" />
                Schedule a Demo
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
