// import nodemailer from "nodemailer";
// export const sendMail = async (subject, to, body) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
//   const mailOptions = {
//     from: `Nexus - News Portal <process.env.EMAIL_USER>`,
//     to: to,
//     subject: `${subject}`,
//     text: `${body}`,
//   };
//   return transporter.sendMail(mailOptions);
// };

import nodemailer from "nodemailer";

export const sendMail = async (subject, to, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Nexus - News Portal <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      text: body,
    };

    await transporter.sendMail(mailOptions);
    return 1; // Success: Return 1
  } catch (error) {
    return 0; // Failure: Return 0
  }
};
