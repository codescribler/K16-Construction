import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteInfo } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-dark py-16 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/images/k16-logo.png" alt="K16 Contracts Logo" width={40} height={40} />
              <span className="text-lg font-bold text-white">K16 Contracts</span>
            </div>
            <p className="text-white/50">{siteInfo.description}</p>
            <div className="mt-4 flex gap-2">
              <a
                href={siteInfo.socialLinks.facebook}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteInfo.socialLinks.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="relative mb-4 pb-2 text-sm font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-primary-light after:content-['']">
              Quick Links
            </h5>
            <ul className="space-y-1">
              <li><Link href="/services" className="text-white/50 transition-colors hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-white/50 transition-colors hover:text-white">Projects</Link></li>
              <li><Link href="/process" className="text-white/50 transition-colors hover:text-white">Our Process</Link></li>
              <li><Link href="/about" className="text-white/50 transition-colors hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="relative mb-4 pb-2 text-sm font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-primary-light after:content-['']">
              Our Services
            </h5>
            <ul className="space-y-1">
              <li><Link href="/services#extensions" className="text-white/50 transition-colors hover:text-white">Home Extensions</Link></li>
              <li><Link href="/services#kitchens" className="text-white/50 transition-colors hover:text-white">Kitchen Renovations</Link></li>
              <li><Link href="/services#bathrooms" className="text-white/50 transition-colors hover:text-white">Bathroom Installations</Link></li>
              <li><Link href="/services#newbuilds" className="text-white/50 transition-colors hover:text-white">New Builds</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="relative mb-4 pb-2 text-sm font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-primary-light after:content-['']">
              Contact Info
            </h5>
            <ul className="space-y-1 text-white/50">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>{siteInfo.address.line1}<br />{siteInfo.address.city}, {siteInfo.address.postcode}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>{siteInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>{siteInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="shrink-0" />
                <span>{siteInfo.instagram}</span>
              </li>
            </ul>
            <p className="mt-2 text-xs text-white/50">
              Company Reg: {siteInfo.companyReg} | VAT: {siteInfo.vat}
            </p>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/50">&copy; 2026 K16 Contracts Ltd. All rights reserved.</p>
          <p className="text-sm text-white/50">
            Website by{' '}
            <a href="https://hertfordshirewebsites.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">hertfordshirewebsites.co.uk</a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/50 transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-white/50 transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
