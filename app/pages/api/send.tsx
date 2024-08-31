import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'contact.danielstadler.com',
      to: ['contact.danielstadler.com'],
      cc: ['contact.danielstadler.com'],
      subject: `Contact form submission from ${name}`,
      text: '`Email: ${email}\nMessage: ${message}`',
      // react: ContactFormEmail({ name, email, message })
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}
