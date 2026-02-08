export interface NavLink {
  label: string;
  href: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postcode: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
  };
  companyReg: string;
  vat: string;
  instagram: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  secondImage?: string;
  secondImageAlt?: string;
  features?: string[];
  benefits?: string[];
  stats?: { label: string; value: string }[];
  badge?: string;
  reverse?: boolean;
}

export interface AdditionalService {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  badges: { label: string; variant: 'primary' | 'success' | 'secondary' }[];
  image: string;
  imageAlt: string;
  details?: { title: string; items: string[] }[];
  specialFeature?: string;
  completionNote?: string;
  reverse?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string;
  rating: number;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  sidebar: {
    icon: string;
    title: string;
    items: { icon?: string; label: string; bold?: boolean }[];
    note?: string;
    cta?: { label: string; href: string };
  };
}

export interface TimelineStep {
  icon: string;
  week: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ComparisonItem {
  others: string[];
  us: string[];
}

export interface SatisfactionPromise {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfoCard {
  icon: string;
  title: string;
  lines: string[];
  action?: { label: string; href: string };
  note?: string;
}

export interface ConsultationInclude {
  icon: string;
  title: string;
  description: string;
}
