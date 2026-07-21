import { LegalLayout, LegalNote, LegalH2, LegalP, LegalUl, LegalContactBlock } from "@/pages/legal";

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy | TiltShield"
      metaDescription="Learn how TiltShield collects, uses, protects, and handles information submitted through its website, contact forms, and business inquiry channels."
      heading="Privacy Policy"
      effectiveDate="August 2, 2025"
    >
      <LegalNote>
        These documents are provided as a strong starting point for the TiltShield website and
        should be reviewed by a qualified attorney before publication.
      </LegalNote>

      <section>
        <LegalH2>Introduction</LegalH2>
        <LegalP>
          TiltShield respects your privacy and is committed to protecting the information you
          choose to share with us.
        </LegalP>
        <LegalP>
          This Privacy Policy explains how TiltShield LLC (“TiltShield,” “we,” “us,” or “our”)
          collects, uses, stores, and shares information through our website, located at{" "}
          <a href="https://www.tiltshieldusa.com" className="text-clinical underline-offset-2 hover:underline">
            https://www.tiltshieldusa.com
          </a>
          , and through related business inquiry or contact forms.
        </LegalP>
        <LegalP>
          TiltShield is a U.S.-based B2B product website focused on providing information about
          reusable, flexible, stretch-fit covers for tilt trucks, waste containers, and
          institutional cleanup environments. Our website is primarily informational and may allow
          visitors to request information, pricing, product details, or business follow-up.
        </LegalP>
        <LegalP>By using our website, you agree to the practices described in this Privacy Policy.</LegalP>
      </section>

      <section>
        <LegalH2>Information We Collect</LegalH2>
        <LegalP>
          We may collect personal and business information that you voluntarily provide to us,
          including:
        </LegalP>
        <LegalUl
          items={[
            "Name",
            "Email address",
            "Phone number",
            "Company or organization name",
            "Job title or role",
            "Message, inquiry, or request details",
            "Any other information you choose to include in a contact form, quote request, or email",
          ]}
        />
        <LegalP>
          We may also collect basic technical and usage information when you visit our website,
          including:
        </LegalP>
        <LegalUl
          items={[
            "IP address",
            "Browser type",
            "Device type",
            "Operating system",
            "Pages viewed",
            "Time spent on the website",
            "Referring website or source",
            "General location information based on IP address",
            "Cookie or analytics-related data, if analytics tools are used",
          ]}
        />
        <LegalP>
          We do not intentionally collect medical records, protected health information, payment
          information, or account login credentials through the website.
        </LegalP>
      </section>

      <section>
        <LegalH2>How We Collect Information</LegalH2>
        <LegalP>We may collect information in the following ways:</LegalP>
        <LegalUl
          items={[
            "When you submit a contact form or pricing inquiry",
            "When you email or call us directly",
            "When you request product information or business follow-up",
            "When you interact with our website",
            "Through cookies, analytics tools, or similar technologies, if enabled",
          ]}
        />
        <LegalP>
          You may choose not to provide certain information, but doing so may limit our ability to
          respond to your inquiry or provide requested information.
        </LegalP>
      </section>

      <section>
        <LegalH2>How We Use Information</LegalH2>
        <LegalP>We may use the information we collect to:</LegalP>
        <LegalUl
          items={[
            "Respond to inquiries, quote requests, or product questions",
            "Provide information about TiltShield products and potential business use cases",
            "Communicate with facility managers, purchasing teams, administrators, or other business contacts",
            "Improve our website, messaging, and user experience",
            "Understand how visitors interact with our website",
            "Maintain website security and prevent misuse",
            "Follow up regarding potential business opportunities",
            "Maintain internal records",
            "Comply with applicable legal obligations",
          ]}
        />
        <LegalP>
          TiltShield does not use website-submitted information to provide medical, legal,
          regulatory, safety, or compliance advice.
        </LegalP>
      </section>

      <section>
        <LegalH2>Cookies and Analytics</LegalH2>
        <LegalP>
          Our website may use cookies, analytics tools, pixels, or similar technologies to better
          understand website traffic and visitor behavior.
        </LegalP>
        <LegalP>
          These tools may collect information such as browser type, device information, IP
          address, pages visited, time on site, and referring sources.
        </LegalP>
        <LegalP>
          Cookies help us understand how visitors use the website and may help improve site
          performance, content, and lead-generation functionality.
        </LegalP>
        <LegalP>
          You can typically control or disable cookies through your browser settings. Please note
          that disabling cookies may affect certain website features or functionality.
        </LegalP>
      </section>

      <section>
        <LegalH2>How We Share Information</LegalH2>
        <LegalP>We do not sell personal information.</LegalP>
        <LegalP>We may share information in limited circumstances, including:</LegalP>
        <LegalUl
          items={[
            "With service providers who help operate our website or business",
            "With vendors who support hosting, analytics, email delivery, CRM, form submissions, or business communications",
            "When needed to respond to your inquiry or fulfill your request",
            "When required by law, regulation, subpoena, or legal process",
            "To protect our rights, business, property, users, or website security",
            "In connection with a business transaction, such as a merger, acquisition, financing, reorganization, or sale of assets",
          ]}
        />
        <LegalP>
          We do not authorize service providers to use personal information for purposes unrelated
          to providing services to TiltShield.
        </LegalP>
      </section>

      <section>
        <LegalH2>Service Providers</LegalH2>
        <LegalP>
          We may use third-party service providers to help us operate the website and manage
          business communications.
        </LegalP>
        <LegalP>
          These providers may include website hosting platforms, analytics providers, email
          systems, CRM tools, form management tools, and other operational vendors.
        </LegalP>
        <LegalP>
          These service providers may access information only as needed to perform services on our
          behalf.
        </LegalP>
      </section>

      <section>
        <LegalH2>Data Security</LegalH2>
        <LegalP>
          We use reasonable administrative, technical, and organizational safeguards designed to
          protect information submitted through our website.
        </LegalP>
        <LegalP>
          However, no website, internet transmission, or electronic storage system is completely
          secure. We cannot guarantee absolute security of information submitted through the
          website.
        </LegalP>
        <LegalP>
          You should avoid submitting sensitive medical, financial, legal, or confidential
          information through general website forms unless specifically requested through a secure
          channel.
        </LegalP>
      </section>

      <section>
        <LegalH2>Data Retention</LegalH2>
        <LegalP>
          We may retain personal and business information for as long as reasonably necessary to:
        </LegalP>
        <LegalUl
          items={[
            "Respond to inquiries",
            "Manage business relationships",
            "Maintain records",
            "Improve our website and services",
            "Comply with legal obligations",
            "Resolve disputes",
            "Enforce agreements",
          ]}
        />
        <LegalP>
          Retention periods may vary depending on the type of information and the reason it was
          collected.
        </LegalP>
      </section>

      <section>
        <LegalH2>Your Privacy Choices</LegalH2>
        <LegalP>
          You may contact us to request that we update, correct, or delete certain personal
          information you have provided to us.
        </LegalP>
        <LegalP>You may also request that we stop sending non-essential communications.</LegalP>
        <LegalP>
          Please note that we may retain certain information when necessary for legitimate
          business purposes, legal compliance, recordkeeping, dispute resolution, or security.
        </LegalP>
        <LegalP>To make a privacy-related request, contact us at:</LegalP>
        <LegalP>
          <strong className="font-semibold text-navy">Email:</strong>{" "}
          <a href="mailto:info@tiltshield.com" className="text-clinical underline-offset-2 hover:underline">
            info@tiltshield.com
          </a>
          <br />
          <strong className="font-semibold text-navy">Phone:</strong>{" "}
          <a href="tel:+18007659008" className="text-clinical underline-offset-2 hover:underline">
            (800) 765-9008
          </a>
        </LegalP>
      </section>

      <section>
        <LegalH2>California Privacy Rights</LegalH2>
        <LegalP>
          If you are a California resident, you may have certain privacy rights under applicable
          California privacy laws, depending on how those laws apply to our business.
        </LegalP>
        <LegalP>
          These rights may include the ability to request information about certain personal
          information we collect, use, disclose, or retain, as well as the ability to request
          deletion or correction of certain personal information.
        </LegalP>
        <LegalP>TiltShield does not sell personal information.</LegalP>
        <LegalP>
          Because privacy laws may apply differently depending on business size, data practices,
          and other factors, California residents may contact us at{" "}
          <a href="mailto:info@tiltshield.com" className="text-clinical underline-offset-2 hover:underline">
            info@tiltshield.com
          </a>{" "}
          with any privacy-related request or question.
        </LegalP>
        <LegalP>We will review and respond to applicable requests in accordance with applicable law.</LegalP>
      </section>

      <section>
        <LegalH2>Children’s Privacy</LegalH2>
        <LegalP>The TiltShield website is intended for business and professional audiences.</LegalP>
        <LegalP>
          We do not knowingly collect personal information from children under the age of 13. If
          we learn that we have collected personal information from a child under 13, we will take
          reasonable steps to delete that information.
        </LegalP>
      </section>

      <section>
        <LegalH2>Links to Other Websites</LegalH2>
        <LegalP>Our website may contain links to third-party websites or resources.</LegalP>
        <LegalP>
          We are not responsible for the privacy practices, content, policies, or security of
          third-party websites. We encourage visitors to review the privacy policies of any
          third-party websites they visit.
        </LegalP>
      </section>

      <section>
        <LegalH2>Changes to This Privacy Policy</LegalH2>
        <LegalP>We may update this Privacy Policy from time to time.</LegalP>
        <LegalP>
          When we make changes, we may update the “Effective Date” at the top of this page. Your
          continued use of the website after changes are posted means you acknowledge the updated
          Privacy Policy.
        </LegalP>
      </section>

      <section>
        <LegalH2>Contact Us</LegalH2>
        <LegalP>
          If you have questions about this Privacy Policy or our privacy practices, please contact
          us:
        </LegalP>
        <LegalContactBlock />
      </section>
    </LegalLayout>
  );
}
