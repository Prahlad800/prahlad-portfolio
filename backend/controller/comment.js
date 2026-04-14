// controllers/contactController.js

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import nodemailer from "nodemailer";
import { Comment } from "../model/comment.js";

export const submitContact = async (req, res) => {
    try {
        const { name, email, comment } = req.body;

        // 👉 1. Save in MongoDB
        const savedData = await Comment.create({
            name,
            email,
            comment
        });

        // 👉 2. Email Setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",   
            port: 587,                
            secure: false,            
            family: 4,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // 👉 3. Send Email to YOU
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: "prahlad0227@gmail.com",
            subject: "🚀 New Contact Message आया है",
            html: `
                <h2>New Contact Message</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Comment:</b> ${comment}</p>
            `
        });

        res.status(200).json({
            success: true,
            message: "Message saved & email sent ✅"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error sending message ❌ ${error}`
        });
    }
};