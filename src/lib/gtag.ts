export const GA_MEASUREMENT_ID = 'G-26HD5E4ZZ1';

export function pageview(url: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
