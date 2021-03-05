const userModels = require('../Models/user.model');
const watchlistModels = require('../Models/watchlist.model');

exports.checkUserInformation = async (req, res) => {
  try {
    const userInfo = await userModels.checkUser(req.body)
    res.status(201);
    res.send(userInfo);
  } catch (err) {
    console.log("error:", err);
    res.sendStatus(500);
  }
}

exports.postNewUser = (req, res) => {
  try {
    res.status(201);
    res.send(['Created User']);
  } catch (err) {
    console.log("error:", err);
    res.sendStatus(500);
  }
};

exports.postToWatchlist = (req, res) => {
  try {
    console.log('req', req.body)
    watchlistModels.postToWatchlist(req.body);
    res.status(201);
    res.send(['Added to Watchlist']);
  } catch (err) {
    console.log("error:", err)
    res.sendStatus(500);
  }
}
