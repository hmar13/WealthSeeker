const models = require('../Models/user.model');

exports.checkUserInformation = async (req, res) => {
  try {
    const userInfo = await models.checkUser(req.body)
    res.status(201);
    res.send(userInfo);
  } catch (err) {
    console.log("error:", err);
    res.sendStatus(500);
  }
}

exports.postNewUser = (req, res) => {
  try {
    models.postNewUser(req.body);
    res.status(201);
    res.send(['Created User']);
  } catch (err) {
    console.log("error:", err);
    res.sendStatus(500);
  }
};
