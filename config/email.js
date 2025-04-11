const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'w.munyaneza@alustudent.com', 
    pass: 'cihm nvqf ypgo tyyt'     
  }
});
module.exports = transporter;