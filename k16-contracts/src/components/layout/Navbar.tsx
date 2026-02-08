'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white py-4 transition-all duration-250',
        isScrolled ? 'shadow-md' : 'shadow-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/k16-logo.png"
              alt="K16 Contracts Logo"
              width={45}
              height={45}
              priority
            />
            <span className="text-xl font-bold font-primary">K16 Contracts</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 font-primary font-medium transition-colors duration-250',
                    isActive ? 'text-primary' : 'text-dark hover:text-primary',
                    "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:transition-transform after:duration-250 after:content-['']",
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/consultation" variant="cta" size="sm" className="ml-3">
              Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="mt-4 border-t border-gray-light/50 pt-4 lg:hidden">
            <div className="flex flex-col items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'w-full py-2 text-center font-primary font-medium transition-colors',
                      isActive ? 'text-primary' : 'text-dark'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/consultation" variant="cta" className="mt-2 w-full max-w-xs">
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
