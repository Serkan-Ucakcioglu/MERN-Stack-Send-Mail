const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { email, subject, body } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: "serkanuckc06@gmail.com",
      to: email,
      subject,
      text: "Hello world?",
      html: body,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = sendMail;
