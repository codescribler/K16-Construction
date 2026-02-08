import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Check, Home, Hammer, PaintBucket, Building2, Award, ShieldCheck, Clock, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { PageHeader } from '@/components/sections/PageHeader';
import { serviceDetails, additionalServices, whyChooseUs } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services - Home Extensions & Renovations',
  description:
    'K16 Contracts Services - Home extensions, kitchen renovations, bathroom installations, and more. Quality builders for growing families.',
  openGraph: {
    title: 'Our Services | K16 Contracts',
    description: 'Home extensions, kitchen renovations, bathroom installations, and more.',
    url: '/services',
    images: [{ url: '/images/home-extension-work.jpg', width: 1200, height: 630, alt: 'K16 Contracts Home Extension Services' }],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={40} />,
  Hammer: <Hammer size={40} />,
  PaintBucket: <PaintBucket size={40} />,
  Building2: <Building2 size={40} />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive building solutions designed to transform your house into the perfect family home"
        backgroundImage="/images/home-extension-work.jpg"
      />

      {/* Services Overview */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Building Dreams, Creating Homes</h2>
              <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                With over 25 years of experience, K16 Contracts specializes in helping growing families create the space they need to thrive.
              </p>
              <p className="mb-6 text-gray">
                Every project we undertake is approached with the same dedication to quality, reliability, and minimal disruption that has made us the trusted choice for families across the region.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Free Consultation:', desc: 'Every project starts with understanding your needs' },
                  { label: 'Fixed Pricing:', desc: 'No hidden costs or surprise charges' },
                  { label: 'Quality Guarantee:', desc: 'Built to last with premium materials' },
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
            <div>
              <Image
                src="/images/british-home.jpg"
                alt="Quality Home Construction"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Home Extensions */}
      <section id="extensions" className="bg-light py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image src="/images/home-extension-work.jpg" alt="Home Extension Project" width={600} height={400} className="rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Home Extensions</h2>
              <p className="mb-2 text-lg font-light text-gray">Create the space your growing family needs without the stress of moving</p>
              <p className="mb-6 text-gray">
                Whether you need an extra bedroom for a new arrival, a larger kitchen for family gatherings, or a home office for remote work, our extensions are designed to seamlessly blend with your existing property while maximizing space and value.
              </p>
              <h4 className="mb-3 text-lg font-semibold">Extension Types We Offer:</h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Single-storey rear extensions', 'Double-storey extensions', 'Side return extensions', 'Wrap-around extensions', 'Loft conversions', 'Garage conversions', 'Garden rooms', 'Conservatories'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-white p-4">
                <h5 className="mb-2 font-semibold">Benefits of Choosing K16 for Extensions:</h5>
                <ul className="list-inside list-disc space-y-1 text-gray">
                  <li>Structural calculations and planning support included</li>
                  <li>Building regulations compliance guaranteed</li>
                  <li>Minimal disruption to your daily life</li>
                  <li>Increases property value significantly</li>
                </ul>
              </div>
              <Button href="/consultation" variant="cta" size="lg" className="mt-6">
                Get Your Free Extension Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Kitchen Renovations */}
      <section id="kitchens" className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Kitchen Renovations</h2>
              <p className="mb-2 text-lg font-light text-gray">Transform the heart of your home into a stunning, functional space</p>
              <p className="mb-6 text-gray">
                The kitchen is where families come together. We create beautiful, practical kitchens that work for busy family life - from morning rushes to dinner parties, homework sessions to midnight snacks.
              </p>
              <h4 className="mb-3 text-lg font-semibold">Our Kitchen Services Include:</h4>
              <ul className="mb-6 space-y-2">
                {['Complete kitchen redesign and planning', 'Supply and fit quality units and worktops', 'Plumbing and electrical work', 'Tiling and flooring', 'Kitchen extensions for more space', 'Island and breakfast bar installations'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-light p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">2-3 Weeks</h3>
                  <p className="text-sm text-gray">Average completion time</p>
                </div>
                <div className="rounded-lg bg-light p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">10 Year</h3>
                  <p className="text-sm text-gray">Workmanship guarantee</p>
                </div>
              </div>
              <Button href="/consultation" variant="outline-primary" size="lg" className="mt-6">
                Get Your Free Quote
              </Button>
            </div>
            <div className="space-y-4">
              <Image src="/images/envisioning-kitchen-makeover.jpg" alt="Kitchen Makeover" width={600} height={300} className="rounded-xl shadow-lg" />
              <Image src="/images/envisioning-modern-kitchen.jpg" alt="Modern Kitchen" width={600} height={300} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </Container>
      </section>

      {/* Bathroom Installations */}
      <section id="bathrooms" className="bg-light py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 space-y-4">
              <Image src="/images/bathroom.jpg" alt="Luxury Bathroom" width={600} height={300} className="rounded-xl shadow-lg" />
              <Image src="/images/installing-a-bathroom.jpg" alt="Bathroom Installation" width={600} height={300} className="rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Bathroom Installations</h2>
              <p className="mb-2 text-lg font-light text-gray">Create beautiful, practical bathrooms for the whole family</p>
              <p className="mb-6 text-gray">
                From family bathrooms that handle the morning rush to luxurious en-suites for relaxation, we design and install bathrooms that combine style with practicality.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h5 className="mb-2 font-semibold">Design & Planning</h5>
                  <ul className="space-y-1 text-gray">
                    <li>3D design service</li>
                    <li>Space optimization</li>
                    <li>Style consultation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold">Installation Services</h5>
                  <ul className="space-y-1 text-gray">
                    <li>Full plumbing work</li>
                    <li>Tiling and flooring</li>
                    <li>Electrical and lighting</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-white p-6">
                <h5 className="mb-4 font-semibold">Popular Bathroom Projects:</h5>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Family Bathrooms', desc: 'Durable, easy-clean surfaces with plenty of storage' },
                    { title: 'En-Suite Bathrooms', desc: 'Luxury finishes and space-saving solutions' },
                    { title: 'Wet Rooms', desc: 'Modern, accessible, and easy to maintain' },
                    { title: 'Cloakroom/WC', desc: 'Maximize small spaces with clever design' },
                  ].map((item) => (
                    <div key={item.title}>
                      <strong>{item.title}</strong>
                      <p className="text-sm text-gray">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button href="/consultation" variant="cta" size="lg" className="mt-6">
                Plan Your Bathroom Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Planning, Design & Build */}
      <section id="planning" className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-3">Full Service</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Planning, Design & Build</h2>
              <p className="mb-2 text-lg font-light text-gray">We guide you from the initial idea through to completion</p>
              <p className="mb-4 text-gray">
                At K16 we are highly experienced in all elements of the three project stages and pride ourselves on our knowledge of the planning requirements necessary. We endeavour to guide our clients from the initial stages of consulting with architects, through to applying for local authority approval, and eventually through to completion of the building project.
              </p>
              <p className="mb-6 text-gray">
                Whether you seek a new build, domestic extension or loft conversion, we will work closely with you to explore your ideas and vision, and develop them into a reality.
              </p>
              <div className="rounded-lg bg-light p-4">
                <h5 className="mb-2 font-semibold">Our Full-Service Approach:</h5>
                <ul className="list-inside list-disc space-y-1 text-gray">
                  <li>Connect you with quality architects and structural engineers</li>
                  <li>Navigate planning permissions and permitted development</li>
                  <li>Handle building regulations and compliance</li>
                  <li>Manage the entire build from groundworks to snagging</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/images/british-home.jpg" alt="Planning and Design Services" width={600} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </Container>
      </section>

      {/* New Builds */}
      <section id="newbuilds" className="bg-light py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image src="/images/home-extension-work.jpg" alt="New Build Construction" width={600} height={400} className="rounded-xl shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-3">New Builds</Badge>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">New Build Homes</h2>
              <p className="mb-2 text-lg font-light text-gray">Start with a blank canvas and build your dream home</p>
              <p className="mb-6 text-gray">
                The fundamental benefit of a new build home is that you are presented with a blank canvas. This means you have the flexibility to design and detail to suit your own vision and taste. There is also the added bonus that building a home from scratch removes any inconvenience or issues that can be associated with refurbishing and renovating an older property.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Complete design freedom', 'Modern energy efficiency', 'No renovation issues', 'Lower running costs'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex gap-2">
                  <Lightbulb size={20} className="shrink-0 text-primary" />
                  <p className="text-sm text-gray">
                    <strong>Energy Savings:</strong> New build properties are more energy efficient due to the high expectations of new building control regulations relating to insulation, helping save money on energy bills in the long run.
                  </p>
                </div>
              </div>
              <Button href="/consultation" variant="cta" size="lg" className="mt-6">
                Discuss Your New Build
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <Container>
          <SectionHeading title="Additional Services" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div key={service.title} className="text-center">
                <div className="mb-4 text-primary">{iconMap[service.icon]}</div>
                <h4 className="mb-2 text-lg font-semibold">{service.title}</h4>
                <p className="text-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <SectionHeading title="Why Families Choose K16 Contracts" />
          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4">
                  {item.icon === 'Award' && <Award size={40} className="mx-auto" />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck size={40} className="mx-auto" />}
                  {item.icon === 'Clock' && <Clock size={40} className="mx-auto" />}
                </div>
                <h4 className="mb-2 text-lg font-semibold">{item.title}</h4>
                <p className="opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Home?</h2>
            <p className="mb-8 text-lg text-gray">Get started with a free, no-obligation consultation</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/consultation" variant="cta" size="lg">Book Free Consultation</Button>
              <Button href="/contact" variant="outline-primary" size="lg">Get In Touch</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
