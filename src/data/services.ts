import type { Service, ServiceDetail, AdditionalService } from '@/types';

export const servicesOverview: Service[] = [
  {
    id: 'extensions',
    title: 'Home Extensions',
    description:
      'Create the extra space your growing family needs. From single-storey extensions to loft conversions, we\'ll help your home grow with you.',
    features: ['Extra bedrooms', 'Larger kitchens', 'Garden rooms'],
    image: '/images/home-extension-work.jpg',
    imageAlt: 'Home Extension',
  },
  {
    id: 'kitchens',
    title: 'Kitchen Renovations',
    description:
      'Transform the heart of your home into a stunning, functional space where your family loves to gather.',
    features: ['Modern designs', 'Quality fittings', 'Maximized storage'],
    image: '/images/envisioning-kitchen-makeover.jpg',
    imageAlt: 'Kitchen Renovation',
  },
  {
    id: 'bathrooms',
    title: 'Bathroom Installations',
    description:
      'Create beautiful, practical bathrooms that work for your whole family, from busy mornings to relaxing evenings.',
    features: ['Family bathrooms', 'En-suites', 'Wet rooms'],
    image: '/images/bathroom.jpg',
    imageAlt: 'Bathroom Installation',
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'extensions',
    title: 'Home Extensions',
    subtitle: 'Create the space your growing family needs without the stress of moving',
    description:
      'Whether you need an extra bedroom for a new arrival, a larger kitchen for family gatherings, or a home office for remote work, our extensions are designed to seamlessly blend with your existing property while maximizing space and value.',
    image: '/images/home-extension-work.jpg',
    imageAlt: 'Home Extension Project',
    features: [
      'Single-storey rear extensions',
      'Double-storey extensions',
      'Side return extensions',
      'Wrap-around extensions',
      'Loft conversions',
      'Garage conversions',
      'Garden rooms',
      'Conservatories',
    ],
    benefits: [
      'Structural calculations and planning support included',
      'Building regulations compliance guaranteed',
      'Minimal disruption to your daily life',
      'Increases property value significantly',
    ],
    reverse: true,
  },
  {
    id: 'kitchens',
    title: 'Kitchen Renovations',
    subtitle: 'Transform the heart of your home into a stunning, functional space',
    description:
      'The kitchen is where families come together. We create beautiful, practical kitchens that work for busy family life - from morning rushes to dinner parties, homework sessions to midnight snacks.',
    image: '/images/envisioning-kitchen-makeover.jpg',
    imageAlt: 'Kitchen Makeover',
    secondImage: '/images/envisioning-modern-kitchen.jpg',
    secondImageAlt: 'Modern Kitchen',
    features: [
      'Complete kitchen redesign and planning',
      'Supply and fit quality units and worktops',
      'Plumbing and electrical work',
      'Tiling and flooring',
      'Kitchen extensions for more space',
      'Island and breakfast bar installations',
    ],
    stats: [
      { label: 'Average completion time', value: '2-3 Weeks' },
      { label: 'Workmanship guarantee', value: '10 Year' },
    ],
    reverse: false,
  },
  {
    id: 'bathrooms',
    title: 'Bathroom Installations',
    subtitle: 'Create beautiful, practical bathrooms for the whole family',
    description:
      'From family bathrooms that handle the morning rush to luxurious en-suites for relaxation, we design and install bathrooms that combine style with practicality.',
    image: '/images/bathroom.jpg',
    imageAlt: 'Luxury Bathroom',
    secondImage: '/images/installing-a-bathroom.jpg',
    secondImageAlt: 'Bathroom Installation',
    reverse: true,
  },
  {
    id: 'planning',
    badge: 'Full Service',
    title: 'Planning, Design & Build',
    subtitle: 'We guide you from the initial idea through to completion',
    description:
      'At K16 we are highly experienced in all elements of the three project stages and pride ourselves on our knowledge of the planning requirements necessary. We endeavour to guide our clients from the initial stages of consulting with architects, through to applying for local authority approval, and eventually through to completion of the building project.',
    image: '/images/british-home.jpg',
    imageAlt: 'Planning and Design Services',
    benefits: [
      'Connect you with quality architects and structural engineers',
      'Navigate planning permissions and permitted development',
      'Handle building regulations and compliance',
      'Manage the entire build from groundworks to snagging',
    ],
    reverse: false,
  },
  {
    id: 'newbuilds',
    badge: 'New Builds',
    title: 'New Build Homes',
    subtitle: 'Start with a blank canvas and build your dream home',
    description:
      'The fundamental benefit of a new build home is that you are presented with a blank canvas. This means you have the flexibility to design and detail to suit your own vision and taste. There is also the added bonus that building a home from scratch removes any inconvenience or issues that can be associated with refurbishing and renovating an older property.',
    image: '/images/home-extension-work.jpg',
    imageAlt: 'New Build Construction',
    features: [
      'Complete design freedom',
      'Modern energy efficiency',
      'No renovation issues',
      'Lower running costs',
    ],
    reverse: true,
  },
];

export const additionalServices: AdditionalService[] = [
  {
    icon: 'Home',
    title: 'Loft Conversions',
    description:
      'Transform unused attic space into bedrooms, offices, or playrooms. Typically increases property value by 20%.',
  },
  {
    icon: 'Hammer',
    title: 'Structural Work',
    description:
      'Walls removed, RSJs installed (CE Stamped to comply with Construction Products Regulation), and structural alterations',
  },
  {
    icon: 'PaintBucket',
    title: 'Full Refurbishments',
    description:
      'Renovations are a practical and affordable way to modernise your home without the added stress of moving',
  },
  {
    icon: 'Building2',
    title: 'HMO Conversions',
    description:
      'Convert properties into HMOs providing quality, affordable accommodation for those studying or working locally',
  },
];

export const whyChooseUs = [
  {
    icon: 'Award',
    title: '25+ Years Experience',
    description: 'Family-run business with a proven track record since 1998',
  },
  {
    icon: 'ShieldCheck',
    title: 'Fully Insured & Guaranteed',
    description: 'Complete peace of mind with comprehensive insurance and guarantees',
  },
  {
    icon: 'Clock',
    title: 'On-Time Completion',
    description: 'We stick to agreed timelines and keep disruption to a minimum',
  },
];
