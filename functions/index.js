const {functions} = require("firebase-functions");
const {nodemailer} = require("nodemailer");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.email.username, 
    pass: functions.email.password, 
  },
});

exports.sendContactEmail = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    const { name, email, message } = snap.data();

    const mailOptions = {
      from: email,
      to: functions.email.username, 
      subject: `New contact form submission from ${name}`,
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
