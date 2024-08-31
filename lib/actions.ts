'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/email/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function createDomain(data: ContactFormInputs) {
  resend.domains.create({ name: 'danielstadler.com' });
}

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const response = await resend.emails.send({
      from: 'contact@danielstadler.com',
      to: ['contact@danielstadler.com'],
      cc: ['contact@danielstadler.com'],
      subject: `Contact form submission from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (response.error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Unknown error' }
  }
}
