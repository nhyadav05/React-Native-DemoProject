// backend/utils/mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nehayadavneha0509@gmail.com', // Your email address
    pass: 'qxti mhbh tzgu slfs', // Your email password
  },
});

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: 'nehayadavneha0509@gmail.com', // Your email address
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendMail;
