import type { Metadata } from 'next';
import { Clock, Calendar, ShieldCheck, Award, Check, Phone, ClipboardCheck, Hammer, Home, Info, Heart, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PageHeader } from '@/components/sections/PageHeader';
import { FAQSection } from '@/components/interactive/FAQSection';
import { processSteps, timelineSteps } from '@/data/process-steps';
import { processFaqs } from '@/data/faqs';
import { generateFAQSchema } from '@/lib/schema';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Process - Transparent Building Process',
  description:
    'K16 Contracts Process - From consultation to completion, discover our transparent, professional approach to home extensions and renovations.',
  openGraph: {
    title: 'Our Process | K16 Contracts',
    description: 'A transparent, professional approach from consultation to completion.',
    url: '/process',
    images: [{ url: '/images/home-extension-work.jpg', width: 1200, height: 630, alt: 'K16 Contracts Building Process' }],
  },
  alternates: {
    canonical: '/process',
  },
};

const sidebarIconMap: Record<string, React.ReactNode> = {
  Clock: <Clock size={20} className="text-primary" />,
  Calendar: <Calendar size={20} className="text-primary" />,
  ShieldCheck: <ShieldCheck size={20} className="text-primary" />,
  Award: <Award size={20} className="text-primary" />,
};

const timelineIconMap: Record<string, React.ReactNode> = {
  Phone: <Phone size={28} />,
  ClipboardCheck: <ClipboardCheck size={28} />,
  Hammer: <Hammer size={28} />,
  HouseCheck: <Home size={28} />,
};

export default function ProcessPage() {
  const faqSchema = generateFAQSchema(processFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        title="Our Process"
        subtitle="A transparent, professional approach from consultation to completion"
      />

      {/* Process Introduction */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Building Your Dream, Step by Step</h2>
              <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                At K16 Contracts, we believe in complete transparency. You&apos;ll know exactly what to expect at every stage of your project.
              </p>
              <p className="mb-6 text-gray">
                Our proven process has been refined over 25 years to ensure minimal disruption to your daily life while delivering exceptional results on time and on budget.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Clear Communication:', desc: 'Regular updates throughout your project' },
                  { label: 'Fixed Timeline:', desc: 'We stick to agreed schedules' },
                  { label: 'Quality Control:', desc: 'Regular inspections ensure high standards' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <CheckCircle size={24} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <strong>{item.label}</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-light p-6">
              <h3 className="mb-4 text-xl font-bold">What Makes Our Process Different?</h3>
              <ul className="space-y-3">
                {[
                  'No hidden costs or surprise charges',
                  'Dedicated project manager for your build',
                  'Clean and tidy work site maintained daily',
                  'Flexible payment options available',
                  'Full documentation and warranties provided',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Process Steps */}
      <section className="bg-light py-20">
        <Container>
          <SectionHeading title="Your Journey With K16 Contracts" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`grid items-start gap-8 lg:grid-cols-12 ${index < processSteps.length - 1 ? 'border-b border-gray-light pb-16' : ''}`}
              >
                {/* Step number */}
                <div className="flex justify-center lg:col-span-2">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                  <p className="mb-4 text-lg font-light text-gray">{step.subtitle}</p>
                  <p className="mb-4 text-gray">{step.description}</p>
                  <h5 className="mb-3 font-semibold">
                    {step.number === 1 && 'What happens during consultation:'}
                    {step.number === 2 && 'Your quote includes:'}
                    {step.number === 3 && 'During construction:'}
                    {step.number === 4 && 'Post-completion includes:'}
                  </h5>
                  <ul className="list-inside list-disc space-y-1 text-gray">
                    {step.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h5 className="mb-4 flex items-center gap-2 font-semibold text-primary">
                      {sidebarIconMap[step.sidebar.icon]}
                      {step.sidebar.title}
                    </h5>
                    {step.number <= 2 && <p className="mb-3 font-medium">What {step.number === 1 ? 'to prepare' : 'we provide'}:</p>}
                    <ul className="space-y-2">
                      {step.sidebar.items.map((item) => (
                        <li key={item.label} className="flex items-start gap-2">
                          {item.icon === 'check' ? (
                            <Check size={16} className="mt-1 shrink-0 text-success" />
                          ) : (
                            <Check size={16} className="mt-1 shrink-0 text-success" />
                          )}
                          <span className={item.bold ? '' : ''}>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                    {step.sidebar.note && (
                      <div className="mt-4 rounded-lg bg-blue-50 p-3">
                        <p className="flex items-center gap-2 text-sm text-gray">
                          {step.number === 4 ? <Heart size={14} className="text-danger" /> : <Info size={14} className="text-primary" />}
                          {step.sidebar.note}
                        </p>
                      </div>
                    )}
                    {step.sidebar.cta && (
                      <Button href={step.sidebar.cta.href} variant="cta" size="sm" className="mt-4">
                        {step.sidebar.cta.label}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Visual */}
      <section className="py-20">
        <Container>
          <SectionHeading title="Typical Project Timeline" />
          <div className="grid gap-8 md:grid-cols-4">
            {timelineSteps.map((step) => (
              <div key={step.week} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  {timelineIconMap[step.icon]}
                </div>
                <h4 className="mb-2 text-lg font-semibold">{step.week}</h4>
                <p className="text-gray">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray">*Timeline varies based on project size and complexity</p>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-light py-20">
        <Container>
          <SectionHeading title="Frequently Asked Questions" />
          <FAQSection faqs={processFaqs} columns={2} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
            <p className="mb-8 text-lg opacity-80">Experience the K16 difference - professional, transparent, and reliable</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/consultation" variant="light" size="lg">Book Free Consultation</Button>
              <Button href="/contact" variant="outline-light" size="lg">Ask a Question</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
