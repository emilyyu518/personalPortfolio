const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: '587',
  secure: true,
});

// app.use('/', express.static(`${__dirname}/client/build`));

app.post('/api/contact', (req, res) => {
  res.send('Hello from the new server!');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
