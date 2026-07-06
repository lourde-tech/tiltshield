import { useEffect } from "react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

type LegalLayoutProps = {
  title: string;
  metaDescription: string;
  heading: string;
  effectiveDate: string;
  children: React.ReactNode;
};

/**
 * Shared shell for legal pages (/privacy-policy, /terms-of-use).
 * Dark page header keeps the fixed site header readable; the document body
 * sits in a readable max-w-3xl column on white.
 */
export function LegalLayout({ title, metaDescription, heading, effectiveDate, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const previous = meta.content;
    meta.content = metaDescription;
    window.scrollTo(0, 0);
    return () => {
      meta.content = previous;
    };
  }, [title, metaDescription]);

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy pb-14 pt-32 md:pb-16 md:pt-40">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <p className="spec-label text-cyan">Legal</p>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                {heading}
              </h1>
              <p className="mt-4 text-sm text-slateSoft">
                <strong className="font-semibold text-coolGray">Effective Date:</strong> {effectiveDate}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-lightBorder bg-mist px-5 py-4 text-sm italic leading-6 text-slateSoft">
      {children}
    </p>
  );
}

export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-xl font-bold tracking-tight text-navy md:text-2xl">
      {children}
    </h2>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[15px] leading-7 text-slateText">{children}</p>;
}

export function LegalUl({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-slateText">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalContactBlock() {
  return (
    <div className="mt-5 rounded-xl border border-lightBorder bg-mist px-5 py-5 text-[15px] leading-7 text-slateText">
      <p className="font-semibold text-navy">TiltShield</p>
      <p>TiltShield LLC</p>
      <p>291 J A Cochran Bypass, Chester, SC 29706</p>
      <p>
        <strong className="font-semibold text-navy">Website:</strong>{" "}
        <a href="https://www.tiltshieldusa.com" className="text-clinical underline-offset-2 hover:underline">
          https://www.tiltshieldusa.com
        </a>
      </p>
      <p>
        <strong className="font-semibold text-navy">Email:</strong>{" "}
        <a href="mailto:info@tiltshield.com" className="text-clinical underline-offset-2 hover:underline">
          info@tiltshield.com
        </a>
      </p>
      <p>
        <strong className="font-semibold text-navy">Phone:</strong>{" "}
        <a href="tel:+18339876455" className="text-clinical underline-offset-2 hover:underline">
          (833) 987-6455
        </a>
      </p>
    </div>
  );
}
