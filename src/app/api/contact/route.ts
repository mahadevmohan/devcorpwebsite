import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for the contact form
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
});

export async function POST(request: NextRequest) {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Contact service is currently unavailable. Please try again later or email us directly at devcorptechllc@gmail.com' },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${validatedData.subject} - ${validatedData.firstName} ${validatedData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}" style="color: #007bff; text-decoration: none;">${validatedData.email}</a></p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-left: 4px solid #007bff; border-radius: 5px;">
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 10px;">📧 Quick Response</h4>
            <p style="margin: 0; font-weight: 500;">Reply directly to this email to respond to: <strong>${validatedData.email}</strong></p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 5px; font-size: 12px; color: #666;">
            <p>This message was sent from the DevCorp Tech website contact form.</p>
            <p>Sender: ${validatedData.firstName} ${validatedData.lastName} (${validatedData.email})</p>
          </div>
        </div>
      `,
      replyTo: validatedData.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
