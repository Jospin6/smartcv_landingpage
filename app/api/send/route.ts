export const dynamic = 'force-dynamic';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextResponse) {
    const body = await req.json();
    const { email, message } = body;
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ['jospinndagano1@gmail.com'],
    subject: 'New lead message',
    react: EmailTemplate({ message: `${message} from email: ${email}`, }),
  });

  if (error) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data)
};