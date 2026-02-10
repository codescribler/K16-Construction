import { NextResponse } from 'next/server';
import { consultationSchema } from '@/lib/validation';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = consultationSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 });
    }

    const { firstName, lastName, email, phone, address, projectType, budget, preferredDays, preferredTime, additionalInfo } = result.data;

    await sendEmail({
      subject: `New Consultation Request: ${firstName} ${lastName} - ${projectType}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Address:</strong> ${address}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
        ${preferredDays?.length ? `<p><strong>Preferred Days:</strong> ${preferredDays.join(', ')}</p>` : ''}
        ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
        ${additionalInfo ? `<p><strong>Additional Information:</strong></p><p>${additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Consultation form error:', error);
    return NextResponse.json({ error: 'Failed to submit request. Please try again.' }, { status: 500 });
  }
}
