const { Pool } = require('pg');
const pool = new Pool({
  user: 'haydn',
  host: 'localhost',
  database: 'soloproject',
  password: '',
  port: 5432,
});

pool.connect(err => {
  if (err) {
    console.error('Connection Error to PostgreSQL: ', err.stack)
  } else {
    console.log('Connected to PostgreSQL')
  }
})

module.exports = pool;