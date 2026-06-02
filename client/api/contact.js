const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }

  let data = req.body;
  if (
    !data.name ||
    !data.email ||
    !data.message ||
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.status(400).json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER || "edubabadigital@gmail.com",
      pass: process.env.EMAIL_PASS || "use-your-correct-password-here",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "edubabadigital@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  try {
    await new Promise((resolve, reject) => {
      smtpTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
    return res.status(200).json({ msg: "Thank You For Contacting Ehizeex." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "There is a server error" });
  }
}
