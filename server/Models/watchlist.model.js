const db = require('./index');

exports.postToWatchlist = (data) => {
  db.query(
    `
    UPDATE users
    SET userwatchlist = array_append(userwatchlist, '${data.ticker}')
    WHERE id = ${data.userId};
    `
  );
};