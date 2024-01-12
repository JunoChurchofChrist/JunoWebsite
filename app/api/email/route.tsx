import { Resend } from 'resend';
import { NextResponse, NextRequest } from 'next/server';
import ContactRecieved from '@/emails/ContactRecieved';
import ContactMessage from '@/emails/ContactMessage';
import { FormData } from '@/app/connect/ContactForm';
import { headers } from 'next/headers';

const from = 'onboarding@resend.dev';
const junoWorkEmail = 'evandvance@gmail.com';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const domain = headers().get("host") || "";
  if(!req.url.includes(domain)){ 
      return NextResponse.json({message:"Request from Unauthorized sender"}, { status:401 })
      };
  const data: FormData = await req.json();
  await resend.emails.send({
    from: from,
    to: data.email,
    subject: 'Thank you for reaching out!',
    react: (
      <ContactRecieved firstName={data.firstName} lastName={data.lastName} />
    ),
  });
  await resend.emails.send({
    from: from,
    to: junoWorkEmail,
    subject: `${data.firstName} ${data.lastName} reached out to you on junochurch.com`,
    react: (
      <ContactMessage
        firstName={data.firstName}
        lastName={data.lastName}
        returnAddress={data.email}
        comments={data.comments}
      />
    ),
  });
  return NextResponse.json({ message: 'success' });
}
