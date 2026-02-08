import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Award, ShieldCheck, Users, XCircle, CheckCircle, PoundSterling, BadgeCheck, Building2 } from 'lucide-react';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CounterAnimation } from '@/components/interactive/CounterAnimation';
import { stats, timeline, values, othersVsUs, satisfactionPromises, serviceReliability, teamSkills } from '@/data/team';

export const metadata: Metadata = {
  title: 'About Us - Family Builders Since 1998',
  description:
    'About K16 Contracts - Family-run builders since 1998. Learn about our story, values, and commitment to quality home extensions and renovations.',
  openGraph: {
    title: 'About Us | K16 Contracts',
    description: 'A family tradition of quality building since 1998.',
    url: '/about',
    images: [{ url: '/images/british-home.jpg', width: 1200, height: 630, alt: 'K16 Contracts - Family Builders Since 1998' }],
  },
};

const valueIconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={36} />,
  Award: <Award size={36} />,
  ShieldCheck: <ShieldCheck size={36} />,
  Users: <Users size={36} />,
};

const satisfactionIconMap: Record<string, React.ReactNode> = {
  PoundSterling: <PoundSterling size={40} className="mx-auto mb-3 text-primary" />,
  ShieldCheck: <ShieldCheck size={40} className="mx-auto mb-3 text-primary" />,
  Users: <Users size={40} className="mx-auto mb-3 text-primary" />,
};

