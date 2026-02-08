'use client';

import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';
import { Button } from '@/components/ui/Button';

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const preferredDays: string[] = [];
    if (formData.get('weekdays')) preferredDays.push('weekdays');
    if (formData.get('saturday')) preferredDays.push('saturday');

    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      projectType: formData.get('projectType') as string,
      budget: formData.get('budget') as string,
      preferredDays,
      preferredTime: formData.get('preferredTime') as string,
      additionalInfo: formData.get('additionalInfo') as string,
      consent: formData.get('consent') === 'on',
    };

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToast({ message: "Consultation request received! We'll call you within 24 hours to schedule your free assessment.", type: 'success' });
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
            <label htmlFor="consul-firstName" className="mb-1 block font-medium">First Name *</label>
            <input type="text" id="consul-firstName" name="firstName" required className="form-input" />
          </div>
          <div>
            <label htmlFor="consul-lastName" className="mb-1 block font-medium">Last Name *</label>
            <input type="text" id="consul-lastName" name="lastName" required className="form-input" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="consul-email" className="mb-1 block font-medium">Email Address *</label>
            <input type="email" id="consul-email" name="email" required className="form-input" />
          </div>
          <div>
            <label htmlFor="consul-phone" className="mb-1 block font-medium">Phone Number *</label>
            <input type="tel" id="consul-phone" name="phone" required className="form-input" />
          </div>
        </div>

        <div>
          <label htmlFor="consul-address" className="mb-1 block font-medium">Property Address *</label>
          <input type="text" id="consul-address" name="address" required className="form-input" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="consul-projectType" className="mb-1 block font-medium">Project Type *</label>
            <select id="consul-projectType" name="projectType" required className="form-select">
              <option value="">Select project type...</option>
              <option value="extension">Home Extension</option>
              <option value="kitchen">Kitchen Renovation</option>
              <option value="bathroom">Bathroom Installation</option>
              <option value="loft">Loft Conversion</option>
              <option value="multiple">Multiple Projects</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="consul-budget" className="mb-1 block font-medium">Approximate Budget</label>
            <select id="consul-budget" name="budget" className="form-select">
              <option value="">Select budget range...</option>
              <option value="10-20k">£10,000 - £20,000</option>
              <option value="20-40k">£20,000 - £40,000</option>
              <option value="40-60k">£40,000 - £60,000</option>
              <option value="60-100k">£60,000 - £100,000</option>
              <option value="100k+">£100,000+</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">Preferred Days for Consultation</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="weekdays" />
              Weekdays (Mon-Fri)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="saturday" />
              Saturday
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="consul-preferredTime" className="mb-1 block font-medium">Preferred Time</label>
          <select id="consul-preferredTime" name="preferredTime" className="form-select">
            <option value="">Select preferred time...</option>
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 7pm)</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="consul-additionalInfo" className="mb-1 block font-medium">Additional Information</label>
          <textarea
            id="consul-additionalInfo"
            name="additionalInfo"
            rows={3}
            placeholder="Tell us more about your project or any specific requirements..."
            className="form-textarea"
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="consul-consent" name="consent" required className="mt-1" />
          <label htmlFor="consul-consent" className="text-sm">
            I consent to K16 Contracts contacting me to arrange a consultation *
          </label>
        </div>

        <div className="text-center">
          <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
          </Button>
        </div>
      </form>
    </>
  );
}
