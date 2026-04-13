const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD App</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            text-align: center;
          }

          .container {
            background: rgba(0, 0, 0, 0.4);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.5);
            max-width: 500px;
          }

          img {
            width: 120px;
            margin-bottom: 20px;
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }

          p {
            font-size: 1.3rem;
            margin-bottom: 20px;
          }

          .badge {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 30px;
            background: #00ffcc;
            color: black;
            font-weight: bold;
          }

          .footer {
            margin-top: 20px;
            font-size: 0.9rem;
            opacity: 0.7;
          }
        </style>
      </head>
      <body>
        <div class="container">

          
          <img src="https://picsum.photos/200" />

          <h1>focuszone CI/CD Pipeline</h1>
          <p>Version 5 fonctionne parfaitement !</p>

          <div class="badge">Docker + GitHub Actions</div>

          <div class="footer">
            Déployé avec CI/CD
          </div>

        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log("Running on port 3000 - app.js:82"));