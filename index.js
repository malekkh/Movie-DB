const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// send the response "ok".
app.get('/', (req, res) => {
  res.send('ok');
});
// Create an express simple API
app.get('/test', (req, res) => {
  res.json({ status: 200, message: 'ok' });
});
app.get('/time', (req, res) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  res.json({
    status: 200,
    message: `${hours}:${minutes}`
  });
});

// Let's complicate the API
app.get('/hello/:id', (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    status: 200,
    message: `Hello, ${id}`
  });
});

app.get('/search', (req, res) => {
  const search = req.query.s;

  if (search) {
    res.status(200).json({
      status: 200,
      message: 'ok',
      data: search
    });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: 'you have to provide a search'
    });
  }
});