import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface SMTPError extends Error {
    code?: string;
    response?: string;
}

export const POST = async (request: Request) => {
    try {
        const { email } = await request.json();

        // Validate environment variables
        if (!process.env.SMTP_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.RECIPIENT_EMAIL) {
            console.error('Missing required environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587, // Hostinger typically uses port 587 for TLS
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false // Only use this in development
            },
            debug: true,
        });

        // Verify SMTP connection
        try {
            await transporter.verify();
            console.log('SMTP connection verified successfully');
        } catch (verifyError: unknown) {
            const error = verifyError as SMTPError;
            console.error('SMTP connection verification failed:', error);

            // Handle specific authentication errors
            if (error.code === 'EAUTH') {
                return NextResponse.json(
                    { error: 'Email authentication failed. Please check your email credentials.' },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { error: 'SMTP connection failed. Please check your SMTP settings.' },
                { status: 500 }
            );
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Newsletter Subscription`,
            text: `New subscription email: ${email}`,
            html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json(
            { message: 'Subscription successful!' },
            { status: 200 }
        );
    } catch (error: unknown) {
        const err = error as SMTPError;
        console.error('Detailed error sending email:', {
            error: err.message,
            stack: err.stack,
            code: err.code,
            response: err.response,
        });
        return NextResponse.json(
            { error: 'Failed to process subscription. Please check server logs for details.' },
            { status: 500 }
        );
    }
}; 