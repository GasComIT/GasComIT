const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(3000, () => {
  console.log('server started successfully');
});
