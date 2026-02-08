import type { Value, TimelineEvent, Stat, SatisfactionPromise } from '@/types';

export const stats: Stat[] = [
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { value: 2, suffix: '', label: 'Generations' },
];

export const timeline: TimelineEvent[] = [
  {
    year: '1998',
    title: '1998 - The Beginning',
    description: 'Father establishes K16 Contracts, building a reputation for quality and reliability',
  },
  {
    year: '2005',
    title: '2005 - Next Generation',
    description: 'Son joins the family business after exploring other industries',
  },
  {
    year: '2010',
    title: '2010 - Expansion',
    description: 'Growing team of skilled craftsmen, expanding service offerings',
  },
  {
    year: 'Today',
    title: 'Today - Trusted Name',
    description: 'Leading local contractor for home extensions and renovations',
  },
];

export const values: Value[] = [
  {
    icon: 'Heart',
    title: 'Family Values',
    description: "We treat every project with the care and attention we'd give our own family home",
  },
  {
    icon: 'Award',
    title: 'Quality First',
    description: 'Never compromising on materials or workmanship - quality is our signature',
  },
  {
    icon: 'ShieldCheck',
    title: 'Trust & Integrity',
    description: 'Transparent pricing, honest advice, and standing behind every job we complete',
  },
  {
    icon: 'Users',
    title: 'Customer Focus',
    description: "Your satisfaction drives us - we're not happy unless you're delighted",
  },
];

export const othersVsUs = {
  others: [
    'Vague quotes with hidden extras',
    'Unreliable timelines',
    'Messy work sites',
    'Poor communication',
    'Disappear after payment',
  ],
  us: [
    'Fixed, transparent pricing',
    'Stick to agreed schedules',
    'Clean and tidy daily',
    'Regular progress updates',
    'Lifetime aftercare support',
  ],
};

export const satisfactionPromises: SatisfactionPromise[] = [
  {
    icon: 'PoundSterling',
    title: 'No Hidden Extras',
    description:
      'We provide a detailed quotation, so you are fully aware of all costs included at the start of the project. You can feel confident there will be no hidden costs along the way.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Full Insurance',
    description:
      'We are fully insured up to £5 million on our public liability. If, in the unfortunate event that something was to ever happen, you can relax knowing we are fully covered.',
  },
  {
    icon: 'Users',
    title: 'References on Request',
    description:
      'We can provide references from many satisfied customers from a variation of work we have undertaken, both new and old, to help you decide if we are the right fit.',
  },
];

export const serviceReliability = [
  { icon: 'BadgeCheck', title: 'Fully Insured', subtitle: '£5M public liability' },
  { icon: 'Building2', title: 'Regulations', subtitle: 'Full compliance' },
  { icon: 'ShieldCheck', title: 'Guaranteed', subtitle: '10 year structural' },
  { icon: 'Award', title: 'Registered', subtitle: 'Company No. 5879566' },
];

export const teamSkills = [
  { title: 'Skilled Craftsmen', description: 'Our team includes experienced carpenters, plumbers, electricians, and plasterers' },
  { title: 'Trusted Partners', description: 'We work with reliable suppliers and specialist contractors when needed' },
  { title: 'Project Managers', description: 'Dedicated managers ensure smooth communication and project delivery' },
];
