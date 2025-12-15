import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const gmail = process.env.GMAIL;
const password = process.env.PASSWORD;


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  logger: true,
  debug: true,
  auth: {
    user: gmail,
    pass: password,
  },
});

export default transporter;
