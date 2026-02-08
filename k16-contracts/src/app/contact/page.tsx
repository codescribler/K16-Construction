import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/sections/PageHeader';
import { FAQSection } from '@/components/interactive/FAQSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactFaqs } from '@/data/faqs';
import { siteInfo } from '@/data/site';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Quote',
  description:
    'Contact K16 Contracts - Get in touch for quality home extensions and renovations. Free consultations available. Call 01727 872611.',
  openGraph: {
    title: 'Contact Us | K16 Contracts',
    description: 'Get in touch for quality home extensions and renovations.',
    url: '/contact',
    images: [{ url: '/images/british-home.jpg', width: 1200, height: 630, alt: 'Contact K16 Contracts' }],
  },
};

export default function ContactPage() {
  const faqSchema = generateFAQSchema(contactFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        title="Get In Touch"
        subtitle="Start your home transformation journey with a free consultation"
      />

      {/* Contact Information */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-md transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
              <Phone size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Call Us</h4>
              <p className="mb-2 text-gray">Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</p>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="text-xl font-semibold text-primary no-underline">
                {siteInfo.phone}
              </a>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-md transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
              <Mail size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Email Us</h4>
              <p className="mb-2 text-gray">We&apos;ll respond within<br />24 hours</p>
              <a href={`mailto:${siteInfo.email}`} className="text-primary no-underline">
                {siteInfo.email}
              </a>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-md transition-all duration-250 hover:-translate-y-1 hover:shadow-lg">
              <MapPin size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="mb-2 text-lg font-semibold">Visit Us</h4>
              <p className="mb-2 text-gray">{siteInfo.address.line1}<br />{siteInfo.address.city}, {siteInfo.address.postcode}</p>
              <span className="text-primary">Hertfordshire & Surrounding Areas</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="bg-light py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Send Us a Message</h2>
              <p className="mb-8 text-center text-gray">
                Have a question or ready to discuss your project? We&apos;d love to hear from you.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <Container>
          <SectionHeading title="What Happens Next?" />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { num: 1, title: 'Quick Response', desc: "We'll acknowledge your enquiry within 24 hours" },
              { num: 2, title: 'Initial Discussion', desc: "We'll call to understand your needs and answer questions" },
              { num: 3, title: 'Site Visit', desc: 'Arrange a free consultation at your property' },
              { num: 4, title: 'Detailed Quote', desc: 'Receive a comprehensive, no-obligation quote' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-light">
                  <span className="text-3xl font-bold text-primary">{step.num}</span>
                </div>
                <h5 className="mb-2 font-semibold">{step.title}</h5>
                <p className="text-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-light py-20">
        <Container>
          <SectionHeading title="Frequently Asked Questions" />
          <FAQSection faqs={contactFaqs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Home?</h2>
            <p className="mb-8 text-lg opacity-80">Don&apos;t let another day pass in an overcrowded home</p>
            <div className="mx-auto max-w-md rounded-xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Call Us Now</h3>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="text-3xl font-bold text-white no-underline">
                {siteInfo.phone}
              </a>
              <p className="mt-4 opacity-80">{siteInfo.hours.weekdays} | {siteInfo.hours.saturday}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
