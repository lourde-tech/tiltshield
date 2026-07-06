export type TrustedPartnerLogo = {
  name: string;
  src: string;
  alt: string;
  website: string;
  source: string;
  recommendedUse: "light-card" | "white-background";
};

export const trustedPartnerLogos: TrustedPartnerLogo[] = [
  {
    name: "Atrium Health",
    src: "/logos/partners/atrium-health.jpg",
    alt: "Atrium Health logo",
    website: "https://atriumhealth.org/",
    source: "Official Atrium Health media resources / brand logo download",
    recommendedUse: "white-background",
  },
  {
    name: "Nebraska Medicine",
    src: "/logos/partners/nebraska-medicine.png",
    alt: "Nebraska Medicine logo",
    website: "https://www.nebraskamed.com/",
    source: "Official Nebraska Medicine website logo asset",
    recommendedUse: "light-card",
  },
  {
    name: "Penn Medicine",
    src: "/logos/partners/penn-medicine.jpg",
    alt: "Penn Medicine logo",
    website: "https://www.pennmedicine.org/",
    source: "Official Penn Medicine digital standards/logo reference asset",
    recommendedUse: "white-background",
  },
];
