const userModels = require('../Models/user.model');
const watchlistModels = require('../Models/watchlist.model');

exports.checkUserInformation = async (req, res) => {
  try {
    const userInfo = await userModels.checkUser(req.body)
    res.status(201);
    res.send(userInfo);
  } catch (err) {
    console.error("error:", err);
    res.sendStatus(500);
  }
}

exports.postNewUser = (req, res) => {
  try {
    userModels.postNewUser(req.body);
    res.status(201);
    res.send(['Created User']);
  } catch (err) {
    console.error("error:", err);
    res.sendStatus(500);
  }
};

exports.postToWatchlist = (req, res) => {
  try {
    watchlistModels.postToWatchlist(req.body);
    res.status(201);
    res.send(['Added to Watchlist']);
  } catch (err) {
    console.error("error:", err)
    res.sendStatus(500);
  }
}

exports.deleteTicker = (req, res) => {
  try {
    watchlistModels.deleteTicker(req.body);
    res.status(201);
    res.send(['Deleted from Watchlist'])
  } catch (err) {
    console.error("err", err);
    res.sendStatus(500);
  }
}