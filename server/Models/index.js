require('dotenv').config()

const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect(err => {
  if (err) {
    console.error('Connection Error to PostgreSQL: ', err.stack)
  } else {
    console.log('Connected to PostgreSQL')
  }
})

module.exports = pool;
