const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: '587',
  secure: true,
});

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
