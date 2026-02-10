import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'bricket-wood',
    location: 'Bricket Wood, St. Albans',
    title: 'Bricket Wood, St. Albans',
    subtitle: 'Conservatory to extension conversion for family gatherings',
    description:
      'With the family members having grown up and moved out and starting their own families, our client began to struggle for space when it came to hosting Christmas and Easter dinner. We solved this problem by removing the existing UPVC conservatory and extending out the back.',
    badges: [
      { label: 'Extension', variant: 'primary' },
      { label: 'Featured in Professional Builder', variant: 'success' },
    ],
    image: '/images/home-extension-work.jpg',
    imageAlt: 'Bricket Wood Extension Project',
    details: [
      {
        title: 'Technical Details',
        items: [
          'Single storey back extension with flat roof',
          'Korniche Roof Lantern installed for natural light',
          'Footings dug at 1.8m depth (building control requirement due to nearby bamboo)',
          'Warm flat roof insulation system with 100mm insulation',
          'Three-layer torch-on roofing felt to building regulations',
          'All electrical safety and building certificates received',
        ],
      },
    ],
    reverse: false,
  },
  {
    id: 'bushey',
    location: 'Bushey, Hertfordshire',
    title: 'Bushey, Hertfordshire',
    subtitle: 'Double storey side extension, back extension, loft conversion & full house renovation',
    description:
      "Our client invested significantly in their property to increase its value. A loft extension can typically increase a home's value by 20% - an amazing return on investment if they ever decide to sell.",
    badges: [{ label: 'Full Renovation', variant: 'primary' }],
    image: '/images/british-home.jpg',
    imageAlt: 'Bushey Full Renovation',
    details: [
      {
        title: 'Ground Floor',
        items: [
          'Cinema room with acoustic insulation',
          'Utility room with pull-out laundry shelf',
          'Downstairs toilet',
          'Larger kitchen and diner',
        ],
      },
      {
        title: 'Upper Floors',
        items: [
          'Extra bedroom with en-suite',
          'Loft bedroom with bathroom',
          'Foundations verified by building control',
        ],
      },
    ],
    specialFeature:
      'The cinema room was designed with acoustic insulation, boards and sealant to reduce outside noise. Ceiling-mounted projector with walls, door, skirting and architrave all painted black for an authentic cinema experience.',
    reverse: true,
  },
  {
    id: 'oxford',
    location: 'Oxford',
    title: 'Oxford',
    subtitle: 'HMO conversion and new build on existing garage site',
    description:
      'We converted an existing property into an HMO and built a brand new home on the site where the old garage used to be. HMOs provide good quality, affordable accommodation for those studying or working locally.',
    badges: [
      { label: 'New Build', variant: 'primary' },
      { label: 'HMO Conversion', variant: 'secondary' },
    ],
    image: '/images/blue-bedroom.jpg',
    imageAlt: 'Oxford HMO Project',
    details: [
      {
        title: 'New Build HMO',
        items: [
          '4 bedrooms (3 upstairs, 1 downstairs)',
          'New foundations with C20 concrete',
          'New utility services (Gas, Water & Electric)',
          'CE Stamped RSJ goalposts installed',
          'Sound and air tests conducted and passed',
          'Rendered and pebble dashed exterior',
          'Fire safety standard doors throughout',
        ],
      },
      {
        title: 'Existing House Refurbishment',
        items: [
          'Separate toilet converted to en-suite for better rental value',
          'Bathroom reconfigured for shared use',
          'Chimney breast removed with RSJ support in loft',
          'Single storey back extension with Velux windows',
          'All windows replaced by FENSA approved installer',
        ],
      },
    ],
    reverse: false,
  },
  {
    id: 'welwyn',
    location: 'Welwyn Garden City',
    title: 'Welwyn Garden City',
    subtitle: 'Single storey back extension for a growing family',
    description:
      "We completed a single storey back extension to solve the problem of space for a growing family that didn't want to move away from the area they were raising their children. Their conservatory was converted into a larger downstairs area, giving them a larger living and dining area.",
    badges: [{ label: 'Extension', variant: 'primary' }],
    image: '/images/envisioning-modern-kitchen.jpg',
    imageAlt: 'Welwyn Garden City Extension',
    details: [
      {
        title: 'Technical Specifications',
        items: [
          'Strip foundations extending 5m past the extension',
          '25mm rebar and 20mm square rebar cages for extra strength (local area prone to sinkholes)',
          'Concrete mixed on-site due to access logistics',
          'ACO Channel drains diverted to existing soak away',
          'Goal post RSJs erected',
          'Pitched roof with two Velux windows',
          'Floor blinded with concrete, insulated and screeded',
          'All electrical safety and building certificates received',
        ],
      },
    ],
    reverse: true,
  },
  {
    id: 'muswell-hill',
    location: 'Muswell Hill, London',
    title: 'Muswell Hill, London',
    subtitle: 'Complete flat refurbishment on a tight schedule',
    description:
      'After the passing of a family member, the clients inherited a flat they planned to sell. The estate agent recommended refurbishing the bathroom and kitchen to increase value. With a tight schedule to get the property on the market, we exceeded expectations by completing everything ahead of schedule.',
    badges: [{ label: 'Full Refurbishment', variant: 'primary' }],
    image: '/images/envisioning-kitchen-makeover.jpg',
    imageAlt: 'Muswell Hill Refurbishment',
    details: [
      {
        title: 'Work Completed',
        items: [
          'Kitchen ripped out and replaced with modern design',
          'Bathroom fully replaced',
          'Complete rewiring to current standards',
          'New consumer unit installed',
          'Original parquet flooring sanded and oiled',
          'New fire-regulated doors installed',
          'Full redecoration throughout',
        ],
      },
    ],
    completionNote: 'Completed ahead of schedule - Delivered without a single issue or complaint',
    reverse: false,
  },
];

export const featuredBadge = {
  title: 'Featured in Professional Builder Magazine',
  description: 'Recognised for quality workmanship on our Bricket Wood extension',
};
