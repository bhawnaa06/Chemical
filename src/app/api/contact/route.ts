import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import axios from 'axios';

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json(); // ✅ Include phone

    // Gmail Send

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Chemical Form Lead from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

  // ✅ Send data to Google Sheet using URL from .env
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    try {
      await axios.post(googleScriptUrl!, {
        name,
        email,
        phone,
        message,
      });
      console.log('Data sent to Google Sheet ✅');
    } catch (sheetError) {
      console.error('Error sending data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error });
  }
}
