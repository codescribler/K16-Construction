import Image from 'next/image';
import { CheckCircle, XCircle, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { servicesOverview } from '@/data/services';
import { homeTestimonials } from '@/data/testimonials';
import { processStepsPreview } from '@/data/process-steps';
import { siteInfo } from '@/data/site';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center pt-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(44, 82, 130, 0.9), rgba(26, 54, 93, 0.9)), url('/images/british-home.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.2]">
              Building Quality Homes for Growing Families Since 1998
            </h1>
            <p className="mb-4 text-lg font-light leading-relaxed md:text-xl">
              Transform your overcrowded house into a spacious family home with K16 Contracts. We&apos;re the reliable builders who deliver quality finishes on time, every time.
            </p>
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span>Family-Run Business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-success" />
                <span>Minimal Disruption</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation" variant="cta" size="lg">
                Get Free Consultation
              </Button>
              <Button href="/services" variant="outline-light" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem & Solution Section */}
      <section className="bg-light py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Feeling Overcrowded in Your Own Home?
              </h2>
              <p className="mb-8 text-lg font-light leading-relaxed text-gray">
                We understand the frustration of never having enough space, with belongings everywhere and family members always on top of each other.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Tired of Unreliable Quotes?', desc: 'Too many builders give vague estimates and hidden costs.' },
                  { title: 'Fed Up with Cowboy Builders?', desc: 'Poor workmanship costs more in stress, time, and money to fix.' },
                  { title: 'Worried About Disruption?', desc: "Building work shouldn't turn your life upside down." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <XCircle size={24} className="mt-0.5 shrink-0 text-danger" />
                    <div>
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-primary bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">The K16 Difference</h3>
              <div className="space-y-4">
                {[
                  { title: 'Transparent, Fixed Quotes', desc: 'Fully costed quotes with clear timelines. No surprises.' },
                  { title: 'Quality You Can Trust', desc: 'Family reputation built over 25 years of excellent work.' },
                  { title: 'Clean & Considerate', desc: 'We keep things tidy and minimize disruption to your daily life.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle size={24} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button href="/about" variant="primary" className="mt-6">
                Learn Why We&apos;re Different
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Transform Your Home, Transform Your Life"
            subtitle="Comprehensive building services tailored to growing families"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {servicesOverview.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process Preview */}
      <section className="bg-light py-20">
        <Container>
          <SectionHeading
            title="Simple, Transparent Process"
            subtitle="From consultation to completion, we keep you informed every step of the way"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {processStepsPreview.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h4 className="mb-2 text-lg font-semibold">{step.title}</h4>
                <p className="text-gray">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/process" variant="primary" size="lg">
              Learn About Our Process
            </Button>
          </div>
        </Container>
      </section>

      {/* Recent Projects Gallery */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Recent Projects"
            subtitle="See the quality and craftsmanship we bring to every home"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { src: '/images/british-home.jpg', alt: 'Traditional Home Extension', title: 'Traditional Family Extension', desc: 'Two-storey extension for growing family' },
              { src: '/images/envisioning-modern-kitchen.jpg', alt: 'Modern Kitchen', title: 'Modern Kitchen Transformation', desc: 'Complete kitchen renovation and extension' },
              { src: '/images/blue-bedroom.jpg', alt: 'Master Bedroom', title: 'Master Bedroom Suite', desc: 'Loft conversion with en-suite bathroom' },
            ].map((project) => (
              <a key={project.title} href="/projects" className="group relative block h-72 overflow-hidden rounded-xl cursor-pointer">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/85 to-transparent p-6 pt-8 text-white transition-transform duration-350 group-hover:translate-y-0 md:translate-y-full">
                  <h4 className="mb-1 text-lg font-semibold text-white">{project.title}</h4>
                  <p className="opacity-90">{project.desc}</p>
                </div>
                {/* Mobile: always show overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-8 text-white md:hidden">
                  <h4 className="mb-1 text-lg font-semibold text-white">{project.title}</h4>
                  <p className="opacity-90">{project.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/projects" variant="outline-primary" size="lg">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real families, real transformations, real satisfaction"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {homeTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} variant="dark" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/contact" variant="light" size="lg">
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-light to-white py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Home?</h2>
              <p className="mb-6 text-lg font-light leading-relaxed text-gray">
                Get a free, no-obligation consultation and discover how we can help your home grow with your family.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Free home assessment', 'Detailed quote', 'No obligation'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-gray">
                    <Check size={16} className="text-success" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button href="/consultation" variant="cta" size="lg" className="mb-4 w-full sm:w-auto">
                Book Free Consultation
              </Button>
              <div>
                <p className="mb-1 text-gray">Or call us directly:</p>
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="text-2xl font-bold text-primary no-underline">
                  {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
