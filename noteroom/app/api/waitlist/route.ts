import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import WaitlistUser from '@/models/WaitlistUser';
import { addContactToWaitlist, sendWelcomeEmail } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || email.trim().length === 0) {
      return NextResponse.json(
        { ok: false, message: 'Please provide your valid email' },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingUser = await WaitlistUser.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { ok: false, message: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }

    await WaitlistUser.create({ email: email.toLowerCase() });

    try {
      await addContactToWaitlist(email);
      await sendWelcomeEmail(email);
    } catch (brevoError) {
      console.error('Brevo integration error:', brevoError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Waitlist error:', error);

    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json(
        { ok: false, message: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, message: 'Unexpected error occurred. Please try again later!' },
      { status: 500 }
    );
  }
}
