const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
let transporter = 
nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = 
functions.database.ref('/messages/{uri}').onCreate(event => {
  const snapshot = event.data;

  const message = snapshot.val();

  let mailOptions = {
    to: 'MarkMatthewGarnett@gmail.com',
    subject: 'New Message from markgarnettauthor.firebaseapp.com',
    html: `<p>From: ${message.name}</p><p>Email: ${message.email}</p>${message.content}`
  };

  return transporter.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: MarkMatthewGarnett@gmail.com')
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
