const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Bonjour CI/CD Docker App ");
});

app.listen(3000, () => console.log("Running on port 3000 - app.js:8"));