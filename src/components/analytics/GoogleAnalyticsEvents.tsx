'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, trackEvent } from '@/lib/gtag';

export function GoogleAnalyticsEvents() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // Track page views on every route change (skip first load — handled by inline script)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    pageview(pathname);
  }, [pathname]);

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
