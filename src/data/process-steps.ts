import type { ProcessStep, TimelineStep } from '@/types';

export const processStepsPreview = [
  { number: 1, title: 'Free Consultation', description: 'We visit your home to understand your needs and assess the project scope' },
  { number: 2, title: 'Detailed Quote', description: 'Receive a fully costed quote with clear timelines and no hidden extras' },
  { number: 3, title: 'Quality Build', description: 'Expert craftsmen deliver your project with minimal disruption' },
  { number: 4, title: 'Aftercare Support', description: "We're still here after completion for any snagging or questions" },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Initial Consultation',
    subtitle: 'Free, no-obligation home assessment',
    description:
      "We begin by visiting your home to understand your needs, assess the project scope, and discuss your vision. This consultation is completely free with no obligation to proceed.",
    details: [
      'Discussion of your requirements and budget',
      'Site assessment and measurements',
      'Initial design ideas and suggestions',
      'Timeline expectations',
      'Answer any questions you have',
    ],
    sidebar: {
      icon: 'Clock',
      title: 'Duration: 1-2 hours',
      items: [
        { label: 'Any plans or drawings you have', icon: 'check' },
        { label: 'Budget range in mind', icon: 'check' },
        { label: 'Timeline preferences', icon: 'check' },
        { label: 'Style preferences or examples', icon: 'check' },
      ],
      cta: { label: 'Book Your Free Consultation', href: '/consultation' },
    },
  },
  {
    number: 2,
    title: 'Detailed Quote & Planning',
    subtitle: 'Comprehensive, transparent pricing',
    description:
      'Following the consultation, we prepare a detailed quote that breaks down all costs, timelines, and project specifications. No hidden extras, no surprises.',
    details: [
      'Itemized cost breakdown',
      'Materials specifications',
      'Project timeline with key milestones',
      'Payment schedule options',
      'Terms and conditions',
    ],
    sidebar: {
      icon: 'Calendar',
      title: 'Delivery: Within 3-5 days',
      items: [
        { label: 'Written quote valid for 30 days', icon: 'check' },
        { label: 'Detailed project scope', icon: 'check' },
        { label: '3D visualizations (where applicable)', icon: 'check' },
        { label: 'References available on request', icon: 'check' },
      ],
      note: 'No pressure - take your time to review and compare',
    },
  },
  {
    number: 3,
    title: 'Project Execution',
    subtitle: 'Quality construction with minimal disruption',
    description:
      'Once approved, our experienced team begins work on your project. We maintain a clean, safe work environment and keep disruption to your daily routine to an absolute minimum.',
    details: [
      'Daily site cleanup and organization',
      'Regular progress updates',
      'Dedicated project manager on-site',
      'Quality checks at each stage',
      'Flexibility for minor adjustments',
    ],
    sidebar: {
      icon: 'ShieldCheck',
      title: 'Our Commitments',
      items: [
        { label: 'Punctuality: Team arrives on time', bold: true },
        { label: 'Cleanliness: Daily site cleanup', bold: true },
        { label: 'Communication: Weekly progress meetings', bold: true },
        { label: 'Safety: Full insurance and compliance', bold: true },
        { label: 'Quality: Only skilled tradespeople', bold: true },
      ],
    },
  },
  {
    number: 4,
    title: 'Completion & Aftercare',
    subtitle: 'Your satisfaction is our priority',
    description:
      'Upon completion, we conduct a thorough walkthrough with you to ensure everything meets your expectations. We remain available for any snagging or questions after the project is finished.',
    details: [
      'Detailed project walkthrough',
      'Snagging list resolution',
      'All documentation and certificates',
      'Warranty information',
      'Ongoing support and advice',
    ],
    sidebar: {
      icon: 'Award',
      title: 'Our Guarantees',
      items: [
        { label: '10-year structural guarantee', icon: 'check' },
        { label: '2-year workmanship warranty', icon: 'check' },
        { label: '30-day snagging period', icon: 'check' },
        { label: 'Lifetime customer support', icon: 'check' },
      ],
      note: "We're still here long after the job is done",
    },
  },
];

export const timelineSteps: TimelineStep[] = [
  { icon: 'Phone', week: 'Week 1', description: 'Initial contact and consultation' },
  { icon: 'ClipboardCheck', week: 'Week 2', description: 'Quote preparation and review' },
  { icon: 'Hammer', week: 'Weeks 3-6', description: 'Construction phase (varies by project)' },
  { icon: 'HouseCheck', week: 'Week 7', description: 'Completion and handover' },
];
