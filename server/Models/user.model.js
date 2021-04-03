const db = require('./index');

exports.checkUser = async (data) => {
  try {
    const result = await db.query(
      `
      SELECT id, username, userwatchlist
      FROM users
      WHERE (username = '${data.username}') AND (userpassword = '${data.userpassword}')
      `
    );
    return result.rows;
  } catch (error) {
    console.error('Error getting username/password', error);
    return error;
  }
};

exports.postNewUser = (data) => {
  db.query(
    `
    INSERT INTO users (username, userpassword, useremail, userwatchlist)
    VALUES ($1, $2, $3, '{}')
    `,
    [data.username, data.userpassword, data.useremail]
  );
};