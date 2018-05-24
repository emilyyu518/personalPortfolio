const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const app = express();
const port = process.env.PORT || 5000;
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: 'emilyyu.me',
  }
};
const transporter = nodemailer.createTransport(mailgun(auth));

// app.use('/', express.static(`${__dirname}/client/build`));
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { sender, subject, text } = req.body;
  const message = {
    from: sender,
    to: 'hello@emilyyu.me',
    subject,
    text,
    priority: 'high',
  };

  transporter.sendMail(message)
    .then((info) => {
      res.send('Successfully sent!');
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
