const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { email, subject, body } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "serkanuckc06@gmail.com",
      to: email,
      subject,
      text: "Hello world?",
      html: body,
    });
    res.status(200).json("send mail success");
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = sendMail;
