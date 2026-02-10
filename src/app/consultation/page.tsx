import type { Metadata } from 'next';
import { CheckCircle, Home as HomeIcon, Ruler, Lightbulb, Calculator, ClipboardCheck, CalendarCheck, Smile, PoundSterling, MessageCircle, Phone, Check, Info } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ConsultationForm } from '@/components/forms/ConsultationForm';
import { siteInfo } from '@/data/site';

export const metadata: Metadata = {
  title: 'Free Consultation - Book Your Home Assessment',
  description:
    'Book your free consultation with K16 Contracts. No-obligation home assessment for extensions and renovations. Expert advice from trusted builders.',
  openGraph: {
    title: 'Free Consultation | K16 Contracts',
    description: 'Book your free, no-obligation home assessment.',
    url: '/consultation',
    images: [{ url: '/images/designing-a-bedroom.jpg', width: 1200, height: 630, alt: 'Book a Free Consultation with K16 Contracts' }],
  },
};

const inclusions = [
  { icon: <HomeIcon size={40} />, title: 'Property Assessment', desc: "We'll evaluate your property's potential and discuss the best options for your space and budget" },
  { icon: <Ruler size={40} />, title: 'Measurements & Planning', desc: "Initial measurements and rough sketches to visualize your project's possibilities" },
  { icon: <Lightbulb size={40} />, title: 'Design Ideas', desc: 'Creative suggestions based on our 25+ years of experience with similar projects' },
  { icon: <Calculator size={40} />, title: 'Budget Discussion', desc: 'Honest advice about costs and how to maximize value within your budget' },
  { icon: <ClipboardCheck size={40} />, title: 'Regulations Advice', desc: 'Guidance on planning permissions and building regulations requirements' },
  { icon: <CalendarCheck size={40} />, title: 'Timeline Estimates', desc: 'Realistic timeframes for your project from start to completion' },
];

export default function ConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[60vh] items-center pt-28 pb-20 text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(44, 82, 130, 0.9), rgba(26, 54, 93, 0.9)), url('/images/british-home.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Book Your Free Consultation</h1>
            <p className="mb-6 text-lg font-light leading-relaxed">
              Take the first step towards your dream home with a no-obligation assessment from K16 Contracts
            </p>
            <div className="flex flex-wrap gap-4">
              {['100% Free - No Hidden Costs', 'No Obligation to Proceed', 'Expert Advice & Guidance'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <Container>
          <SectionHeading title="What's Included in Your Free Consultation" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4 text-primary">{item.icon}</div>
                <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>
                <p className="text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Booking Form */}
      <section className="bg-light py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Schedule Your Free Consultation</h2>
              <p className="mb-8 text-center text-gray">
                Fill in the form below and we&apos;ll call you within 24 hours to arrange a convenient time for your consultation.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose K16 */}
      <section className="py-20">
        <Container>
          <SectionHeading title="Why Choose K16 for Your Consultation?" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: <Smile size={28} />, title: 'No Pressure', desc: 'We never use high-pressure sales tactics. Take your time to consider our quote.' },
              { icon: <PoundSterling size={28} />, title: 'Honest Pricing', desc: 'We provide realistic quotes based on actual costs, not inflated estimates.' },
              { icon: <MessageCircle size={28} />, title: 'Expert Advice', desc: 'Benefit from 25+ years of experience in home extensions and renovations.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 text-primary">{item.icon}</div>
                <div>
                  <h5 className="mb-1 font-semibold">{item.title}</h5>
                  <p className="text-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section className="bg-light py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">How to Prepare for Your Consultation</h2>
            <div className="rounded-xl bg-white p-8">
              <h4 className="mb-4 text-lg font-semibold">To make the most of your consultation, consider preparing:</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Ideas & Inspiration:', desc: 'Collect images or examples of styles you like' },
                  { label: 'Budget Range:', desc: "Have a rough idea of what you're comfortable investing" },
                  { label: 'Timeline:', desc: "Consider when you'd ideally like the work completed" },
                  { label: 'Questions:', desc: 'Write down any specific concerns or requirements' },
                  { label: 'Access:', desc: 'Ensure we can see all relevant areas of your property' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check size={18} className="mt-1 shrink-0 text-primary" />
                    <span><strong>{item.label}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <Info size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-gray">
                  <strong>Note:</strong> Don&apos;t worry if you&apos;re not sure about everything - we&apos;re here to guide you through the process!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Phone CTA */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prefer to Call?</h2>
            <p className="mb-6 text-lg opacity-80">Speak to our friendly team directly to book your consultation</p>
            <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-3 text-3xl font-bold text-white no-underline">
              <Phone size={32} />
              {siteInfo.phone}
            </a>
            <p className="mt-4 opacity-80">{siteInfo.hours.weekdays} | {siteInfo.hours.saturday}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
