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