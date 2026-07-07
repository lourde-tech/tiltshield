import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { BenefitStrip } from "@/components/sections/benefit-strip";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Savings } from "@/components/sections/savings";
import { BeforeAfter } from "@/components/sections/before-after";
import { ProductOptions } from "@/components/sections/product-options";
import { InstitutionalExperience } from "@/components/sections/institutional-experience";
import { Industries } from "@/components/sections/industries";
import { FinalCta } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { PrivacyPolicyPage } from "@/pages/privacy-policy";
import { TermsOfUsePage } from "@/pages/terms-of-use";
import { TawkChat } from "@/components/tawk-chat";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/privacy-policy")
    return (
      <>
        <TawkChat />
        <PrivacyPolicyPage />
      </>
    );
  if (path === "/terms-of-use")
    return (
      <>
        <TawkChat />
        <TermsOfUsePage />
      </>
    );

  return (
    <>
      <TawkChat />
      <a
        href="#product"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-clinical focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <BenefitStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Savings />
        <BeforeAfter />
        <ProductOptions />
        <InstitutionalExperience />
        <Industries />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
