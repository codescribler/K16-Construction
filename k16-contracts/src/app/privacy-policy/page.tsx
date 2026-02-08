import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'K16 Contracts Ltd privacy policy. How we collect, use, and protect your personal data under UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal data"
      />

      <section className="py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-gray">
              <strong>Last updated:</strong> February 2026
            </p>

            <h2 className="mt-10 text-2xl font-bold">1. Who We Are</h2>
            <p>
              K16 Contracts Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
              construction company registered in England and Wales (Company No. 5879566, VAT No.
              155 7323 07). Our registered address is 8 Pilgrim Close, Park Street, St. Albans,
              AL2 2JD.
            </p>
            <p>
              We are the data controller responsible for your personal data. If you have any
              questions about this policy or how we handle your data, please contact us at{' '}
              <a href="mailto:kieran@k16contracts.co.uk" className="text-primary hover:underline">
                kieran@k16contracts.co.uk
              </a>{' '}
              or call us on 01727 872611.
            </p>

            <h2 className="mt-10 text-2xl font-bold">2. What Data We Collect</h2>
            <p>We may collect the following personal data when you interact with our website or services:</p>
            <h3 className="mt-6 text-xl font-semibold">Information you provide to us</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Contact form submissions:</strong> first name, last name, email address,
                phone number, project type, timeline, how you heard about us, and your project
                description.
              </li>
              <li>
                <strong>Consultation booking form:</strong> first name, last name, email address,
                phone number, property address, project type, budget range, preferred appointment
                days and times, and any additional information you provide.
              </li>
              <li>
                <strong>Email and phone enquiries:</strong> any personal information you share when
                contacting us directly.
              </li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold">Information collected automatically</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Analytics data:</strong> we use Google Analytics (GA4) to collect anonymised
                usage data including pages visited, time on site, referring website, device type,
                browser type, and approximate geographic location. This data is used to understand
                how visitors use our website and to improve our services.
              </li>
              <li>
                <strong>Technical data:</strong> IP address (anonymised by Google Analytics),
                browser type and version, operating system, and device information.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold">3. How We Use Your Data</h2>
            <p>We use the personal data we collect for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to your enquiries and provide quotes for construction work</li>
              <li>To schedule and manage consultation appointments</li>
              <li>To communicate with you about your project</li>
              <li>To manage our customer relationships via our CRM system</li>
              <li>To improve our website and services based on usage patterns</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold">4. Legal Basis for Processing</h2>
            <p>Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following legal bases:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Consent:</strong> when you submit a form on our website, you consent to us
                processing your data for the purpose stated. You can withdraw consent at any time
                by contacting us.
              </li>
              <li>
                <strong>Legitimate interests:</strong> we may process your data where it is in our
                legitimate business interests to do so, such as improving our services and website,
                provided this does not override your rights.
              </li>
              <li>
                <strong>Contractual necessity:</strong> where we need to process your data to
                perform a contract with you or take steps at your request before entering into a
                contract.
              </li>
              <li>
                <strong>Legal obligation:</strong> where we need to process your data to comply
                with a legal requirement.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold">5. How We Store and Protect Your Data</h2>
            <p>
              Personal data submitted through our website forms is transmitted securely via
              encrypted connections (HTTPS) and stored in our customer relationship management
              (CRM) system. Access to this data is restricted to authorised personnel only.
            </p>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes
              for which it was collected, typically for the duration of any business relationship
              plus six years in line with HMRC requirements for construction industry records.
              After this period, your data is securely deleted.
            </p>

            <h2 className="mt-10 text-2xl font-bold">6. Cookies</h2>
            <p>Our website uses the following types of cookies:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Essential cookies:</strong> required for the website to function properly,
                such as remembering form submissions and session management. These cannot be
                disabled.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Google Analytics uses cookies to collect
                anonymised data about how visitors use our website. These cookies help us
                understand traffic patterns and improve our site. You can opt out of Google
                Analytics by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
            </ul>
            <p>
              We do not use any marketing, advertising, or third-party tracking cookies.
            </p>

            <h2 className="mt-10 text-2xl font-bold">7. Third-Party Services</h2>
            <p>We share your data with the following third-party service providers who process data on our behalf:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Google Analytics (Google LLC):</strong> website analytics. Data may be
                transferred to the US under Google&apos;s data processing terms. See{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>CRM provider:</strong> to store and manage customer enquiries and project
                information.
              </li>
              <li>
                <strong>Email service provider:</strong> to deliver form submission notifications
                to our team.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal data to any third parties for marketing
              purposes.
            </p>

            <h2 className="mt-10 text-2xl font-bold">8. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Right of access:</strong> you can request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Right to rectification:</strong> you can ask us to correct any inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Right to erasure:</strong> you can ask us to delete your personal data
                where there is no compelling reason for us to continue processing it.
              </li>
              <li>
                <strong>Right to restrict processing:</strong> you can ask us to limit how we use
                your data.
              </li>
              <li>
                <strong>Right to data portability:</strong> you can request that we transfer your
                data to another organisation in a structured, commonly used format.
              </li>
              <li>
                <strong>Right to object:</strong> you can object to processing based on legitimate
                interests.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> where processing is based on consent,
                you can withdraw it at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:kieran@k16contracts.co.uk" className="text-primary hover:underline">
                kieran@k16contracts.co.uk
              </a>
              . We will respond to your request within one month.
            </p>
            <p>
              If you are not satisfied with how we handle your data, you have the right to lodge a
              complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ico.org.uk
              </a>
              .
            </p>

            <h2 className="mt-10 text-2xl font-bold">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated revision date. We encourage you to review this page
              periodically to stay informed about how we protect your data.
            </p>

            <h2 className="mt-10 text-2xl font-bold">10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or wish to exercise your data
              rights, please contact us:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li><strong>Email:</strong>{' '}
                <a href="mailto:kieran@k16contracts.co.uk" className="text-primary hover:underline">
                  kieran@k16contracts.co.uk
                </a>
              </li>
              <li><strong>Phone:</strong> 01727 872611</li>
              <li><strong>Post:</strong> K16 Contracts Ltd, 8 Pilgrim Close, Park Street, St. Albans, AL2 2JD</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
