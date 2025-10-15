const nodemailer = require("nodemailer");

const sendMail = async (to, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const data = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: "Your OTP Code",
      text: "Your Otp is " + otp + " Expire in 5 minutes",
    });
    console.log("Email", data);
    
  } catch (err) {
    console.error("Error in sendMail", err);
  }
};

module.exports = sendMail;
