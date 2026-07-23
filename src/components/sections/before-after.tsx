import { FadeUp } from "@/components/motion";
import {
  ClipboardCheckIcon,
  ClockIcon,
  CoveredContainerIcon,
  DripIcon,
  NoDripIcon,
  OpenContainerIcon,
  RiskIcon,
  StopwatchIcon,
  type TiltShieldIconProps,
} from "@/components/ui/tiltshield-icons";

type ComparisonItem = {
  label: string;
  Icon: (props: TiltShieldIconProps) => React.JSX.Element;
};

const WITHOUT: ComparisonItem[] = [
  { label: "Exposed waste", Icon: OpenContainerIcon },
  { label: "Spills and leaks", Icon: DripIcon },
  { label: "Slower workflow", Icon: ClockIcon },
  { label: "Inspection risks", Icon: RiskIcon },
];

const WITH: ComparisonItem[] = [
  { label: "Secure, covered loads", Icon: CoveredContainerIcon },
  { label: "Fewer spills and leaks", Icon: NoDripIcon },
  { label: "Faster operations", Icon: StopwatchIcon },
  { label: "Confidence at inspections", Icon: ClipboardCheckIcon },
];

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="container">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg mx-auto text-white">
            The difference is clear
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="relative mx-auto mt-14 max-w-4xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-graphite md:grid-cols-2">
            {/* Without */}
            <div className="relative border-b border-graphite bg-panel/80 p-8 md:border-b-0 md:border-r md:p-10">
              <div aria-hidden="true" className="hazard-divider hazard-divider--red absolute inset-x-0 top-0" />
              <p className="spec-label text-warning">Without TiltShield</p>
              <ul className="mt-7 space-y-4">
                {WITHOUT.map(({ label, Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-[16px] text-coolGray/70">
                    <Icon className="h-5 w-5 shrink-0 text-warning" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            {/* With */}
            <div className="relative bg-shield/[0.18] p-8 md:p-10">
              <div aria-hidden="true" className="hazard-divider absolute inset-x-0 top-0" />
              <p className="spec-label text-cyan">With TiltShield</p>
              <ul className="mt-7 space-y-4">
                {WITH.map(({ label, Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-[16px] font-medium text-white">
                    <Icon className="h-5 w-5 shrink-0 text-cyan" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-graphite bg-ink px-4 py-2 font-display text-sm font-bold text-white md:block"
          >
            VS
          </span>
        </FadeUp>
      </div>
    </section>
  );
}
