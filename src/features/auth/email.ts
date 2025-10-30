import nodemailer from 'nodemailer';

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  console.log('📧 Sending email via Mailtrap:', { to, subject });

  try {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: 'noreply@yourapp.com',
      to,
      subject,
      text,
    });

    console.log(' Email sent successfully:', info.messageId);
    console.log(' Check your Mailtrap inbox at: https://mailtrap.io/inboxes');

    return info;
  } catch (error) {
    console.error(' Error sending email:', error);
    throw error;
  }
}
