import type { Metadata } from 'next';
import Image from 'next/image';
import { Award, Clock } from 'lucide-react';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { projects, featuredBadge } from '@/data/projects';
import { projectTestimonials } from '@/data/testimonials';
import { siteInfo } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Projects - Extensions, Renovations & New Builds',
  description:
    'Browse K16 Contracts project portfolio. Real extensions, renovations, and new builds across Hertfordshire. See how we help families transform their homes.',
  openGraph: {
    title: 'Our Projects | K16 Contracts',
    description:
      'Real extensions, renovations, and new builds across Hertfordshire.',
    url: '/projects',
    images: [{ url: '/images/envisioning-modern-kitchen.jpg', width: 1200, height: 630, alt: 'K16 Contracts Project Portfolio' }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Real projects, real results. See how we've helped families transform their homes across Hertfordshire and beyond."
        backgroundImage="/images/home-extension-work.jpg"
      />

      {/* Featured Badge */}
      <section className="bg-light py-6">
        <Container>
          <div className="flex items-center justify-center gap-3 text-center">
            <Award size={24} className="shrink-0 text-primary" />
            <p className="text-lg">
              <strong>{featuredBadge.title}</strong> &mdash;{' '}
              {featuredBadge.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20">
        <Container>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                index < projects.length - 1
                  ? 'mb-12 border-b border-gray/20 pb-12'
                  : ''
              }
            >
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Content Side */}
                <div
                  className={
                    project.reverse ? 'order-1 lg:order-2' : 'order-1'
                  }
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge key={badge.label} variant={badge.variant}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                    {project.subtitle}
                  </p>
                  <p className="mb-6 text-gray">{project.description}</p>

                  {/* Project Details */}
                  {project.details && project.details.length > 0 && (
                    <div
                      className={
                        project.details.length === 2
                          ? 'mb-6 grid gap-4 sm:grid-cols-2'
                          : 'mb-6'
                      }
                    >
                      {project.details.map((detail) => (
                        <div
                          key={detail.title}
                          className="rounded-lg bg-light p-4"
                        >
                          <h4 className="mb-2 font-semibold">
                            {detail.title}
                          </h4>
                          <ul className="list-inside list-disc space-y-1 text-sm text-gray">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Special Feature */}
                  {project.specialFeature && (
                    <p className="mb-6 text-gray">
                      <strong>Special feature:</strong>{' '}
                      {project.specialFeature}
                    </p>
                  )}

                  {/* Completion Note */}
                  {project.completionNote && (
                    <div className="flex items-center gap-2 rounded-lg bg-primary p-3 text-white">
                      <Clock size={18} className="shrink-0" />
                      <span className="font-medium">
                        {project.completionNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div
                  className={
                    project.reverse ? 'order-2 lg:order-1' : 'order-2'
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <SectionHeading title="What Our Clients Say" />
          <div className="grid gap-8 lg:grid-cols-2">
            {projectTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                variant="light"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-gray">
              Whether you&apos;re planning an extension, renovation, or new
              build, we&apos;d love to hear about your project. Get in touch
              for a free, no-obligation consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/consultation" variant="cta" size="lg">
                Book Free Consultation
              </Button>
              <Button
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                variant="outline-primary"
                size="lg"
              >
                Call {siteInfo.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
