import { Resend } from 'resend';

let resend: Resend | null = null;

function getResendClient() {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

interface EmailOptions {
  subject: string;
  html: string;
}

export async function sendEmail({ subject, html }: EmailOptions) {
  const client = getResendClient();
  const from = process.env.EMAIL_FROM || 'K16 Contracts <noreply@k16contracts.co.uk>';
  const to = process.env.EMAIL_TO || 'kieran@k16contracts.co.uk';

  const { data, error } = await client.emails.send({
    from,
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
