export const GA_MEASUREMENT_ID = 'G-26HD5E4ZZ1';

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