const reliabilityIconMap: Record<string, React.ReactNode> = {
  BadgeCheck: <BadgeCheck size={40} className="mx-auto mb-2" />,
  Building2: <Building2 size={40} className="mx-auto mb-2" />,
  ShieldCheck: <ShieldCheck size={40} className="mx-auto mb-2" />,
  Award: <Award size={40} className="mx-auto mb-2" />,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About K16 Contracts"
        subtitle="A family tradition of quality building since 1998"
      />

      {/* Our Story */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                From father to son, building homes and trust for over 25 years.
              </p>
              <p className="mb-4">
                K16 Contracts began in 1998 when the founder started what would become a family legacy in quality construction. After the next generation tried other industries, including I.T., they found themselves drawn back to the craft they&apos;d grown up watching - the transformation of houses into homes.
              </p>
              <p className="mb-4">
                Learning the trade from a true master craftsman - father to son - instilled not just the technical skills, but the values that define K16 Contracts today: integrity, quality, and treating every project as if it were our own home.
              </p>
              <p className="mb-6">
                What started as a father&apos;s business has grown into a trusted name in home extensions and renovations, but our core remains the same - we&apos;re a family business built on our family reputation.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <h3 className="text-2xl font-bold text-primary">
                      <CounterAnimation target={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm text-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded bg-light p-6">
              <h3 className="mb-4 text-xl font-bold">The K16 Journey</h3>
              <div className="relative border-l-2 border-primary pl-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative ${index < timeline.length - 1 ? 'mb-6' : ''}`}
                  >
                    <div className="absolute -left-[25px] top-1 h-5 w-5 rounded-full bg-primary" />
                    <h5 className="font-semibold">{item.title}</h5>
                    <p className="text-gray">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="bg-light py-20">
        <Container>
          <SectionHeading title="Our Values" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  {valueIconMap[value.icon]}
                </div>
                <h4 className="mb-2 text-lg font-semibold">{value.title}</h4>
                <p className="text-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What Drives Us */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/home-extension-work.jpg"
                alt="Quality Construction Work"
                width={600}
                height={400}
                className="rounded shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Drives Us</h2>
              <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                A pride in the body of work, the homes we&apos;ve built, the people we&apos;ve served.
              </p>
              <p className="mb-4">
                Every completed project adds to our legacy - not just as builders, but as contributors to family happiness. We understand the frustration of overcrowded homes because we&apos;ve seen it transform into joy when families finally have the space they need.
              </p>
              <p className="mb-4">
                It&apos;s deeply upsetting to see the mess left by cowboy builders - the stress, the wasted money, the broken trust. That&apos;s why we&apos;re committed to being different. When we leave a job, we leave behind a beautiful space and a happy family.
              </p>
              <blockquote className="mt-4 rounded bg-light p-4">
                <p className="mb-2">
                  &ldquo;Paying a little extra upfront for a team with a proven track record saves heartache and costs in the future.&rdquo;
                </p>
                <footer className="text-sm text-gray">--- Our Philosophy</footer>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We're Different */}
      <section className="bg-primary py-20 text-white">
        <Container>
          <SectionHeading title="Why We're Different" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <XCircle size={32} className="shrink-0 text-red-400" />
              <div>
                <h4 className="mb-3 text-xl font-semibold">What Others Do</h4>
                <ul className="space-y-2">
                  {othersVsUs.others.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle size={32} className="shrink-0 text-green-400" />
              <div>
                <h4 className="mb-3 text-xl font-semibold">What We Do</h4>
                <ul className="space-y-2">
                  {othersVsUs.us.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-lg font-light leading-relaxed">
              Because we have extensive experience, our quotes and advice can be relied upon. We&apos;ve seen it all before.
            </p>
            <Button href="/about#satisfaction" variant="light">
              Learn More About Our Difference
            </Button>
          </div>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="py-20">
        <Container>
          <SectionHeading title="Meet the Team" />
          <div className="mx-auto max-w-3xl rounded bg-light p-12 text-center">
            <div className="mb-4">
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary text-white">
                <Users size={48} />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold">Meet Our Team</h3>
            <p className="mb-3 text-primary">Family-Run Since 1998</p>
            <p className="mb-4 text-lg font-light leading-relaxed">
              Second generation builders carrying forward the K16 legacy of quality and trust.
            </p>
            <p className="mb-6 text-gray">
              Our managing director learnt the trade from his father, bringing both traditional craftsmanship and modern building techniques to every project. The journey through different industries, including I.T., has given our team a unique perspective on project management and customer service.
            </p>
            <p className="mb-6 text-gray">
              When you choose K16 Contracts, you&apos;re not just hiring builders - you&apos;re partnering with a family that stakes its reputation on every nail, every brick, and every satisfied customer.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {teamSkills.map((skill) => (
              <div key={skill.title} className="text-center">
                <h4 className="mb-2 text-lg font-semibold">{skill.title}</h4>
                <p className="text-gray">{skill.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer Satisfaction Promise */}
      <section id="satisfaction" className="bg-light py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Our Customer Satisfaction Promise</h2>
            <p className="text-lg font-light leading-relaxed text-gray">
              At K16 Contracts Ltd our company has gone from strength to strength as a result of our positive reputation. We are aware that we are only as good as our last job.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {satisfactionPromises.map((promise) => (
              <div key={promise.title} className="rounded bg-white p-6 text-center shadow-sm">
                {satisfactionIconMap[promise.icon]}
                <h4 className="mb-2 text-lg font-semibold">{promise.title}</h4>
                <p className="text-gray">{promise.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service You Can Rely On */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Service You Can Rely On</h2>
              <p className="mb-4 text-lg font-light leading-relaxed text-gray">
                We understand that once your house and life have been disrupted by the start of the construction process, it can be both frustrating and inconvenient to wait days or weeks with no progress.
              </p>
              <p className="text-gray">
                At K16 we make sure to limit our workload at one time to ensure each home is a priority and progress is always being made. You won&apos;t be left waiting - we&apos;re committed to keeping your project moving forward.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {serviceReliability.map((item) => (
                <div key={item.title} className="rounded bg-primary p-4 text-center text-white">
                  {reliabilityIconMap[item.icon]}
                  <h5 className="font-semibold">{item.title}</h5>
                  <p className="mb-0 text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Experience the K16 Difference</h2>
            <p className="mb-8 text-lg font-light leading-relaxed text-gray">
              Join hundreds of satisfied families who&apos;ve trusted us with their homes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/consultation" variant="cta" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/contact" variant="outline-primary" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
