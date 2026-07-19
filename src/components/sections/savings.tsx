import { FadeUp, StaggerGrid, StaggerItem } from "@/components/motion";
import {
  BuildingIcon,
  ClipboardCheckIcon,
  ShieldIcon,
  SparkleIcon,
  StopwatchIcon,
} from "@/components/ui/tiltshield-icons";

const SAVINGS = [
  { title: "Faster waste runs", copy: "No lids to lift means fewer wasted minutes per trip.", Icon: StopwatchIcon },
  { title: "Less cleanup labor", copy: "Contained loads mean fewer spills to mop up.", Icon: SparkleIcon },
  { title: "Fewer injury risks", copy: "Removing heavy lid handling reduces strain on staff.", Icon: ShieldIcon },
  { title: "Reduced compliance violations", copy: "Covered waste helps you pass inspections with confidence.", Icon: ClipboardCheckIcon },
  { title: "Cleaner, more professional facilities", copy: "Every run looks and stays under control.", Icon: BuildingIcon },
];

export function Savings() {
  return (
    <section id="benefits" className="bg-white pb-24 pt-16 md:pb-32 md:pt-20">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <FadeUp>
          <h2 className="display-lg text-navy">What this saves you</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slateSoft">
            Facilities save hours every week across labor, cleanup, and
            compliance.
          </p>

          <div className="mt-12 border-t border-lightBorder pt-8">
            <span className="font-display text-[clamp(5rem,9vw,8.5rem)] font-semibold leading-none tracking-tighter text-navy">
              30<span className="text-clinical">%</span>
            </span>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slateSoft">
              Cuts waste handling time by up to 30% versus lifting traditional
              lids.
            </p>
          </div>
        </FadeUp>

        <StaggerGrid className="lg:pt-2">
          {SAVINGS.map(({ title, copy, Icon }) => (
            <StaggerItem
              key={title}
              className="grid items-baseline gap-2 border-t border-lightBorder py-6 last:border-b sm:grid-cols-[1.1fr_1.2fr] sm:gap-6"
            >
              <h3 className="flex items-start gap-3 font-display text-lg font-semibold tracking-tight text-navy">
                <Icon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-shield" />
                {title}
              </h3>
              <p className="pl-[34px] text-[15px] leading-relaxed text-slateSoft sm:pl-0">{copy}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
