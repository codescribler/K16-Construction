import { sendGAEvent } from '@next/third-parties/google';

export const GA_MEASUREMENT_ID = 'G-26HD5E4ZZ1';

export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  sendGAEvent('event', eventName, params);
}
