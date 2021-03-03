const models = require('../Models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await models.getAll();
    res.status(200);
    res.send(allUsers);
  } catch (err) {
    console.log("error:", err);
    res.sendStatus(500);
  }
};
exports.postNewUser = (req, res) => {
  try {
    models.postNewUser(req.body);
    res.status(201);
    res.send();
  } catch (err) {
    console.log("error:", err);
    ctx.sendStatus(500);
  }
};
