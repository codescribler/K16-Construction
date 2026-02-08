import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'K16 Contracts Ltd terms of service. Terms and conditions governing the use of our website and construction services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms and conditions governing the use of our website and services"
      />

      <section className="py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-gray">
              <strong>Last updated:</strong> February 2026
            </p>

            <h2 className="mt-10 text-2xl font-bold">1. Introduction</h2>
            <p>
              These terms of service (&ldquo;Terms&rdquo;) govern your use of the K16 Contracts
              Ltd website at k16contracts.co.uk (&ldquo;the Website&rdquo;) and any construction
              services provided by K16 Contracts Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;). By using our Website, you agree to be bound by these Terms. If
              you do not agree, please do not use the Website.
            </p>
            <p>
              K16 Contracts Ltd is registered in England and Wales (Company No. 5879566, VAT No.
              155 7323 07). Our registered address is 8 Pilgrim Close, Park Street, St. Albans,
              AL2 2JD.
            </p>

            <h2 className="mt-10 text-2xl font-bold">2. Use of the Website</h2>
            <p>
              The content on this Website is provided for general information purposes only. It is
              not intended to constitute professional advice and should not be relied upon as such.
              While we make every effort to keep the information up to date and accurate, we make
              no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, or reliability of the information provided.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use the Website in any way that is unlawful, fraudulent, or harmful</li>
              <li>
                Attempt to gain unauthorised access to any part of the Website or its servers
              </li>
              <li>
                Use the Website to transmit unsolicited commercial communications (spam)
              </li>
              <li>
                Reproduce, duplicate, or copy any content from the Website without our written
                permission
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold">3. Construction Services</h2>
            <h3 className="mt-6 text-xl font-semibold">Quotations</h3>
            <p>
              All quotations provided by K16 Contracts Ltd are estimates based on the information
              available at the time. Quotations are valid for 30 days from the date of issue unless
              otherwise stated. We reserve the right to amend a quotation if the scope of work
              changes or unforeseen circumstances arise.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Contracts</h3>
            <p>
              A binding contract is formed only when both parties have signed a written agreement
              or when we have accepted your written instruction to proceed. Verbal agreements are
              not binding until confirmed in writing. All construction contracts are subject to
              separate terms and conditions which will be provided and agreed upon before work
              commences.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Payment terms</h3>
            <p>
              Payment terms will be agreed in writing as part of the project contract. Typically,
              a deposit is required before work commences, with staged payments throughout the
              project and a final payment upon completion. Late payments may incur interest at the
              rate of 4% above the Bank of England base rate, in accordance with the Late Payment
              of Commercial Debts (Interest) Act 1998.
            </p>

            <h3 className="mt-6 text-xl font-semibold">Project timelines</h3>
            <p>
              We endeavour to complete all projects within the agreed timeframe. However, timelines
              may be affected by factors beyond our control, including adverse weather conditions,
              supply chain delays, changes to the scope of work requested by the client, or issues
              discovered during construction (such as structural problems). We will communicate any
              anticipated delays promptly.
            </p>

            <h2 className="mt-10 text-2xl font-bold">4. Guarantees and Warranties</h2>
            <p>
              All work carried out by K16 Contracts Ltd is completed to a high standard and in
              accordance with current UK building regulations. We offer a defects liability period
              as detailed in your project contract, during which we will rectify any defects
              arising from our workmanship at no additional cost.
            </p>
            <p>
              Guarantees on materials are subject to the manufacturer&apos;s warranty terms. We
              will pass on all relevant manufacturer guarantees and documentation upon project
              completion.
            </p>

            <h2 className="mt-10 text-2xl font-bold">5. Cancellation and Variations</h2>
            <p>
              If you wish to cancel or make changes to agreed work, you must notify us in writing
              as soon as possible. Cancellation terms will be set out in your project contract.
              Where work has already commenced, you will be liable for costs incurred up to the
              point of cancellation, including materials purchased and work completed.
            </p>
            <p>
              Variations to the scope of work must be agreed in writing. Additional work may
              affect the project timeline and cost, and we will provide a revised quotation before
              proceeding.
            </p>

            <h2 className="mt-10 text-2xl font-bold">6. Intellectual Property</h2>
            <p>
              All content on this Website, including text, images, logos, and design, is the
              property of K16 Contracts Ltd or its licensors and is protected by UK copyright law.
              You may not reproduce, distribute, or use any content from this Website without our
              prior written consent.
            </p>
            <p>
              Project photographs displayed on our Website may depict clients&apos; properties.
              These images are used with the permission of the property owners and remain the
              copyright of K16 Contracts Ltd.
            </p>

            <h2 className="mt-10 text-2xl font-bold">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, K16 Contracts Ltd shall not be liable for
              any indirect, incidental, or consequential losses arising from your use of the
              Website or reliance on any information provided on it.
            </p>
            <p>
              Nothing in these Terms excludes or limits our liability for death or personal injury
              caused by our negligence, fraud or fraudulent misrepresentation, or any other
              liability that cannot be excluded or limited by English law.
            </p>
            <p>
              Our liability in respect of construction services is governed by the separate terms
              and conditions set out in your project contract.
            </p>

            <h2 className="mt-10 text-2xl font-bold">8. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. These links are provided for
              your convenience only. We have no control over the content or availability of
              third-party sites and accept no responsibility for them or for any loss or damage
              that may arise from your use of them.
            </p>

            <h2 className="mt-10 text-2xl font-bold">9. Privacy</h2>
            <p>
              Your use of the Website is also governed by our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              , which explains how we collect, use, and protect your personal data.
            </p>

            <h2 className="mt-10 text-2xl font-bold">10. Dispute Resolution</h2>
            <p>
              If a dispute arises in relation to our services, we encourage you to contact us
              first so that we can attempt to resolve the matter directly. If we are unable to
              reach a resolution, the dispute may be referred to mediation or, ultimately, to the
              courts of England and Wales.
            </p>

            <h2 className="mt-10 text-2xl font-bold">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Any changes will be posted
              on this page with an updated revision date. Your continued use of the Website after
              changes are posted constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="mt-10 text-2xl font-bold">12. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and
              Wales. Any disputes arising from these Terms or your use of the Website shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="mt-10 text-2xl font-bold">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-1 pl-0">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:kieran@k16contracts.co.uk" className="text-primary hover:underline">
                  kieran@k16contracts.co.uk
                </a>
              </li>
              <li><strong>Phone:</strong> 01727 872611</li>
              <li>
                <strong>Post:</strong> K16 Contracts Ltd, 8 Pilgrim Close, Park Street, St. Albans,
                AL2 2JD
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
