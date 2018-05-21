const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/contact', (req, res) => {
  res.send({ express: 'Hello from the new server!' });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
