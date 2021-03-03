const db = require('./index');

// Get User Information
exports.getAll = async () => {
  const res = await db.query('SELECT * FROM users');
  return res.rows;
};

// Create a new User
exports.postNewUser = (data) => {
  return db.query(
    `INSERT INTO users (userid, username, userpassword, useremail, userwatchlist)
    VALUES ($1, $2, $3, $4, $5)`,
    [data.userId, data.userName, data.userPassword, data.userEmail, data.userWatchList]
  );
};

// -- INSERT INTO users (userid, username, userpassword, useremail, userwatchlist)
// -- VALUES ('21234', '2testUsername', '2testPassword', '2testEmail@gmail.com', '{"TSLA", "AMZN", "MSFT"}')