const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('database.db');

app.post('/submit', (req, res) => {
  const q1Answer = req.body.q1;
  const q2Answer = req.body.q2;
  const q3Answer = req.body.q3;

  db.run('INSERT INTO results (q1, q2, q3) VALUES (?, ?, ?)', [q1Answer, q2Answer, q3Answer], (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/results', (req, res) => {
  db.all('SELECT * FROM results', (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
