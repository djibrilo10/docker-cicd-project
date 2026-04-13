const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Version 3  CI/CD fonctionne ! ");
});

app.listen(3000, () => console.log("Running on port 3000 - app.js:8"));