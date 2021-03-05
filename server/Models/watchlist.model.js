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

exports.deleteTicker = (data) => {
  db.query(
    `
    UPDATE users
    SET userwatchlist = array_remove(userwatchlist, '${data.ticker}')
    WHERE id = ${data.userId};
    `
  );
}