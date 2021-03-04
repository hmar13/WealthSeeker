const db = require('./index');

// Check User Information
exports.checkUser = async (data) => {
  try {
    // console.log(data.username, data.userpassword)
    const result = await db.query(
      `SELECT userid, username, userwatchlist
      FROM users
      WHERE (username = '${data.username}') AND (userpassword = '${data.userpassword}')`
    );
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error getting username/password', error);
    return error;
  }
};

// Create a new User
exports.postNewUser = (data) => {
  db.query(
    `INSERT INTO users (userid, username, userpassword, useremail, userwatchlist)
    VALUES ($1, $2, $3, $4, $5)`,
    [data.userid, data.username, data.userpassword, data.useremail, data.userwatchList]
  );
};

// -- INSERT INTO users (userid, username, userpassword, useremail, userwatchlist)
// -- VALUES ('21234', '2testUsername', '2testPassword', '2testEmail@gmail.com', '{"TSLA", "AMZN", "MSFT"}')