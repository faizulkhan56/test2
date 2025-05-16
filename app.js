const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from test2');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
