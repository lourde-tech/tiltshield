import { LegalLayout, LegalNote, LegalH2, LegalP, LegalUl, LegalContactBlock } from "@/pages/legal";

export function TermsOfUsePage() {
  return (
    <LegalLayout
      title="Terms of Use | TiltShield"
      metaDescription="Review the terms and conditions that govern use of the TiltShield website, including website access, product information, quote requests, intellectual property, disclaimers, and limitations of liability."
      heading="Terms of Use"
      effectiveDate="August 2, 2025"
    >
      <LegalNote>
        These Terms of Use are provided as a strong starting point for the TiltShield website and
        should be reviewed by a qualified attorney before publication.
      </LegalNote>

      <section>
        <LegalH2>Acceptance of Terms</LegalH2>
        <LegalP>
          These Terms of Use govern your access to and use of the website located at{" "}
          <a href="https://www.tiltshieldusa.com" className="text-clinical underline-offset-2 hover:underline">
            https://www.tiltshieldusa.com
          </a>
          , operated by TiltShield LLC (“TiltShield,” “we,” “us,” or “our”).
        </LegalP>
        <LegalP>
          By accessing or using the website, you agree to these Terms of Use. If you do not agree
          to these Terms, you should not use the website.
        </LegalP>
        <LegalP>
          These Terms apply only to use of the website. Any purchase, distribution, pilot program,
          partnership, or other business arrangement may be subject to separate written
          agreements.
        </LegalP>
      </section>

      <section>
        <LegalH2>About TiltShield</LegalH2>
        <LegalP>
          TiltShield is a reusable, flexible, stretch-fit cover designed for tilt trucks, waste
          containers, and institutional cleanup environments.
        </LegalP>
        <LegalP>
          TiltShield is intended for use by organizations such as hospitals, healthcare systems,
          airports, arenas, schools, universities, janitorial service providers, facility
          managers, and other large public or commercial facilities.
        </LegalP>
        <LegalP>
          The website provides general product information and allows visitors to submit business
          inquiries, quote requests, or contact forms.
        </LegalP>
        <LegalP>
          TiltShield is designed to help support cleaner, more contained, and more professional
          waste-handling and facility-management workflows. However, TiltShield does not guarantee
          regulatory, safety, sanitation, infection-control, OSHA, hospital, or other compliance
          outcomes.
        </LegalP>
      </section>

      <section>
        <LegalH2>Website Use</LegalH2>
        <LegalP>You may use the website for lawful business and informational purposes only.</LegalP>
        <LegalP>
          You agree not to use the website in a way that could damage, disable, interfere with, or
          impair the website or its functionality.
        </LegalP>
        <LegalP>
          You are responsible for ensuring that any information you submit through the website is
          accurate, current, and lawful to provide.
        </LegalP>
      </section>

      <section>
        <LegalH2>Product Information and Availability</LegalH2>
        <LegalP>
          The product information on this website is provided for general informational and
          business inquiry purposes.
        </LegalP>
        <LegalP>
          We make reasonable efforts to present accurate and current information, but we do not
          guarantee that all product descriptions, images, specifications, availability, pricing,
          or other content will be complete, current, or error-free.
        </LegalP>
        <LegalP>
          Product designs, materials, specifications, colors, availability, and features may
          change without notice.
        </LegalP>
        <LegalP>
          Any product descriptions using terms such as “designed to,” “intended to,” “may,”
          “helps,” or similar language should not be interpreted as a guarantee of performance,
          safety, or compliance in every environment.
        </LegalP>
        <LegalP>
          Organizations are responsible for evaluating whether TiltShield is appropriate for their
          specific use case, facility policies, cleaning procedures, waste-handling practices, and
          applicable requirements.
        </LegalP>
      </section>

      <section>
        <LegalH2>Quote Requests and Business Inquiries</LegalH2>
        <LegalP>
          The website may allow visitors to submit quote requests, contact forms, or other
          business inquiries.
        </LegalP>
        <LegalP>
          Submitting a form does not create a binding purchase agreement, customer relationship,
          distributor relationship, partnership, or obligation for TiltShield to provide products
          or services.
        </LegalP>
        <LegalP>
          Any pricing, availability, product recommendation, pilot program, or business
          arrangement may require additional review and written confirmation.
        </LegalP>
        <LegalP>
          We reserve the right to decline inquiries, limit availability, or request additional
          information before responding to a business request.
        </LegalP>
      </section>

      <section>
        <LegalH2>No Professional Advice</LegalH2>
        <LegalP>
          The information on this website is provided for general informational purposes only.
        </LegalP>
        <LegalP>
          TiltShield does not provide medical, legal, regulatory, infection-control, sanitation,
          facility-safety, OSHA, or compliance advice.
        </LegalP>
        <LegalP>
          Nothing on the website should be interpreted as professional guidance or as a substitute
          for consultation with qualified advisors, facility safety personnel, legal counsel,
          infection-control professionals, compliance officers, or other appropriate experts.
        </LegalP>
        <LegalP>
          Customers and website visitors are responsible for making their own operational, safety,
          legal, and compliance decisions.
        </LegalP>
      </section>

      <section>
        <LegalH2>Intellectual Property</LegalH2>
        <LegalP>
          The website, including its text, graphics, logos, images, design, layout, product names,
          branding, icons, and other content, is owned by or licensed to TiltShield and is
          protected by applicable intellectual property laws.
        </LegalP>
        <LegalP>You may view and use the website for legitimate business and informational purposes.</LegalP>
        <LegalP>
          You may not copy, reproduce, modify, distribute, display, sell, license, reverse
          engineer, or create derivative works from any portion of the website or its content
          without prior written permission from TiltShield.
        </LegalP>
        <LegalP>
          All trademarks, logos, trade names, and product names displayed on the website are the
          property of their respective owners.
        </LegalP>
        <LegalP>
          Any reference to third-party organizations, industries, facilities, or use cases does
          not imply endorsement, sponsorship, partnership, or customer status unless expressly
          stated and verified.
        </LegalP>
      </section>

      <section>
        <LegalH2>Prohibited Uses</LegalH2>
        <LegalP>You agree not to:</LegalP>
        <LegalUl
          items={[
            "Use the website for unlawful, fraudulent, misleading, or harmful purposes",
            "Attempt to gain unauthorized access to the website, systems, or data",
            "Interfere with or disrupt website operation or security",
            "Use bots, scrapers, crawlers, or automated tools without permission",
            "Submit false, misleading, or unauthorized information",
            "Upload or transmit malicious code, viruses, or harmful files",
            "Copy or misuse website content, branding, or product materials",
            "Impersonate another person, company, or organization",
            "Use the website in a way that violates applicable law or third-party rights",
          ]}
        />
        <LegalP>
          We reserve the right to restrict or terminate access to the website if we believe a
          visitor has violated these Terms.
        </LegalP>
      </section>

      <section>
        <LegalH2>Third-Party Links</LegalH2>
        <LegalP>
          The website may include links to third-party websites, tools, platforms, or resources.
        </LegalP>
        <LegalP>
          These links are provided for convenience only. TiltShield does not control and is not
          responsible for third-party websites, content, policies, security, or practices.
        </LegalP>
        <LegalP>Accessing third-party websites is at your own risk.</LegalP>
      </section>

      <section>
        <LegalH2>Disclaimers</LegalH2>
        <LegalP>The website and its content are provided on an “as is” and “as available” basis.</LegalP>
        <LegalP>
          TiltShield makes no warranties or representations, express or implied, regarding the
          website or its content, including but not limited to accuracy, completeness,
          availability, reliability, fitness for a particular purpose, non-infringement, or
          uninterrupted operation.
        </LegalP>
        <LegalP>
          TiltShield does not guarantee that the website will be error-free, secure,
          uninterrupted, or free from viruses or harmful components.
        </LegalP>
        <LegalP>
          TiltShield does not guarantee that use of its products will result in any specific
          operational, safety, regulatory, sanitation, infection-control, or compliance outcome.
        </LegalP>
      </section>

      <section>
        <LegalH2>Limitation of Liability</LegalH2>
        <LegalP>
          To the maximum extent permitted by law, TiltShield and its owners, officers, employees,
          contractors, service providers, and affiliates will not be liable for any indirect,
          incidental, consequential, special, punitive, or exemplary damages arising out of or
          related to your use of the website.
        </LegalP>
        <LegalP>
          This includes damages related to lost profits, lost business opportunities, lost data,
          business interruption, website errors, reliance on website content, or inability to
          access the website.
        </LegalP>
        <LegalP>
          To the maximum extent permitted by law, TiltShield’s total liability for any claim
          related to the website will not exceed one hundred dollars ($100).
        </LegalP>
        <LegalP>
          Some jurisdictions do not allow certain limitations of liability, so some of the above
          limitations may not apply to you.
        </LegalP>
      </section>

      <section>
        <LegalH2>Indemnification</LegalH2>
        <LegalP>
          You agree to indemnify, defend, and hold harmless TiltShield, its owners, officers,
          employees, contractors, service providers, and affiliates from and against any claims,
          damages, liabilities, losses, costs, and expenses, including reasonable attorneys’ fees,
          arising out of or related to:
        </LegalP>
        <LegalUl
          items={[
            "Your use of the website",
            "Your violation of these Terms",
            "Your submission of false, misleading, or unauthorized information",
            "Your violation of applicable law",
            "Your violation of any third-party rights",
          ]}
        />
      </section>

      <section>
        <LegalH2>Governing Law</LegalH2>
        <LegalP>
          These Terms are governed by the laws of the State of South Carolina, without regard to
          conflict-of-law principles.
        </LegalP>
        <LegalP>
          Any dispute arising out of or related to these Terms or the website will be handled in
          the state or federal courts located in South Carolina, unless otherwise required by
          applicable law.
        </LegalP>
      </section>

      <section>
        <LegalH2>Changes to These Terms</LegalH2>
        <LegalP>We may update these Terms of Use from time to time.</LegalP>
        <LegalP>
          When changes are made, we may update the “Effective Date” at the top of this page. Your
          continued use of the website after updated Terms are posted means you accept the revised
          Terms.
        </LegalP>
      </section>

      <section>
        <LegalH2>Termination of Access</LegalH2>
        <LegalP>
          We may suspend, restrict, or terminate access to the website at any time, with or
          without notice, if we believe a visitor has violated these Terms, misused the website,
          created security concerns, or acted in a way that may harm TiltShield or others.
        </LegalP>
      </section>

      <section>
        <LegalH2>Contact Us</LegalH2>
        <LegalP>If you have questions about these Terms of Use, please contact us:</LegalP>
        <LegalContactBlock />
      </section>
    </LegalLayout>
  );
}
