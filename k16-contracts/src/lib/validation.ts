import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Please enter your phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().optional(),
  message: z.string().min(1, 'Please describe your project'),
  hearAbout: z.string().optional(),
  consent: z.literal(true, { message: 'Please check this box to proceed' }),
});

export const consultationSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Please enter your phone number'),
  address: z.string().min(1, 'Please enter your property address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  preferredDays: z.array(z.string()).optional(),
  preferredTime: z.string().optional(),
  additionalInfo: z.string().optional(),
  consent: z.literal(true, { message: 'Please check this box to proceed' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ConsultationFormData = z.infer<typeof consultationSchema>;
