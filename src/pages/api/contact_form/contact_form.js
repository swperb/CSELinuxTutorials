// pages/api/contact.js

import nodemailer from 'nodemailer';

import { prisma } from '@/_base'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body;

            // Save to Prisma
            const result = await prisma.contact_forms.create({
                data: {
                    name,
                    email,
                    message,
                },
            });

            // Send email notification
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASS,
                }, 
                tls: {
                    rejectUnauthorized: false 
                }

            });
            
            const info = await transporter.sendMail({
                from: email,
                to: "stephenproctor291@gmail.com",
                subject: "New Contact Form Submission",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit contact form' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
