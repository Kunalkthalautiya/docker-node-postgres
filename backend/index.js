const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'myuser',
  host: 'db',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS current_time');
    res.json({ message: 'Hello, Docker!', dbTime: result.rows[0].current_time });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
