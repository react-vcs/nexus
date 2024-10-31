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
  // Ensure environment variables are defined
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Email credentials are not defined in the environment variables."
    );
    return 0; // Failure: Return 0
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `Nexus - News Portal <${user}>`,
      to: to,
      subject: subject,
      text: body,
    };

    await transporter.sendMail(mailOptions);
    return 1; // Success: Return 1
  } catch (error) {
    console.error("Error sending email:", error);
    return 0; // Failure: Return 0
  }
};
