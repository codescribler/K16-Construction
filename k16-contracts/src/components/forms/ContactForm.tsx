'use client';

import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      projectType: formData.get('projectType') as string,
      timeline: formData.get('timeline') as string,
      message: formData.get('message') as string,
      hearAbout: formData.get('hearAbout') as string,
      consent: formData.get('consent') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToast({ message: "Thank you for your message! We'll be in touch within 24 hours.", type: 'success' });
        form.reset();
      } else {
        const result = await res.json();
        setToast({ message: result.error || 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block font-medium">First Name *</label>
            <input type="text" id="firstName" name="firstName" required className="form-input" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block font-medium">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required className="form-input" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block font-medium">Email Address *</label>
            <input type="email" id="email" name="email" required className="form-input" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block font-medium">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required className="form-input" />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="mb-1 block font-medium">Project Type *</label>
          <select id="projectType" name="projectType" required className="form-select">
            <option value="">Select a project type...</option>
            <option value="extension">Home Extension</option>
            <option value="kitchen">Kitchen Renovation</option>
            <option value="bathroom">Bathroom Installation</option>
            <option value="loft">Loft Conversion</option>
            <option value="general">General Building Work</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="mb-1 block font-medium">When are you looking to start?</label>
          <select id="timeline" name="timeline" className="form-select">
            <option value="">Select timeline...</option>
            <option value="asap">As soon as possible</option>
            <option value="1month">Within 1 month</option>
            <option value="3months">Within 3 months</option>
            <option value="6months">Within 6 months</option>
            <option value="planning">Just planning</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-medium">Tell us about your project *</label>
          <textarea id="message" name="message" rows={5} required className="form-textarea" />
        </div>

        <div>
          <label htmlFor="hearAbout" className="mb-1 block font-medium">How did you hear about us?</label>
          <select id="hearAbout" name="hearAbout" className="form-select">
            <option value="">Select an option...</option>
            <option value="recommendation">Friend/Family Recommendation</option>
            <option value="search">Internet Search</option>
            <option value="social">Social Media</option>
            <option value="signage">Site Signage</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="consent" name="consent" required className="mt-1" />
          <label htmlFor="consent" className="text-sm">
            I consent to K16 Contracts contacting me about my enquiry *
          </label>
        </div>

        <div className="text-center">
          <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </>
  );
}
