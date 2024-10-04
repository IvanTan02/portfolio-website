// import { EmailTemplate } from '../../../components/EmailTemplate';
import { EmailTemplate } from '@/components/home/email/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <ivantanyenwen32@gmail.com>',
      to: ['ivantanyenwen02@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'Ivan' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
