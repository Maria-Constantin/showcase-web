const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from your React frontend
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', 
      pass: 'your-email-password', 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your-email@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    });
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message.');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
