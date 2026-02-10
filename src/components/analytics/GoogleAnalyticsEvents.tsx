'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, trackEvent } from '@/lib/gtag';

export function GoogleAnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on every route change
  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  // Track click events (calls, CTAs)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      // Track click-to-call
      if (href.startsWith('tel:')) {
        trackEvent('click_to_call', {
          event_category: 'engagement',
          event_label: href.replace('tel:', ''),
        });
      }

      // Track CTA clicks to consultation page
      if (href === '/consultation') {
        trackEvent('cta_click', {
          event_category: 'engagement',
          event_label: anchor.textContent?.trim() || 'Free Consultation',
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
