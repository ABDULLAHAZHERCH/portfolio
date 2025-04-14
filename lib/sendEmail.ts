import nodemailer from "nodemailer";

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async ({ email, subject, message }: EmailOptions) => {
  try {
    // Parse port as a number
    const port = Number(process.env.SMTP_PORT);

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL, // sender address
      to: process.env.SMTP_FROM_EMAIL, // recipient email
      subject: subject, // Subject line
      html: message, // html body
    });

    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

export default sendEmail;
